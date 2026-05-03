package com.jobportal.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Certifications {
	
	private String issuer;
	private String title;
	private String issueDate;
	private LocalDateTime certificateId;


}
