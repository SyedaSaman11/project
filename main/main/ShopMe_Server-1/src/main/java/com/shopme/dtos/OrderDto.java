package com.shopme.dtos;

import java.util.Date;

import com.shopme.entities.Product;

public class OrderDto {

	private int id;
	private int quantity;
	private Product product;
	private Date createddate;
	private int userId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Date getCreateddate() {
		return createddate;
	}

	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "OrderDto [id=" + id + ", quantity=" + quantity + ", product=" + product + ", createddate=" + createddate
				+ ", userId=" + userId + "]";
	}

}
