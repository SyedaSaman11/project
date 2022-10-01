package com.shopme.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.shopme.entities.Product;
import com.shopme.entities.Vendor;

public interface VendorDao extends JpaRepository<Vendor, Integer> {

	@Query(value = "select * from vendor where userId= ?1", nativeQuery = true)
	Vendor findDetailsByvendorId(int id);


	@Modifying
	@Query(value = "delete from vendor where userId= ?1",nativeQuery = true)
	void deleteoldaddress(int userid);

	// Vendor save(Product product);

}
