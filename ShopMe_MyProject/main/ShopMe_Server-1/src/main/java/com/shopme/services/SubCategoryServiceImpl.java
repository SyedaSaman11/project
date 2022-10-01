package com.shopme.services;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shopme.daos.SubCategoryDao;
import com.shopme.entities.SubCategory;
import com.shopme.exceptions.CustomException;
@Transactional
@Service
public class SubCategoryServiceImpl
{   
	@Autowired
	private SubCategoryDao subCategoryDao;
	
	
public SubCategory addSubCategory(SubCategory newSubCategory) throws CustomException
{
	try {
		if(newSubCategory.getSubCategoryName().isEmpty() || newSubCategory.getSubCategoryName().length() == 0) {
			throw new CustomException("Please send proper name, It's blank!");
		}
		SubCategory subCategory = subCategoryDao.save(newSubCategory);
		return subCategory;
	}catch(IllegalArgumentException e) {
		throw new CustomException(e.getMessage());
	}
	catch (Exception e) {
		throw new CustomException(e.getMessage());
	}
}

public List<SubCategory> findBySubCategoryName(String subCategoryName) throws CustomException{
	try {
		List<SubCategory> subCategory = subCategoryDao.findBySubCategoryName(subCategoryName);
		if(subCategory.isEmpty()) {
			throw new CustomException(subCategoryName + " is empty!");
		}
		return subCategory;
	}catch(NoSuchElementException e) {
		throw new CustomException(e.getMessage());
	}
	catch (Exception e) {
		throw new CustomException(e.getMessage());
	}
}

}
