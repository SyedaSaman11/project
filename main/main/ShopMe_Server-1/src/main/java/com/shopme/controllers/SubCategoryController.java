package com.shopme.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopme.dtos.Response;
import com.shopme.entities.SubCategory;
import com.shopme.exceptions.CustomException;
import com.shopme.services.ProductServiceImpl;
import com.shopme.services.SubCategoryServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/subCategory")
public class SubCategoryController {
	
	@Autowired
	private SubCategoryServiceImpl subCategoryServiceImpl;

	
	// add sub category
		@PostMapping("/add")
		public ResponseEntity<?> addSubCategory(@RequestBody SubCategory newSubCategory) throws CustomException{
			SubCategory subcategory = subCategoryServiceImpl.addSubCategory(newSubCategory);
			if (subcategory == null)
				return Response.error("failed to add subcategory");
			return Response.success(subcategory);
		}

		// show subcategory details by name
		@GetMapping("/show/{subCategoryName}")
		public ResponseEntity<?> findSubCategoryByName(@PathVariable("subCategoryName") String subCategoryName)throws CustomException {
			List<SubCategory> subCategory = subCategoryServiceImpl.findBySubCategoryName(subCategoryName);
			if (subCategory == null)
				return Response.error("SubCategory not found");
			return Response.success(subCategory);

		}	
		
}
