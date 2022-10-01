package com.shopme.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopme.entities.SubCategory;

public interface SubCategoryDao extends JpaRepository<SubCategory, Integer> {

	List<SubCategory> findBySubCategoryName(String subCategoryName);

}
