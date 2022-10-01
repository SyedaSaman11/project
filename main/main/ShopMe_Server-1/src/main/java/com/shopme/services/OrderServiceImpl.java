package com.shopme.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shopme.daos.CartDao;
import com.shopme.daos.OrderDao;
import com.shopme.daos.UserDao;
import com.shopme.dtos.AddToCartDto;
import com.shopme.dtos.CartDto;
import com.shopme.dtos.CartItemsDto;
import com.shopme.dtos.OrderDto;
import com.shopme.dtos.OrderItemsDto;
import com.shopme.entities.Cart;
import com.shopme.entities.Order;
import com.shopme.entities.Product;
import com.shopme.entities.User;
import com.shopme.exceptions.CustomException;

@Transactional
@Service
public class OrderServiceImpl {

	@Autowired
	private ProductServiceImpl productServiceImpl;
	
	@Autowired
	private CartDao cartDao; 
	
	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private UserDao userDao;
	
	//on clicking Confirm order
	public int addtoorder(int id) {
		
		int i = orderDao.addToOrder(id);
		if(i == 0)
		{
			return i;
		}
		return i;	
	}



	public List<Order> listOrderItems(User user) {
		int userid  = user.getUserId();
	
		List<Order> orders = orderDao.findByUserId(userid);
		if(orders.isEmpty())
		{
			return null;
		}
		return orders;
		
	}
	
	public List<Integer> AllProductIdByUser(int userId){
		List<Integer> list = orderDao.findAllProductIdByUser(userId);
		if(list.isEmpty()) {
			throw new CustomException("No order Placed yet...");
		} else {
			return list;
		}
	}
	
	public List<OrderItemsDto> AllOrdersByUserId(int userId){
		List<Order> orderList = orderDao.findOrdersByuserId(userId);
		List<OrderItemsDto> mainList = new ArrayList<OrderItemsDto>();
		
		if(orderList.isEmpty()) {
			throw new CustomException("No order placed yet");
		} else {				
			
			for (Order order : orderList) {				
				OrderItemsDto orderItemsDto = new OrderItemsDto(order);
				orderItemsDto.setCreatedDate(order.getCreatedDate());
				orderItemsDto.setQuantity(order.getQuantity());
				orderItemsDto.setProduct(order.getProduct());
				mainList.add(orderItemsDto);
			}			
			return mainList;
		}	
	}
	

}