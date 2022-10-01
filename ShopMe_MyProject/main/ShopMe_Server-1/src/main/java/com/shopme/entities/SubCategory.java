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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="SubCategory")
public class SubCategory {
	
	@Id
	@Column(name = "subCategoryName", nullable = false)
	private String subCategoryName;
	private String subCategoryDescription;
	
	@ManyToOne
	@JoinColumn(name = "categoryName")
	@JsonIgnoreProperties("subCategory")
	private Category category;
	
	@OneToMany(mappedBy = "subCategory")
	@JsonIgnoreProperties("subCategory")
	private List<Product> listOfProduct; 	
	
	public SubCategory() {
		super();
	}
	
	public SubCategory(int subCategoryId, String subCategoryName, String subCategoryDescription) {
		super();
		this.subCategoryName = subCategoryName;
		this.subCategoryDescription = subCategoryDescription;
	}

	public String getSubCategoryName() {
		return subCategoryName;
	}

	public void setSubCategoryName(String subCategoryName) {
		this.subCategoryName = subCategoryName;
	}

	public String getSubCategoryDescription() {
		return subCategoryDescription;
	}

	public void setSubCategoryDescription(String subCategoryDescription) {
		this.subCategoryDescription = subCategoryDescription;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Product> getListOfProduct() {
		return listOfProduct;
	}

	public void setListOfProduct(List<Product> listOfProduct) {
		this.listOfProduct = listOfProduct;
	}

	@Override
	public String toString() {
		return "SubCategory [ subCategoryName=" + subCategoryName
				+ ", subCategoryDescription=" + subCategoryDescription + "]";
	}

}