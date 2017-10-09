package com.ums.tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.ums.courses.Course;
import com.ums.university.University;
import com.ums.utilities.RandomWeights;

public class UniversityTests {

	@Test
	public void testCourses() {
		fail("Not yet implemented");
	}

	@Test
	public void testStudents() {
		fail("Not yet implemented");
	}

	@Test
	public void testCreateCourse() {
	
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		University university = new University();
		university.CreateCourse("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		assertEquals("Course Created!", 1, university.Courses().size());

	}
	
	@Test
	public void testCreateStudent() {
		List<Course> currentCourses = new ArrayList<Course>();
		List<Course> completedCourse = new ArrayList<Course>();
		University university = new University();
		university.CreateStudent(12345, "Nishant",  completedCourse, currentCourses,
				 			true,  true);
		
		assertEquals("Student Created!", 1, university.Students().size());
	}

	@Test
	public void testRegisterStudentforCourse() {
		fail("Not yet implemented");
	}

	@Test
	public void testCancelCourse() {
		fail("Not yet implemented");
	}

	@Test
	public void testDestroyCourse() {
		fail("Not yet implemented");
	}

}
