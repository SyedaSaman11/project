package com.shopme.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
//to indicate there are one or more bean methods  for process by spring container
public class SecurityConfig {

	@Bean//it produces bean to get managed by spring container
	public PasswordEncoder passwordEncoder() {
		// PasswordEncoder service interface to encode passwords by BCryptPasswordEncoder
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}
	
}