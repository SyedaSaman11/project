package com.shopme.daos;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.shopme.entities.Product;
import com.shopme.entities.User;

public interface ProductDao extends JpaRepository<Product, Integer> {
	
	List<Product> findByProductFinalPrice(Double productPrice);
	List<Product>  findByProductDiscount(Double discountPrice);
	Product  findByProductId(int productId);
	//List<Product> findProductByCategory(String companyName);
	List<Product> findByproductName(String name);
	
	@Query(value= "select * from product where categoryname = ?1",nativeQuery = true)
	List<Product> findByCname(String cname);
	
	@Query(value= "select * from product where subcategoryname = ?1",nativeQuery = true)
	List<Product> findBySname(String sname);
	
	
	@Modifying
	@Query(value = "UPDATE product p SET p.productQuantity = p.productQuantity - :qty WHERE p.productId = :id ", nativeQuery = true)
	void removeQtyAftrPay(@Param(value = "id") int productId, @Param(value = "qty") int qty);
	
	@Modifying	
	@Transactional
	@Query(value =" update product set productImage = ?1 where productId =?2",nativeQuery=true)
	void updateProductImgById(String url ,int id);
}
