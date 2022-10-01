package com.shopme.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopme.daos.CartDao;
import com.shopme.dtos.AddToCartDto;
import com.shopme.dtos.CartDto;
import com.shopme.dtos.Response;
import com.shopme.entities.Cart;
import com.shopme.entities.Product;
import com.shopme.entities.User;
import com.shopme.exceptions.CustomException;
import com.shopme.services.CartServiceImpl;
import com.shopme.services.ProductServiceImpl;
import com.shopme.services.UserServiceImpl;

@CrossOrigin(origins = "*") // to allow methods from this URL if there is proper request mapping
@RestController // combo of controller and response body u don't need to add it separately every time
@RequestMapping("/cart") // map all /cart request to this controller
public class CartController {
	// @Autowired can technically be declared on individual method or constructor parameters 
	//by Spring's dependency injection facilities you need not need to create its object 
	@Autowired
	private CartServiceImpl cartService;

	@Autowired
	private UserServiceImpl userService;
	
	@Autowired
	private CartDao cartDao;

	@Autowired
	private ProductServiceImpl productService;

	// cart add
//shortcut for @RequestMapping(method = RequestMethod.POST).
	@PostMapping("/add/{id}")
	public @ResponseBody ResponseEntity<?> addTocart(@RequestBody AddToCartDto addToCartDto,
			@PathVariable("id") int id) {

		User user = userService.findUserById(id);
		// System.out.println(user);
		Cart cart = cartService.addToCart(addToCartDto, user);

		return Response.success("Added product to cart successfully" + cart);
	}

	// get all cartitems for a user
	@GetMapping("/{id}")
	public @ResponseBody ResponseEntity<?> getCartItems(@PathVariable("id") int id) {

		User user = userService.findUserById(id);
		// System.out.println(user);
		// get cart items
		CartDto cartList = cartService.listCartItems(user);

		return Response.success(cartList);
	}

	// delete cart item by user
	@DeleteMapping("/delete/{cartItemId}/{id}")
	public @ResponseBody ResponseEntity<?> deleteCartItems(@PathVariable("cartItemId") int cartItemId,
			@PathVariable("id") int userid) {
		User user = userService.findUserById(userid);
		cartService.deleteCartItem(cartItemId, user);
		return Response.success("the cart items is deleted ");

	}

	// delete allcart item by userid on check out
	@DeleteMapping("/checkout/{id}")
	public @ResponseBody ResponseEntity<?> deleteAllCartItems(@PathVariable("id") int userid) {
		User user = userService.findUserById(userid);
		if (user == null) {
			return Response.error("user does not exist");
		} else {
			cartService.deleteAllCartItems(user);
			return Response.success("the cart items is deleted ");
		}
	}

	@PutMapping("/incqty/{userId}/{productId}")
	public @ResponseBody ResponseEntity<?> incrementQty(@PathVariable("userId") int userId,
			@PathVariable("productId") int productId, AddToCartDto addToCartDto) {
		User user = userService.findUserById(userId);
		Product product = productService.findProductById(productId);

		cartService.incrementedQuentity(product, user);
		return Response.success("Quentity Incremented by 1");

	}

	@PutMapping("/decqty/{userId}/{productId}")
	public @ResponseBody ResponseEntity<?> decrementQty(@PathVariable("userId") int userId,
			@PathVariable("productId") int productId, AddToCartDto addToCartDto) {
		User user = userService.findUserById(userId);
		Product product = productService.findProductById(productId);

		cartService.decrementedQuentity(product, user);
		return Response.success("Quentity Decrement by 1");

	}

	
	@GetMapping("/totalProducts/{userId}")
	public @ResponseBody ResponseEntity<?> totalProductsPerUserInCart (@PathVariable("userId") int userId) throws CustomException {
		List<Cart> cart = cartDao.findCartByuserId(userId);
		User user = userService.findUserById(userId);
		System.out.println(cart);
		
		if(user == null) {
				throw new CustomException ("Invalid user");
		} else {
			if(cart.isEmpty()) {
				throw new CustomException ("user yet not added any product to cart");
			} else {
				int totalproduct = cartService.TotalNumberOfProductInCartByUser(user);
				return Response.success(totalproduct);
			}
		}
	}
	
}
