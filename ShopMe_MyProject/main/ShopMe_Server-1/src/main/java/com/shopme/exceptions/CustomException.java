package com.shopme.exceptions;
//its a class which indicate illegal argument is passed
public class CustomException extends IllegalArgumentException {
	
	public CustomException(String msg)
	{
		super(msg);
	}

}
