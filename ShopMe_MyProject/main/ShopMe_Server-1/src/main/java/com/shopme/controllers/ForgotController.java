package com.shopme.controllers;

import java.util.Random;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopme.dtos.Response;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/forgot")
public class ForgotController 
{

	Random random  = new Random(1000);
	
	//email id from open
	
	@PostMapping("/sendotp")
     public @ResponseBody ResponseEntity<?> sendOTP(@RequestBody String mailId)
     {
		System.out.println(mailId);
		//genrate ramndom otp
		
		int OTP= random.nextInt(999999);
	
		//Write code to send otp on email
		return Response.success(OTP);
		
     }
}
