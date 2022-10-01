package com.shopme.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shopme.daos.AddressDao;
import com.shopme.daos.UserDao;
import com.shopme.dtos.Credentials;
import com.shopme.entities.Address;
import com.shopme.entities.Product;
import com.shopme.entities.User;
import com.shopme.exceptions.CustomException;

@Transactional
@Service
public class UserServiceImpl {

	@Autowired
	private UserDao userDao;
	@Autowired
	private AddressDao addressdao;
	@Autowired
	private PasswordEncoder passwordEncoder;

//add user to db
	public User saveUser(User newuser) throws CustomException{
		try {
		User dbuser = userDao.findByEmail(newuser.getEmail());
		if (dbuser != null) {
			throw new CustomException("User with " + dbuser.getEmail() + "is already present");
		} else {
			if(newuser.getRole().isEmpty())
			{
				throw new CustomException("You must select the user Role");
			}
			if(!newuser.getEmail().contains("@"))
			{
				throw new CustomException("Enter Valid Email");
			}
			if(newuser.getPassword().isEmpty())
			{
				throw new CustomException("Enter Valid Password");
			}
			else {
				String rawPassword = newuser.getPassword();
				String encPassword = passwordEncoder.encode(rawPassword);
				
				newuser.setPassword(encPassword);
			userDao.save(newuser);
			return newuser;
			}}
	}catch(IllegalArgumentException e){
	  	throw new CustomException(e.getMessage());
	}catch(Exception e)
		{
		  throw new CustomException(e.getMessage());
		}
	}

