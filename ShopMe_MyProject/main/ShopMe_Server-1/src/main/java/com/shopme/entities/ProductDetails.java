package com.shopme.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="ProductDetails")
public class ProductDetails {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int detailsId;
	private String productProperties;
	private String propertiesValue;
	
	//@OneToOne
	//private int productId;
	
	public ProductDetails() {
		super();
	}

	public ProductDetails(int detailsId, int productId, String productProperties, String propertiesValue) {
		super();
		this.detailsId = detailsId;
	//	this.productId = productId;
		this.productProperties = productProperties;
		this.propertiesValue = propertiesValue;
	}

	public int getDetailsId() {
		return detailsId;
	}

	public void setDetailsId(int detailsId) {
		this.detailsId = detailsId;
	}

	

	public String getProductProperties() {
		return productProperties;
	}

	public void setProductProperties(String productProperties) {
		this.productProperties = productProperties;
	}

	public String getPropertiesValue() {
		return propertiesValue;
	}

	public void setPropertiesValue(String propertiesValue) {
		this.propertiesValue = propertiesValue;
	}

	@Override
	public String toString() {
		return "ProductDetails [detailsId=" + detailsId + ", productProperties="
				+ productProperties + ", propertiesValue=" + propertiesValue + "]";
	}
	
}
