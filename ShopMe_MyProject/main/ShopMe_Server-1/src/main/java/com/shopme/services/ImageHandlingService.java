package com.shopme.services;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.shopme.dtos.ProductDto;
import com.shopme.dtos.UserDto;

public interface ImageHandlingService {

	ProductDto storeImage(int prodId, MultipartFile imageFile) throws IOException;

	byte[] restoreImage(int prodId) throws IOException;
	
	UserDto storeUserImage(int userId, MultipartFile imageFile) throws IOException;

	byte[] restoreUserImage(int userId) throws IOException;

}
