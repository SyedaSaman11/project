package com.shopme.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name ="Vendor")
public class Vendor {
	
	@Id
	@Column(nullable = false)
	private String companyName;
	private String companyAddress;
	
	
	
	@OneToOne
	@JoinColumn(name = "userId")
	@JsonIgnoreProperties("vendor")
    private User user;
	
	
	@OneToMany(mappedBy="vendor" ,cascade = CascadeType.ALL)
	  @JsonIgnoreProperties("vendor") 
	  private List<Product> product;
	 
	
	
	
	public String getCompanyAddress() {
		return companyAddress;
	}
	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	
	
	
	
	  public List<Product> getProduct() 
	  { 
		  return product; 
	  } 
	  public void setProduct(List<Product> productId) 
	  { 
		  this.product = productId; 
	  }
	 
	public Vendor(String companyAddress, String companyName) {
		super();
		this.companyAddress = companyAddress;
		this.companyName = companyName;
		
		
	}
	
	public Vendor() {
		
	}
	@Override
	public String toString() {
		return "Vendor [companyAddress=" + companyAddress + ", companyName=" + companyName
				+ "]";
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	

}
