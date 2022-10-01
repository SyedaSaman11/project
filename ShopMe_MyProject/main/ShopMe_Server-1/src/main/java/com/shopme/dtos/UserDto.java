package com.shopme.dtos;

import org.springframework.data.annotation.ReadOnlyProperty;

public class UserDto {
	@ReadOnlyProperty
	private int userId;
	private String firstName;
	private String lastName;
	private String gender;
	private String password;
	private int mobile;

	private String profileImg;

	public UserDto() {
		super();
	}

	public UserDto(String firstName, String lastName, String gender, String password, int mobile, String profileImg) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.password = password;
		this.mobile = mobile;
		this.profileImg = profileImg;
	}

	@Override
	public String toString() {
		return "UserDto [firstName=" + firstName + ", lastName=" + lastName + ", gender=" + gender + ", password="
				+ password + ", mobile=" + mobile + ", profileImg=" + profileImg + "]";
	}

	public int getUserId() {
		return userId;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getMobile() {
		return mobile;
	}

	public void setMobile(int mobile) {
		this.mobile = mobile;
	}

	public String getProfileImg() {
		return profileImg;
	}

	public void setProfileImg(String profileImg) {
		this.profileImg = profileImg;
	}

}
