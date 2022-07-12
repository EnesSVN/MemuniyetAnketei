package com.example.memnuniyetanketi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class MemnuniyetAnketiApplication {

    public static void main(String[] args) {
        SpringApplication.run(MemnuniyetAnketiApplication.class, args);
    }

}
