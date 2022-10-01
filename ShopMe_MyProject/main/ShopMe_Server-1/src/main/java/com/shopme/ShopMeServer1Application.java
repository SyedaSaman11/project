package com.shopme;

import java.io.File;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

//its a combo of  @Configuration, @EnableAutoConfiguration and @ComponentScan 
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ShopMeServer1Application implements CommandLineRunner {
	// @Value => annotation to inject value of SpEL expression into a field
		@Value("${file.upload.location}")
		private String folderName;

	public static void main(String[] args) {
		SpringApplication.run(ShopMeServer1Application.class, args);

	}

// @Value => annotation to 
	// configure ModelMapper as a spring bean
	@Bean // equivalent to <bean> tag in xml file
	public ModelMapper mapper() {
		System.out.println("in mapper");
		return new ModelMapper();
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("in run " + folderName);
		// create images folder if it doesn't exist
		File dir = new File(folderName);
		if (!dir.exists()) {
			System.out.println("Created folder/s " + dir.mkdirs());
		} else
			System.out.println("folder alrdy exists");
	}

}
