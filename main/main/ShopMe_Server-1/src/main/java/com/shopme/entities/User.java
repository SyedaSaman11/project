package com.shopme.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
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
@Table(name ="User")
public class User
{
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int userId;
	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private String password;
	private long mobile;
	private String profileImg;
	private String role;
	private double walletBalance;
	
	@OneToMany(mappedBy = "user",fetch = FetchType.EAGER,orphanRemoval = true,cascade = CascadeType.PERSIST)
	@JsonIgnoreProperties("user")
	private List<Address> addressList = new ArrayList<Address>();
	
	@OneToOne(mappedBy = "user",orphanRemoval = true)
	@JsonIgnoreProperties("user")
	private Vendor vendor;
	

	

	

	
	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}


	@OneToMany(mappedBy="user" ,cascade = CascadeType.ALL)
	  @JsonIgnoreProperties("user") 
	  private List<Product> product;
	
	public User()
	{
		
	}

	public User(int userId, String firstName, String lastName, String gender, String email, String password, long mobile,
			String profileImg, String role, double walletBalance ) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.profileImg = profileImg;
		this.role = role;
		this.walletBalance = walletBalance;
	}




	public User(String password) {
		
		this.password = password;
	}


	public double getWalletBalance() {
		return walletBalance;
	}


	public void setWalletBalance(double walletBalance) {
		this.walletBalance = walletBalance;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public long getMobile() {
		return mobile;
	}


	public void setMobile(long l) {
		this.mobile = l;
	}


	public String getProfileImg() {
		return profileImg;
	}


	public void setProfileImg(String profileImg) {
		this.profileImg = profileImg;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}

	public List<Address> getAddressList() {
		return addressList;
	}


	public void setAddressList(List<Address> addressList) {
		this.addressList = addressList;
	}
	
	public Vendor getVendor() {
		return vendor;
	}
	
	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}


	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", gender=" + gender
				+ ", email=" + email + ", password=" + password + ", mobile=" + mobile + ", profileImg=" + profileImg
				+ ", role=" + role + ", walletBalance=" + walletBalance + "]";
	}

	
	
}
