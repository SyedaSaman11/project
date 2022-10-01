package com.shopme.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopme.dtos.Response;
import com.shopme.entities.User;
import com.shopme.entities.Vendor;
import com.shopme.exceptions.CustomException;
import com.shopme.services.UserServiceImpl;
import com.shopme.services.VendorServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/vendor/")
public class VendorController {

		@Autowired
		private VendorServiceImpl vendorService;
		
		@Autowired
		private UserServiceImpl userService;
			
		@PostMapping("/add")
		public @ResponseBody ResponseEntity<?> addVendorshopdetails(@RequestBody Vendor vendor)
		{
			Vendor result = vendorService.addVendorshop(vendor);
			if(result == null)
			{
		   return Response.error("only Vendor can add his shop details else userId not found");
			}else {
				return Response.success(result);
		}
		
		}
		
		@GetMapping("/vendor/{id}")
		public @ResponseBody ResponseEntity<?> findProfileById(@PathVariable("id") int id) throws CustomException{
			Vendor profile = vendorService.findvendordetails(id);
			if (profile == null) {
				return Response.error("User does not exist with this id");
			}
			return Response.success(profile);
		}
		
}
