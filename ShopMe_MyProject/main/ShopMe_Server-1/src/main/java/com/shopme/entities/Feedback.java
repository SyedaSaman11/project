package com.shopme.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int feedbackId;
	private String feedbackDescription;
	private int rating;
	
	@ManyToOne
	@JoinColumn(name = "productId")
	@JsonBackReference
	private Product product;

	@OneToOne
	@JoinColumn(name = "userId")
	@JsonIgnoreProperties("feedback")
	private User user;

	public Feedback() {
		super();
	}

	public Feedback(int feedbackId, String feedbackDescription, int rating) {
		super();
		this.feedbackId = feedbackId;
		this.feedbackDescription = feedbackDescription;
		this.rating = rating;
	}

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public String getFeedbackDescription() {
		return feedbackDescription;
	}

	public void setFeedbackDescription(String feedbackDescription) {
		this.feedbackDescription = feedbackDescription;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

//	public Product getProduct() {
//		return product;
//	}
//
//	public void setProduct(Product product) {
//		this.product = product;
//	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Feedback [feedbackId=" + feedbackId + ", feebackDescription=" + feedbackDescription + ", rating="
				+ rating + "]";
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

}