package com.shopme.daos;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.MailException;

public interface IEmailSenderService {
	
	//method for sending mail
//	void sendSimpleEmail(String toEmail, String body, String subject) throws MailException, InterruptedException;
	 void sendSimpleEmail(String toEmail,
			String body,
			String subject
			) throws MessagingException;

//MimeMessage mimeMessage;
}