	// delete user
	public User deleteUser(int id) throws CustomException {
		try {
			User user = findUserById(id);
			if (user == null) {
				throw new CustomException("User not found with " + id);
			} else {
				userDao.delete(user);
				return user;
			}
		} catch (IllegalArgumentException e) {
			throw new CustomException(e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}
	}

	// find by mail
	public User findUserByEmail(String email) throws CustomException{

		try {
			if (email.isEmpty() || email.contains(null)) {
				throw new CustomException("Invalid email, Please enter valid email !");
			}
			User user = userDao.findByEmail(email);
			return user;
		} catch (NullPointerException e) {
			throw new CustomException(e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}

	}

	
	//
	public User findUserFromdbByEmail(String email) {
    User user = userDao.findByEmail(email);
    return user;
}

	
	
	
	
	// check mail and pass
	public User findUserByEmailAndPassword(Credentials cred)throws CustomException {
		try {
			User dbUser = userDao.findByEmail(cred.getEmail());
			String rawPassword = cred.getPassword();
			if (dbUser != null && cred.getEmail().equals(dbUser.getEmail())
					&& passwordEncoder.matches(rawPassword, dbUser.getPassword())) {
				User Result = dbUser;
				return Result;
			}
			throw new CustomException("Invalid email or password !, Try again.");
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}

	}

//find by id
	public User findUserById(int id) throws CustomException{
		try {
			if (id <= 0) {
				throw new CustomException("Invalid id, please enter valid user id!");
			}
			User profile = userDao.findByUserId(id);
			if(profile == null)
			{
				return null;
			}
			else
			return profile;
		} catch (NullPointerException e) {
			throw new CustomException(e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}
	}

	public User showProfileDetails(int id) {
		try {
			User profiledetails = userDao.findByUserId(id);

			if (profiledetails == null)
				throw new CustomException("Please enter valid values !");
			else
				return profiledetails;

		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}

	}

	public Address addAddress(Address address) throws CustomException{
		try {
			 int uid  = address.getUser().getUserId();
			 User user  = userDao.findByUserId(uid);
			if (address.getAddressLine1().isEmpty() || address.getAddressLine2().isEmpty()
					|| address.getCity().isEmpty() || address.getState().isEmpty() || user == null ) {
				throw new CustomException("Please give proper description , It's blank");
			}
			addressdao.save(address);
			return address;
		} catch (IllegalArgumentException e) {
			throw new CustomException( e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}

	}

	// delete address by addressid
	public Address deleteAddress(int id) {
		try {
			Address deletedAddress = addressdao.findByAddressId(id);
			if (deletedAddress == null) {
				throw new CustomException("Address not found");
			} else {
				addressdao.deleteByAddress(id);
				return deletedAddress;
			}
		} catch (NullPointerException e) {
			throw new CustomException(e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}
	}

	/*
	 * // show addressses public List<Address> findAddressByUserId(int id) { User
	 * user = userDao.findByUserId(id); if (user == null) { return null; } else {
	 * List<Address> addresses = addressdao.findByUserId(id); return addresses; }
	 * 
	 * }
	 */

	// Update user basic info
	public User updateUser(int id, User userDetails)throws CustomException {

		try {
			User updateuser = userDao.findByUserId(id);
			if (updateuser == null) {
				throw new CustomException("User not found !");
			} else {
				if(userDetails.getFirstName() != null)
				updateuser.setFirstName(userDetails.getFirstName());
				if(userDetails.getLastName() != null)
				updateuser.setLastName(userDetails.getLastName());
				if(userDetails.getMobile() !=  0)
				updateuser.setMobile(userDetails.getMobile());
				if(userDetails.getPassword() != null)
				updateuser.setPassword(userDetails.getPassword());
				if(userDetails.getGender() != null)
				updateuser.setGender(userDetails.getGender());
				if(userDetails.getProfileImg() != null)
				updateuser.setProfileImg(userDetails.getProfileImg());
				if(userDetails.getWalletBalance() != 0)
				updateuser.setWalletBalance(userDetails.getWalletBalance());
				// User updatedUser = userService.saveUser(user);
				return updateuser;
			}
		} catch (NullPointerException e) {
			throw new CustomException(e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}
	}

	// update wallet balance
	public User updateWallet(int id, User userDetailsmoney)throws CustomException {
		try {
			User updateuserMoney = userDao.findByUserId(id);
			if (updateuserMoney == null) {
				throw new CustomException("User not found!");
			} else {
				double balance = updateuserMoney.getWalletBalance();
				balance = userDetailsmoney.getWalletBalance() + balance;
				updateuserMoney.setWalletBalance(balance);

				return updateuserMoney;
			}
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}

	}

	public User deductWallet(int id, User userMoney)throws CustomException {
		try {
			User deductuserMoney = userDao.findByUserId(id);
			if (deductuserMoney == null) {
				throw new CustomException("User not found !");
			} else {
				double balance = deductuserMoney.getWalletBalance();
				balance = balance - userMoney.getWalletBalance();
				if (balance < 0)
					throw new CustomException("balance is less than 0 !");

				deductuserMoney.setWalletBalance(balance);
				return deductuserMoney;

			}
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}
	}

	public User updatePass(int id, User userpass)throws CustomException {
		try {
			User userp = userDao.findByUserId(id);
			if (userp == null) {
				throw new CustomException("User not found !");
			} else {
				String pass = userpass.getPassword();
				userp.setPassword(pass);

				return userp;
			}
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}

	
	}

	//for product added by user in db
	public List<Product> showallproductaddedbyuser(int id) throws CustomException{
		
		User user = userDao.findByUserId(id);
		if(user == null)
		{
			throw new CustomException("User is not found with user id -> " + id);
		}
		if(user.getRole().contentEquals("Vendor"))
		{   
			 List<Product>products= user.getProduct();
			return products;
		}
		else
		{
			throw new CustomException("User is not a vendor");
		}
		
		
	}
  
	
	public List<User> findAllUsers() throws CustomException {

		try {
			List<User> user = userDao.findAll();
			return user;
		} catch (NullPointerException e) {
			throw new CustomException(e.getMessage());
		} catch (Exception e) {
			throw new CustomException(e.getMessage());
		}

	}
	

	public List<Address> AddressListByUser(int userId){
		User user = userDao.findByUserId(userId);
		if(user == null) {
			throw new CustomException("User Does not exist!");
		} else {
			List<Address> list = addressdao.findByUserId(userId);
			if(list.isEmpty()) {
				throw new CustomException("Addres does not exist");
			} else {
				return list;
			}
		}
	}
	
	
	public Address findAddressByAddressId(int addressId) {
		Address address = addressdao.findByAddressId(addressId);
		if(address == null) {
			throw new CustomException("Addres does not exist");
		} else {
			return address;
		}
	}
	
	}

