package com.ngoconnect.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class NgoBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(NgoBackendApplication.class, args);
	}

}
