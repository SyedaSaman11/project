package com.shopme.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="Category")
public class Category {
	
//	@Id
//	@GeneratedValue(generator = "assigned")
//	@Column(name = "ROLE_NAME", nullable = false)
//	private String roleName;
//	
	
	@Id
	@Column(name = "categoryName", nullable = false)
	private String categoryName;
	private String categoryDescription;
	
	@OneToMany(mappedBy = "category")
	@JsonIgnoreProperties("category")
	private List<SubCategory> subCategory;
	
	
	

	
	public Category() {
		super();
	}
	
	public Category(int categoryId, String categoryName, String categoryDescription) {
		super();
		this.categoryName = categoryName;
		this.categoryDescription = categoryDescription;
	}
	
//	public int getCategoryId() {
//		return categoryId;
//	}
//	public void setCategoryId(int categoryId) {
//		this.categoryId = categoryId;
//	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getCategoryDescription() {
		return categoryDescription;
	}
	public void setCategoryDescription(String categoryDescription) {
		this.categoryDescription = categoryDescription;
	}
	
	public List<SubCategory> getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(List<SubCategory> subCategory) {
		this.subCategory = subCategory;
	}

	@Override
	public String toString() {
		return "Category [ categoryName=" + categoryName + ", categoryDescription="
				+ categoryDescription + "]";
	}
	
	
	
}
