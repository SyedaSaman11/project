package com.shopme.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shopme.daos.CategoryDao;
import com.shopme.entities.Category;
import com.shopme.exceptions.CustomException;

@Transactional
@Service
public class CategoryServiceImpl {
	@Autowired
	private CategoryDao categoryDao;

	public Category addCategory(Category newCategory) throws CustomException {
		try {
			if (newCategory.getCategoryName().isEmpty() || newCategory.getCategoryName().length() == 0) {
				throw new CustomException("Please send proper name, It's blank !");
			}
			Category category = categoryDao.save(newCategory);
			return category;
		} catch (IllegalArgumentException e) {
			throw new CustomException("Given category details are null " + e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}
	}

	public Category findByCategoryName(String categoryName) throws CustomException {
		try {
			Category category = categoryDao.findByCategoryName(categoryName);
			if (category == null)
				throw new CustomException(categoryName + " not found !");
			return category;
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}
	}

	public List<Category> findAll() {
		List<Category> category = categoryDao.findAll();
		return category;
	}
}
