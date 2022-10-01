package com.shopme.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.shopme.daos.ProductDao;
import com.shopme.daos.UserDao;
import com.shopme.dtos.ProductDto;
import com.shopme.dtos.UserDto;
import com.shopme.entities.Product;
import com.shopme.entities.User;
import com.shopme.exceptions.ResourceNotFoundException;

@Service
@Transactional
public class ImageHandlingServiceImpl implements ImageHandlingService {
	@Value("${file.upload.location}")
	private String baseFolder;
	// dep : prod dao i/f
	@Autowired
	private ProductDao prodRepo;
	// dep : Model mapper
	@Autowired
	private UserDao userRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public ProductDto storeImage(int prodId, MultipartFile imageFile) throws IOException {
		// get product dtls from prodId
		Product prod = prodRepo.findById(prodId).orElseThrow(() -> new ResourceNotFoundException("Invalid Emp Id"));
		// product => persistent
		// get complete path to the file , to be stored
		String completePath = baseFolder + File.separator + imageFile.getOriginalFilename();
		System.out.println("complete path " + completePath);
		System.out.println("Copied no of bytes "
				+ Files.copy(imageFile.getInputStream(), Paths.get(completePath), StandardCopyOption.REPLACE_EXISTING));
		// save complete path to the image in db

		// In case of saving file in db : simply call : imageFile.getBytes() --> byte[]
		// --call setter on emp !
		prod.setProductImage(completePath);// save complete path to the file in db
		return mapper.map(prod, ProductDto.class);
	}

	@Override
	public byte[] restoreImage(int prodId) throws IOException {
		// get emp dtls from emp id
		Product prod = prodRepo.findById(prodId).orElseThrow(() -> new ResourceNotFoundException("Invalid Emp Id"));
		// emp => persistent
		// get complete img path from db --> extract image contents n send it to the
		// caller
		String path = prod.getProductImage();
		System.out.println("img path " + path);
		// API of java.nio.file.Files class : public byte[] readAllBytes(Path path)
		return Files.readAllBytes(Paths.get(path));
		// in case of BLOB in DB --simply call emp.getImage() --> byte[] --> ret it to
		// the caller!
	}

	@Override
	public UserDto storeUserImage(int userId, MultipartFile imageFile) throws IOException {

		User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid Emp Id"));
		String completePath = baseFolder + File.separator + imageFile.getOriginalFilename();
		System.out.println("complete path " + completePath);
		System.out.println("Copied no of bytes "
				+ Files.copy(imageFile.getInputStream(), Paths.get(completePath), StandardCopyOption.REPLACE_EXISTING));
		user.setProfileImg(completePath);// save complete path to the file in db
		return mapper.map(user, UserDto.class);
	}

	@Override
	public byte[] restoreUserImage(int userId) throws IOException {

		User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid Emp Id"));
		String path = user.getProfileImg();
		System.out.println("img path " + path);
		// API of java.nio.file.Files class : public byte[] readAllBytes(Path path)
		return Files.readAllBytes(Paths.get(path));
	}

}
