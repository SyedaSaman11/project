package com.shopme.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.shopme.entities.Cart;
import com.shopme.entities.Order;
import com.shopme.entities.User;

public interface OrderDao extends JpaRepository<Order, Integer>{

	
	List<Order>findAllByUserOrderByCreatedDateDesc(User user);
	
	@Query(value = "select * from orders where userId = ?1",nativeQuery = true)
	List<Order> findOrdersByuserId(int userId);

	@Query(value = "SELECT productId FROM orders WHERE userId = ?1", nativeQuery = true)
	List<Integer> findAllProductIdByUser(int userId);
    
	@Modifying
	@Query(value ="Insert into orders select * from cart where userId = ?1", nativeQuery = true)
	 int addToOrder(int id);


	@Query(value ="select * from orders where userId = ?1", nativeQuery = true)
	List<Order> findByUserId(int userid);
	
//	@Query(value = "SELECT p.productDescription, p.productFinalPrice, p.productImage, p.productName, o.quantity FROM orders o INNER JOIN product AS p ON p.productId = o.productId WHERE o.userId = ?1", nativeQuery = true)
//	List<Order> findListOfOrdersIncludingProductDetails(int userId);
}