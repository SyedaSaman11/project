package com.shopme.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
//to indicate this class is an entity and mapped to database table with name cart
@Entity
@Table(name = "cart")
public class Cart {
	@Id//to tell its primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)//auto generation strategies like identity,sequence ,automatic
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "productId")
	private Product product;
	
	private int quantity =1;


	private Date createdDate;

	public Cart() {
		super();
	}

	

	public Cart(int id, int quantity, Date createdDate) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.createdDate = createdDate;
	}



	@Override//run time polymorphism
	public String toString() {
		return "Cart [id=" + id + ", quantity=" + quantity + ", createdDate=" + createdDate + "]";
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
}
