package com.jobportal.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.jobportal.dto.Certifications;
import com.jobportal.dto.Experiences;
import com.jobportal.dto.ProfileDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="profiles")
public class Profile {

	@Id
	private Long id;
	private String email;
	private String jobTitle;
	private String company;
	private String location;
	private String about;
	private List<String> skills;
	private List<Experiences> experiences;
	private List<Certifications> certifications;
	
	public ProfileDTO toDTO()
	{
		return new ProfileDTO(this.id, this.email, this.jobTitle, this.company, this.location, this.about, this.skills, this.experiences, this.certifications);
	}
	
}
