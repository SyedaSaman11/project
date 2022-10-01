package com.shopme.dtos;

import org.springframework.stereotype.Component;

import com.shopme.entities.User;

@Component
public class DtoEntityConverter 
{
	public User toUserEntity(UserDto dto) {
		User entity = new User();
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setPassword(dto.getPassword());
		entity.setGender(dto.getGender());
		entity.setMobile(dto.getMobile());
		entity.setProfileImg(dto.getProfileImg());
		return entity;		
	}
}