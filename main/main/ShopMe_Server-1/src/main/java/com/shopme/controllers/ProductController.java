package com.shopme.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
import org.springframework.web.multipart.MultipartFile;

import com.shopme.dtos.ProductDto;
import com.shopme.dtos.Response;
import com.shopme.entities.Feedback;
import com.shopme.entities.Product;
import com.shopme.exceptions.CustomException;
import com.shopme.services.ImageHandlingService;
import com.shopme.services.ProductServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductServiceImpl productService;
	// dep : image handling service i/f

	// dep : image handling service i/f
	@Autowired
	private ImageHandlingService imageHandlingService;
	

	

	// Add products
	@PostMapping("/add") // done
	public @ResponseBody ResponseEntity<?> addProduct(@RequestBody Product product) {
		Product result = productService.addProduct(product);
		if (result == null) {
			return Response.error("Only Vendor can add product");
		}
		return Response.success(result);
	}

	@GetMapping("/findbyname/{name}")
	public ResponseEntity<?> findProductByName(@PathVariable("name") String name) {
		List<Product> result = productService.findProductByName(name);
		if (result == null) {
			return Response.error("Not found product with name " + name);
		}
		return Response.success(result);
	}

	@GetMapping("/findbyprice/{price}")
	public ResponseEntity<?> findProductByPrice(@PathVariable("price") Double price) {
		List<Product> result = productService.findProductByProductPrice(price);
		return Response.success(result);
	}

	@GetMapping("/discountPrice/{discountPrice}")
	public ResponseEntity<?> findProductByDiscountPrice(@PathVariable("discountPrice") Double price) {
		List<Product> result = productService.findProductByProductDiscountPrice(price);
		return Response.success(result);
	}

	// done
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteProductById(@PathVariable("id") int id) {
		Product product = productService.findProductById(id);
		if (product != null) {
			Product deletedProduct = productService.deleteProductById(id);
			return Response.success(deletedProduct);
		} else {
			return Response.error("product does not exists");
		}

	}

	@GetMapping("/sort/{field}")
	public ResponseEntity<?> sortProductByField(@PathVariable("field") String[] field) {
		List<Product> product = productService.sortProductByField(field);
		if (product != null) {
			return Response.success(product);
		} else {
			return Response.error("product does not esists");
		}
	}

	@GetMapping("/show")
	public ResponseEntity<?> showProduct() {
		List<Product> product = productService.showAllProduct();
		if (product != null) {
			return Response.success(product);
		} else {
			return Response.error("product does not esists");
		}
	}

	@GetMapping("/findbyid/{id}")
	public ResponseEntity<?> findProductByName(@PathVariable("id") int id) {
		Product result = productService.findProductById(id);
		if (result == null) {
			return Response.error("Not found product with id " + id);
		}
		return Response.success(result);
	}

	// findby category Name
	@GetMapping("/findbycname/{Cname}")
	public ResponseEntity<?> findProductBycName(@PathVariable("Cname") String Cname) {
		List<Product> result = productService.findProductByCName(Cname);
		if (result == null) {
			return Response.error("Not found product with category " + Cname);
		}
		return Response.success(result);
	}

	// Find By sub category name
	@GetMapping("/findbysname/{Sname}")
	public ResponseEntity<?> findProductBySName(@PathVariable("Sname") String Sname) {
		List<Product> result = productService.findProductBySName(Sname);
		if (result == null) {
			return Response.error("Not found product with subcategory " + Sname);
		}
		return Response.success(result);
	}

	// add feedback
	@PostMapping("/feedbackadd")
	public ResponseEntity<?> addFeedback(@RequestBody Feedback newFeedback) throws CustomException {
		Feedback feedback = productService.addFeedback(newFeedback);
		if (feedback == null)
			return Response.error("Failure");
		return Response.success(newFeedback);
	}

	@GetMapping("/feedback/{id}")
	public ResponseEntity<?> showFeedbackById(@PathVariable("id") int id) throws CustomException {
		List<Feedback> list = productService.findAllFeedBackByProductId(id);
		if (list == null)
			return Response.error("No feedback found");
		return Response.success(list);
	}

	// UPDATE PRODUCT BY PID

	// edit info
	@PutMapping("/update/{id}")
	public @ResponseBody ResponseEntity<?> updateProduct(@PathVariable int id, @RequestBody Product ProductDetails)
			throws CustomException {
		Product product = productService.updateProduct(id, ProductDetails);
		if (product == null) {
			return Response.error("product does not exist with this id");
		} else {
			return Response.success(product);
		}

	}

	// add a method to upload image on the server side folder
	@PostMapping("/{prodId}/image")
	public ResponseEntity<?> uploadImage(@PathVariable int prodId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload image " + prodId);
		System.out.println("uploaded img file name " + imageFile.getOriginalFilename() + " content type "
				+ imageFile.getContentType() + " size " + imageFile.getSize());
		// invoke service layer method to save uploaded file in the server side folder
		// --ImageHandligService
		ProductDto productDto = imageHandlingService.storeImage(prodId, imageFile);
		return ResponseEntity.ok(productDto);
	}

	// add req handling method to download image for specific emp
	@GetMapping(value = "/{prodId}/image", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
			MediaType.IMAGE_PNG_VALUE })
	public ResponseEntity<?> downloadImage(@PathVariable int prodId) throws IOException {
		System.out.println("in img download " + prodId);
		// invoke service layer method , to get image data from the server side folder
		byte[] imageContents = imageHandlingService.restoreImage(prodId);
		return ResponseEntity.ok(imageContents);
	}

}
