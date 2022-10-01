package com.shopme.dtos;

import com.shopme.entities.Cart;
import com.shopme.entities.Product;

public class CartItemsDto
{
 private int id;
 private int quantity;
 private  Product product;
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
@Override
public String toString() {
	return "CartItemsDto [id=" + id + ", quantity=" + quantity + ", product=" + product + "]";
}
public CartItemsDto(int id, int quantity, Product product) {
	super();
	this.id = id;
	this.quantity = quantity;
	this.product = product;
}
public CartItemsDto() {
	super();
}
	

public CartItemsDto(Cart cart)
{
	this.id = cart.getId();
	this.quantity = cart.getQuantity();
	this.setProduct(cart.getProduct());
}


}
