package com.shopme.dtos;

import java.util.List;

public class CartDto {

	private List<CartItemsDto> cartItems;
	private double totalCost;

	public List<CartItemsDto> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<CartItemsDto> cartItems) {
		this.cartItems = cartItems;
	}

	public double getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}

	public CartDto(List<CartItemsDto> cartItems, double totalCost) {
		super();
		this.cartItems = cartItems;
		this.totalCost = totalCost;
	}

	@Override
	public String toString() {
		return "CartDto [cartItems=" + cartItems + ", totalCost=" + totalCost + "]";
	}

	public CartDto() {
		super();
	}

}
