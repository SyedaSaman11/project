package com.shopme.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.shopme.entities.Cart;
import com.shopme.entities.User;

public interface CartDao extends JpaRepository<Cart, Integer>{

	
	List<Cart>findAllByUserOrderByCreatedDateDesc(User user);

	@Query(value = "select * from cart where userId = ?1",nativeQuery = true)
	List<Cart>findCartByuserId(int userid);
	
	@Query(value = "select productId from cart where userId = ?1", nativeQuery = true)
	List<Integer> findProductId(int userid);
	
	 @Modifying
		@Query(value = "UPDATE cart SET quantity = quantity + 1 WHERE productId = ?1 && userId = ?2", nativeQuery = true)
		int incrementQuentity(int productId, int userId);
		
		@Modifying
		@Query(value = "UPDATE cart SET quantity = quantity - 1 WHERE productId = ?1 && userId = ?2", nativeQuery = true)
		int decrementQuentity(int productId, int userId);

		@Query(value="select quantity from cart where productId = ?1 and userId = ?2",nativeQuery = true)
		int totalQuantityOfProduct(int productId,int userId);
	
		@Query(value = "SELECT SUM(quantity) FROM cart WHERE userId = ?1", nativeQuery = true)
		int findTotalNumberOfProductsInCart(int userid);
}
