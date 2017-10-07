package com.ums.tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.ums.courses.Course;
import com.ums.students.Student;


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
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 1;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,30,30,30,true);
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		List<Student> students = new ArrayList<Student>();
		students.add(s);
		course.AddStudent(s);
		assertEquals("Student List Returned", students , course.GetStudents());
	}

	@Test
	public void testWeightOfAssignment() {
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 3;
		weightOfAssignments.add(10);//Assignment 1 weight
		weightOfAssignments.add(10);//Assignment 2 weight
		weightOfAssignments.add(10);//Assignment 3 weight
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,20,30,20,true);
		assertEquals("Check Assignment Weight", 10, course.WeightOfAssignment(1)); // Check weight of assignment 1
	}

	@Test
	public void testWeightOfMidterm() {
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 1;
		weightOfAssignments.add(10);//Assignment 1 weight
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,30,30,30,true);
		assertEquals("Check Midterm Weight", 30, course.WeightOfMidterm());
	}

	@Test
	public void testWeightOfFinal() {
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 1;
		weightOfAssignments.add(10);//Assignment 1 weight
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,30,30,30,true);
		assertEquals("Check Final's Weight", 30, course.WeightOfFinal());
	}

	
	@Test
	public void testHasProject() {
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 1;
		weightOfAssignments.add(10);//Assignment 1 weight
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,30,30,30,true);
		assertEquals("Check If the course has Project", true, course.HasProject());
	}

	

	@Test
	public void testAddStudent() {
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 1;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,30,30,30,true);
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		course.AddStudent(s);
		assertEquals("Student Created", 1, course.GetStudents().size());

	}

	@Test
	public void testRemoveStudent() {
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		int numberOfAssignments = 1;
		Course course = new Course("Software Engineering",115001,numberOfAssignments,weightOfAssignments,30,30,30,true);
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		course.AddStudent(s);
		assertEquals("Student Removed", true, course.RemoveStudent(s));
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
	public void testMarkForStudent() {
		fail("Not yet implemented");
	}

	@Test
	public void testIsFull() {
		fail("Not yet implemented");
	}

	@Test
	public void testPreRequisities() {
		fail("Not yet implemented");
	}

}
