package com.shopme.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shopme.daos.CartDao;
import com.shopme.daos.OrderDao;
import com.shopme.daos.ProductDao;
import com.shopme.dtos.AddToCartDto;
import com.shopme.dtos.CartDto;
import com.shopme.dtos.CartItemsDto;
import com.shopme.entities.Cart;
import com.shopme.entities.Order;
import com.shopme.entities.Product;
import com.shopme.entities.User;
import com.shopme.exceptions.CustomException;

@Transactional//when we define here it get applied to all methods and subclass reduce code managed by this
@Service//it says that it provide service logic of the project
public class CartServiceImpl {

	@Autowired
	private ProductServiceImpl productServiceImpl;
	@Autowired
	private UserServiceImpl userServiceImpl;

	@Autowired
	private CartDao cartDao;
	@Autowired
	private OrderDao orderDao;
	@Autowired
	private ProductDao productDao;
	
	

	private List<Integer> productIdList(int userId){
		return cartDao.findProductId(userId);
	}
	
	public Cart addToCart(AddToCartDto addToCartDto, User user) {
		// validate if product id is valid
		if (user == null) {
			throw new CustomException("User not found Cant add to cart");
		} 
		else if(user.getRole().contentEquals("Vendor") )
		{
			throw new CustomException("only customer can buy the product");
		}
		else {
			int uId = user.getUserId();
			
			List<Integer> productList = productIdList(uId);
			
			for(int i =0; i< productList.size() ; i++) {
				int p = (int)productList.get(i);
				if(p == addToCartDto.getProductId()) {
					throw new CustomException("product already added in to cart");
				}
			}
			Product product = productServiceImpl.findById(addToCartDto.getProductId());
			Cart cart = new Cart();

			cart.setProduct(product);

			cart.setUser(user);

			cart.setQuantity(1);

			cart.setCreatedDate(new Date());

			// save the cart
			cartDao.save(cart);

			return cart;
		}
	}

	// show cart items

	public CartDto listCartItems(User user) {
		final List<Cart> cartList = cartDao.findAllByUserOrderByCreatedDateDesc(user);
		List<CartItemsDto> cartItems = new ArrayList<CartItemsDto>();
		double totalcost = 0;
		for (Cart cart : cartList) {
			CartItemsDto cartItemsDto = new CartItemsDto(cart);
			totalcost += cartItemsDto.getQuantity() * cartItemsDto.getProduct().getProductFinalPrice();
			cartItems.add(cartItemsDto);

		}
		CartDto cartDto = new CartDto();
		cartDto.setTotalCost(totalcost);
		cartDto.setCartItems(cartItems);
		// user.setWalletBalance(user.getWalletBalance()-cartDto.getTotalCost());
		// System.out.println(user.getWalletBalance());
		return cartDto;
	}

	public void deleteCartItem(int cartItemId, User user) {

		// the item id belongs to user

		Optional<Cart> optionalCart = cartDao.findById(cartItemId);
		if (optionalCart.isEmpty()) {
			throw new CustomException("CartItem id is Invalid");
		}
		Cart cart = optionalCart.get();
		if (cart.getUser() != user) {
			throw new CustomException("Cart Item does not belong to User :" + cartItemId);
		}
		cartDao.delete(cart);
	}

	//on checkout click
	// payment
	public void deleteAllCartItems(User user) {

		int userId = user.getUserId();
		
		payment(user);
		orderDao.addToOrder(userId);
		// delete all cart
		List<Cart> cartlist = cartDao.findCartByuserId(userId);

		cartDao.deleteAll(cartlist);

	}

	// add or remove balance
	// user.setWalletBalance(user.getWalletBalance()-cartDto.getTotalCost());


	public void payment(User user) throws CustomException {
		final List<Cart> cartList = cartDao.findAllByUserOrderByCreatedDateDesc(user);
		List<CartItemsDto> cartItems = new ArrayList<CartItemsDto>();
		double totalcost = 0;
		for (Cart cart : cartList) {
			CartItemsDto cartItemsDto = new CartItemsDto(cart);
			int productId = cartItemsDto.getProduct().getProductId();
			int productQtyInProduct = cartItemsDto.getProduct().getProductQuantity();
			int productQtyInCart = cartItemsDto.getQuantity();
			
			if(productQtyInProduct >= productQtyInCart) {
				totalcost += cartItemsDto.getQuantity() * cartItemsDto.getProduct().getProductFinalPrice();
				cartItems.add(cartItemsDto);
				int userId = cartItemsDto.getProduct().getUser().getUserId();
				User vendor = userServiceImpl.findUserById(userId);
				vendor.setWalletBalance((vendor.getWalletBalance() + totalcost));
				
				productDao.removeQtyAftrPay(productId,productQtyInCart);
				
				System.out.println(vendor.getWalletBalance());
			} else {
				throw new CustomException("Choosen product Quantity is out of stock ");
			}
		}
		CartDto cartDto = new CartDto();
		cartDto.setTotalCost(totalcost);
		cartDto.setCartItems(cartItems);
		if((user.getWalletBalance() - cartDto.getTotalCost() ) <= 0)
		{
			throw new CustomException("Insufficient balance");
		}
		else {
		user.setWalletBalance(user.getWalletBalance() - cartDto.getTotalCost());
		System.out.println(user.getWalletBalance());
		}
	}

	// payment
	
	public int incrementedQuentity(Product product, User user) {
		int pId = product.getProductId();
		int qty = product.getProductQuantity();
		int uId = user.getUserId();
		if(qty > cartDao.totalQuantityOfProduct(pId, uId)) {
			int increQty = cartDao.incrementQuentity(pId, uId);
			return increQty;
		}
		else {
			throw new CustomException("limit reached increment");
		}
		
	}
	
	public int decrementedQuentity(Product product, User user) {
		int pId = product.getProductId();
		int uId = user.getUserId();
		if(1 != cartDao.totalQuantityOfProduct(pId, uId)) {
			int decQty = cartDao.decrementQuentity(pId, uId);
			return decQty;
		}
		else {
			throw new CustomException("limit reached decrement");
		}
		
		
		
	}

	public int TotalNumberOfProductInCartByUser(User user) {
		int userId = user.getUserId();
		
		int totalProducts = cartDao.findTotalNumberOfProductsInCart(userId);
		return totalProducts;
	}
	
}
