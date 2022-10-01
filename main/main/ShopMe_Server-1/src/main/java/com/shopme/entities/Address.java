package com.shopme.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "address")
public class Address {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int addressId;
	private String houseNo;
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String state;
	private int pincode;
	//private int userId;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	@JsonIgnoreProperties("addressList")
	private User user;

	public int getAddressId() {
		return addressId;
	}

	public String getHouseNo() {
		return houseNo;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public String getCity() {
		return city;
	}

	public String getState() {
		return state;
	}

	public int getPincode() {
		return pincode;
	}

	/*
	 * public int getUserId() { return userId; }
	 */
	/*
	 * public void setAddressId(int addressId) { this.addressId = addressId; }
	 */
	public void setHouseNo(String houseNo) {
		this.houseNo = houseNo;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public void setState(String state) {
		this.state = state;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	/*
	 * public void setUserId(int userId) { this.userId = userId; }
	 */

	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", houseNo=" + houseNo + ", addressLine1=" + addressLine1
				+ ", addressLine2=" + addressLine2 + ", city=" + city + ", state=" + state + ", pincode=" + pincode
				+ "]";
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public Address(int addressId, String houseNo, String addressLine1, String addressLine2, String city, String state,
			int pincode) {
		super();
		this.addressId = addressId;
		this.houseNo = houseNo;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		
	}

	public Address() {
		super();
	}

}
