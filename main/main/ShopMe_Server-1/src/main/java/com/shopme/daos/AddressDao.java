package com.shopme.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.shopme.entities.Address;
//jpa repository i/f which provides crud operations, reduce boiler plate code, 
public interface AddressDao  extends JpaRepository<Address, Integer>  {

 Address findByAddressId(int id);
 //insert/update/delete
 @Modifying
 @Query(value = "delete from address where addressId = ?1",nativeQuery = true)
 void deleteByAddress(int id );
 
 @Query(value = "SELECT * FROM address WHERE userId = ?1", nativeQuery = true)
 List<Address> findByUserId(int userId);
 
 
}
