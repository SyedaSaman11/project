package com.shopme.daos;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {
 
	public String uploadFile(MultipartFile file);
}
