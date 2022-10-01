package com.shopme.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shopme.daos.CategoryDao;
import com.shopme.daos.FeedbackDao;
import com.shopme.daos.ProductDao;
import com.shopme.daos.SubCategoryDao;
import com.shopme.daos.UserDao;
import com.shopme.entities.Category;
import com.shopme.entities.Feedback;
import com.shopme.entities.Product;
import com.shopme.entities.SubCategory;
import com.shopme.entities.User;
import com.shopme.entities.Vendor;
import com.shopme.exceptions.CustomException;
import com.shopme.exceptions.ProductNotExistsException;

@Transactional
@Service
public class ProductServiceImpl {

	@Autowired
	private FeedbackDao feedbackDao;
	@Autowired
	private ProductDao productDao;
	@Autowired
	private UserDao userDao;

	/*
	 * public Feedback addFeedback(Feedback newFeedback) { Feedback feedback =
	 * feedbackDao.save(newFeedback); return feedback; }
	 * 
	 * public Feedback findFeedbackByRating(Feedback newFeedback) { Feedback
	 * feedback = feedbackDao.findByRating(newFeedback); return feedback; }
	 */

	public Product addProduct(Product product) {

		int userid = product.getUser().getUserId();
		User user = userDao.findByUserId(userid);
		if (user == null) {
			return null;
		}
		if (user.getRole().contentEquals("Vendor")) {
			Product savedproductdetails = productDao.save(product);
			return savedproductdetails;
		} else {
			return null;
		}
	}

	public Product findProductById(int id) {
		Product result = productDao.findByProductId(id);
		if (result == null) {
			throw new CustomException("product not present");
		}
		return result;
	}

	// find product by name
	public List<Product> findProductByName(String name) {
		List<Product> result = productDao.findByproductName(name);
		System.out.println(result);
		if (result == null) {
			return null;
		} else
			return result;
	}

	// Find product by price
	public List<Product> findProductByProductPrice(Double price) {
		List<Product> productPrice = productDao.findByProductFinalPrice(price);
		return productPrice;
	}

	public List<Product> findProductByProductDiscountPrice(Double discountPrice) {
		List<Product> productDiscountPrice = productDao.findByProductDiscount(discountPrice);
		return productDiscountPrice;
	}

	public Product deleteProductById(int id) {
		Product product = productDao.findByProductId(id);
		productDao.delete(product);
		return product;
	}

	public List<Product> sortProductByField(String[] field) {
//Creates a new Sort for the given Orders.
		List<Product> product = productDao.findAll(Sort.by(Direction.DESC, field));
		return product;

	}

	public List<Product> showAllProduct() {
		List<Product> product = productDao.findAll();
		return product;
	}

//find product by product id
	public Product findById(int productId) throws ProductNotExistsException {
		Optional<Product> optionalProduct = productDao.findById(productId);
		if (optionalProduct.isEmpty()) {
			// here exception
			throw new ProductNotExistsException("product id " + " -> " + productId + " " + "is not valid");

		} else {
			return optionalProduct.get();
		}

	}

	public List<Product> findProductByCName(String cname) {
		List<Product> productlist = productDao.findByCname(cname);
		if (productlist.isEmpty()) {
			return null;
		} else {
			return productlist;
		}
	}

	public List<Product> findProductBySName(String sname) {
		List<Product> productlist = productDao.findBySname(sname);
		if (productlist.isEmpty()) {
			return null;
		} else {
			return productlist;
		}
	}

	public Feedback addFeedback(Feedback newFeedback) throws CustomException {

		int uid = newFeedback.getUser().getUserId();
		User user = userDao.findByUserId(uid);
		String role = user.getRole();
		int pid = newFeedback.getProduct().getProductId();
		Product product = productDao.findByProductId(pid);
		if (product == null) {
			throw new CustomException("Please select added product first , product does not exists");
		}
		if (user.getRole().contentEquals("Customer")) {
			Feedback feedback = feedbackDao.save(newFeedback);
			System.out.println(newFeedback);
			return feedback;

		} else {
			return null;
		}

	}

	public List<Feedback> findAllFeedBackByProductId(int id) throws CustomException {

		List<Feedback> list = feedbackDao.findByProductId(id);
		if (list == null) {
			throw new CustomException("No Feedback found");
		} else {
			return list;
		}
	}

	// Update user basic info
	public Product updateProduct(int id, Product ProductDetails)throws CustomException {

		try {
			Product updateProduct = productDao.findByProductId(id);
			if (updateProduct == null) {
				throw new CustomException("product not found !");
			} else {
				if(ProductDetails.getProductName() != null)
					updateProduct.setProductName(ProductDetails.getProductName());
				if(ProductDetails.getProductImage() != null)
					updateProduct.setProductImage(ProductDetails.getProductImage());
				if(ProductDetails.getProductQuantity() !=  0)
					updateProduct.setProductQuantity(ProductDetails.getProductQuantity());
				if(ProductDetails.getProductDescription() != null)
					updateProduct.setProductDescription(ProductDetails.getProductDescription());
				if(ProductDetails.getProductPrice() != null)
					updateProduct.setProductPrice(ProductDetails.getProductPrice());
				if(ProductDetails.getProductDiscount() != null)
					updateProduct.setProductDiscount(ProductDetails.getProductDiscount());
				if(ProductDetails.getProductFinalPrice() != null)
					updateProduct.setProductFinalPrice(ProductDetails.getProductFinalPrice());
				
				return updateProduct;
			}
		} catch (NullPointerException e) {
			throw new CustomException(""+e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}
	}


}
