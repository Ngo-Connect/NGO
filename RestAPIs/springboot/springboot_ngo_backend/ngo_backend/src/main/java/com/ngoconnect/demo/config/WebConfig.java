package com.ngoconnect.demo.config;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		
//		registry.addResourceHandler("../../ngo-connect-springboot/uploads/**").addResourceLocations("/uploads/");
		// at resource location add the full path of the actual upload folder and inhandler add the url type
		// changeed this url as was facing eerror due to ../ as security error from springboot 
		//registry.addResourceHandler("/uploads/**").addResourceLocations("../../ngo-connect-springboot/uploads/");
		Path uploadFolder = Paths.get("../../ngo-connect-springboot/uploads/");
		Path uploadFolderNew = Paths.get("../ngo-connect-springboot/uploads/").toAbsolutePath().normalize();
		String uploadPath = uploadFolderNew.toAbsolutePath().toUri().toString();
		if (!uploadPath.endsWith("/")) {
		    uploadPath += "/";
		}
		System.out.println("New Mapping to: " + uploadPath);
		registry.addResourceHandler("/ngo/uploads/**").addResourceLocations(uploadPath)
				.addResourceLocations(uploadPath)
				.setCachePeriod(0);
	}
	
}
