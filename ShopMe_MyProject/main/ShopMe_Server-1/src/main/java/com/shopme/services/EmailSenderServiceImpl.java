package com.shopme.services;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.shopme.daos.IEmailSenderService;

@Service
public class EmailSenderServiceImpl implements IEmailSenderService {

	private JavaMailSender mailSender;
	
	@Autowired
	public EmailSenderServiceImpl(JavaMailSender mailSender) {
		this.mailSender = mailSender;
		}
	
	@Async
	@Override
	public void sendSimpleEmail(String toEmail, String body, String subject)
			throws MessagingException {
		
//		System.out.println("Sleeping now.. ");
//		Thread.sleep(10000);
		MimeMessage mimeMessage;
		
		mimeMessage = mailSender.createMimeMessage();

	
	MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(mimeMessage,true);
	
	mimeMessageHelper.setFrom("shopme@gmail.com");
	mimeMessageHelper.setTo(toEmail);
	mimeMessageHelper.setSubject(subject);
	mimeMessageHelper.setText(body);
	
	
//	FileSystemResource fileSystemResource= new FileSystemResource(new File(attachment));
//	mimeMessageHelper.addAttachment(fileSystemResource.getFilename(),fileSystemResource);
	mailSender.send(mimeMessage);
//	mailSender.send(message);
	System.out.println("Mail with Attachment Sent...");
	}

}
