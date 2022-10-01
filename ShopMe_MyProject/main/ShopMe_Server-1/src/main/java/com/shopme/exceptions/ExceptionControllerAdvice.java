package com.shopme.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.shopme.dtos.Response;

@ControllerAdvice//allow to handle exception across all application
public class ExceptionControllerAdvice {
	
	//for handle specific exception this exception will be invoked
	@ExceptionHandler(value = ProductNotExistsException.class )
	public final ResponseEntity<?> ProductNotExistsException(ProductNotExistsException exception)
	{
		return Response.error(exception.getMessage());
		
	}
  
	@ExceptionHandler(value = CustomException.class )
	public final ResponseEntity<?> CustomException(CustomException exception)
	{
		return Response.error(exception.getMessage());
		
	}
}
