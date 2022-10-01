package com.shopme.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "product")
public class Product {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int productId;
	private String productName;
	private String productImage;
	private String productDescription;
	private int productQuantity;
	private Double productPrice;
	private Double productDiscount;

	private Double productFinalPrice;

	@ManyToOne()
	@JoinColumn(name = "companyName")
	@JsonIgnoreProperties("product")
	private Vendor vendor;

	@ManyToOne
	@JoinColumn(name = "subCategoryName")
	@JsonIgnoreProperties("listOfProduct")
	private SubCategory subCategory;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	@JsonIgnoreProperties("product")
	private User user;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "categoryName")
	private Category category;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "product",orphanRemoval = true)
	private List<Feedback> listOfFeedback;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "id",orphanRemoval = true)
	private List<Cart> cart;
	
	
	
	
	public List<Cart> getCart() {
		return cart;
	}

	public void setCart(List<Cart> cart) {
		this.cart = cart;
	}

	




	
	
	public List<Feedback> getListOfFeedback() {
		return listOfFeedback;
	}

	public void setListOfFeedback(List<Feedback> listOfFeedback) {
		this.listOfFeedback = listOfFeedback;
	}

	public User getUser() {
		return user;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public Product() {

	}

	public Product(int productId, String productName, String productImage, String productDescription,
			int productQuantity, Double productPrice, Double productDiscount, Double productFinalPrice, Vendor vendor) {
		this.productId = productId;
		this.productName = productName;
		this.productImage = productImage;
		this.productDescription = productDescription;
		this.productQuantity = productQuantity;
		this.productPrice = productPrice;
		this.productDiscount = productDiscount;
		this.productFinalPrice = productFinalPrice;
		this.vendor = vendor;
	}

	public Product(int productId, String productName, String productImage, String productDescription,
			int productQuantity, Double productPrice, Double productDiscount, Double productFinalPrice) {

		this.productId = productId;
		this.productName = productName;
		this.productImage = productImage;
		this.productDescription = productDescription;
		this.productQuantity = productQuantity;
		this.productPrice = productPrice;
		this.productDiscount = productDiscount;
		this.productFinalPrice = productFinalPrice;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	public Double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}

	public Double getProductDiscount() {
		return productDiscount;
	}

	public void setProductDiscount(Double productDiscount) {
		this.productDiscount = productDiscount;
	}

	public Double getProductFinalPrice() {
		return this.productFinalPrice;
	}

	public void setProductFinalPrice(Double productFinalPrice) {
		// this.productFinalPrice = this.productPrice - (this.productPrice *
		// this.productDiscount);
		productFinalPrice = getProductPrice() - (getProductPrice() * getProductDiscount() / 100);
		this.productFinalPrice = productFinalPrice;// getProductPrice()-(getProductPrice() * getProductDiscount());
	}

	public SubCategory getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(SubCategory subCategory) {
		this.subCategory = subCategory;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productImage=" + productImage
				+ ", productDescription=" + productDescription + ", productQuantity=" + productQuantity
				+ ", productPrice=" + productPrice + ", productDiscount=" + productDiscount + ", productFinalPrice="
				+ productFinalPrice + "]";
	}

}
