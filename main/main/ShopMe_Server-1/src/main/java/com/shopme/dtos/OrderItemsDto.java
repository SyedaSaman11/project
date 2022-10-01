package com.shopme.dtos;

import java.util.Date;

import com.shopme.entities.Cart;
import com.shopme.entities.Order;
import com.shopme.entities.Product;

public class OrderItemsDto
{
	private int id;
	private int quantity;
	private  Product product;
	private Date createdDate;
	
	public OrderItemsDto() {
		super();
	}
	
	public OrderItemsDto(Order order)
	{
		this.id = order.getId();
		this.quantity = order.getQuantity();
		this.setProduct(order.getProduct());
		this.createdDate = order.getCreatedDate();
	}

	public OrderItemsDto(int id, int quantity, Product product, Date createdDate) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.product = product;
		this.createdDate = createdDate;
	}

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

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	@Override
	public String toString() {
		return "OrderItemsDto [id=" + id + ", quantity=" + quantity + ", product=" + product + ", createdDate="
				+ createdDate + "]";
	}
}