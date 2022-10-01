package com.shopme.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopme.daos.ProductDao;
import com.shopme.daos.UserDao;
import com.shopme.daos.VendorDao;
import com.shopme.entities.Product;
import com.shopme.entities.User;
import com.shopme.entities.Vendor;
import com.shopme.exceptions.CustomException;

@Transactional
@Service
public class VendorServiceImpl {

	@Autowired
	private VendorDao vendorDao;



	@Autowired
	private UserDao userDao;

	public Vendor addVendorshop(Vendor vendor) {
		try {
			int userid = vendor.getUser().getUserId();
			User user = userDao.findByUserId(userid);
			if (user == null) {
				throw new CustomException("User not found !");
			} else {
				if (user.getRole().contentEquals("Vendor")) {
					vendorDao.deleteoldaddress(userid);
					Vendor savedVendordetails = vendorDao.save(vendor);
					return savedVendordetails;
				} else {
					throw new CustomException("You're not vendor , only vendor can add !");
				}
			}
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}

	}

	public Vendor findvendordetails(int id) {
		Vendor vendor = vendorDao.findDetailsByvendorId(id);
		return vendor;
	}
	}
