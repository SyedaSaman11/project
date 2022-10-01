package com.shopme.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class ProductDto {
	
	private String productName;
	@JsonProperty(access = Access.READ_ONLY)
    private String productImage;
	private String productDescription;
	private int productQuantity;
	private Double productPrice;
	private Double productDiscount;
	private int userId;
	//private String categoryName;
	//private String subCategoryName;
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
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
//	public String getCategoryName() {
//		return categoryName;
//	}
//	public void setCategoryName(String categoryName) {
//		this.categoryName = categoryName;
//	}
//	public String getSubCategoryName() {
//		return subCategoryName;
//	}
//	public void setSubCategoryName(String subCategoryName) {
//		this.subCategoryName = subCategoryName;
//	}
	
	public ProductDto() {
		super();
	}

	
	
	
	
}
