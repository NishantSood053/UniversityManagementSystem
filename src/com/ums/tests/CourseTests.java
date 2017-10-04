package com.ums.tests;

import static org.junit.Assert.*;

import org.junit.Test;

import com.ums.courses.Course;
import com.ums.university.University;

public class CourseTests {
	
	
	@Test
	public void testTitle() {
		Course course = new Course("Software Engineering",115001,20,20,30,30,true);
		assertEquals("Check Valid Course Title", "Software Engineering", course.Title());
	}

	@Test
	public void testGetStudents() {
		fail("Not yet implemented");
	}

	@Test
	public void testWeightOfAssignment() {
		fail("Not yet implemented");
	}

	@Test
	public void testWeightOfMidterm() {
		fail("Not yet implemented");
	}

	@Test
	public void testWeightOfFinal() {
		fail("Not yet implemented");
	}

	@Test
	public void testMarkForStudent() {
		fail("Not yet implemented");
	}

	@Test
	public void testHasProject() {
		fail("Not yet implemented");
	}

	@Test
	public void testIsFull() {
		fail("Not yet implemented");
	}

	@Test
	public void testAddStudent() {
		fail("Not yet implemented");
	}

	@Test
	public void testRemoveStudent() {
		fail("Not yet implemented");
	}

	@Test
	public void testCode() {
		University university = new University();
		Course course1 = university.CreateCourse("asdasd",112345,1,1,1,1,false);
		assertEquals("TestCode", 112345, course1.Code());

	
	}

	@Test
	public void testPreRequisities() {
		fail("Not yet implemented");
	}

}
