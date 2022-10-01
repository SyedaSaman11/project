package com.shopme.daos;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.shopme.entities.User;
@Transactional
public interface UserDao extends JpaRepository<User, Integer> 
{
  User findByEmail(String email);
  
  User findByUserId(int id);

  @Modifying
  @Query("UPDATE User u SET u.password=?1  WHERE u.userId=?2")
  public void updateUserPassword(String password,int id);
 
  @Query(value = "select * from User",nativeQuery = true)
	public void findAllUsers();
  
  @Modifying
  @Query(value =" update user set profileImg = ?1 where userId =?2",nativeQuery=true)
  public void updateProfileImgById(String url ,int id);
  
  
  
  
  
  
  
	  
	  //select u.email,u.lastname,a.city from user u inner join address a on u.userId = a.userId where u.userId = ?1
  
}
