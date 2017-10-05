package com.ums.tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.ums.courses.Course;


public class CourseTests {
	
	
	@Test
	public void testTitle() {
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 3;
		weightOfAssignments.add(10);
		weightOfAssignments.add(10);
		weightOfAssignments.add(10);
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,20,30,20,true);
		assertEquals("Check Valid Course Title", "Software Engineering", course.Title());
	}

	@Test
	public void testGetStudents() {
		fail("Not yet implemented");
	}

	@Test
	public void testWeightOfAssignment() {
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 3;
		weightOfAssignments.add(10);//Assignment 1 weight
		weightOfAssignments.add(10);//Assignment 2 weight
		weightOfAssignments.add(10);//Assignment 3 weight
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,20,30,20,true);
		assertEquals("Check Assignment Weight", 10, course.WeightOfAssignment(1));
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
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 3;
		weightOfAssignments.add(10);
		weightOfAssignments.add(10);
		weightOfAssignments.add(10);
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,20,30,20,true);
		assertEquals("TestCode", 115001, course.Code());
		
	}

	@Test
	public void testPreRequisities() {
		fail("Not yet implemented");
	}

}
