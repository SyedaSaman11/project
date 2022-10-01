package com.shopme.dtos;

public class Credentials {

	private String email;
	private int otp;
	private String password;

	public Credentials() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getOtp() {
		return otp;
	}

	public void setOtp(int otp) {
		this.otp = otp;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Credentials(String email, int otp, String password) {
		super();
		this.email = email;
		this.otp = otp;
		this.password = password;
	}

	@Override
	public String toString() {
		return "Credentials [email=" + email + ", otp=" + otp + ", password=" + password + "]";
	}

	
	
	
	
}
