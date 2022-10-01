package com.shopme.dtos;

import org.springframework.lang.NonNull;

public class AddToOrderDto {

	private int id;
	private @NonNull int productId;
	private @NonNull int quantity;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public AddToOrderDto() {
		super();
		
	}

	@Override
	public String toString() {
		return "AddToCartDto [id=" + id + ", productId=" + productId + ", quantity=" + quantity + "]";
	}

	public AddToOrderDto(int id, int productId, int quantity) {
		super();
		this.id = id;
		this.productId = productId;
		this.quantity = quantity;
	}

}
