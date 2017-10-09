package com.ums.tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.ums.students.Student;
import com.ums.utilities.RandomWeights;
import com.ums.courses.*;

public class StudentTests {

	

	@Test
	public void testCompletedCourses() {
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course1 = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		Course course2 = new Course("Computer Animation",115002,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		completedCourses.add(course1);
		completedCourses.add(course2);
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		assertEquals("Completed Courses", completedCourses, s.CompletedCourses());
	}

	@Test
	public void testStudentNumber() {
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		assertEquals("Student Number", 12345, s.StudentNumber());
	}

	@Test
	public void testName() {
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		assertEquals("Student Name", "Nishant", s.Name());
	}

	@Test
	public void testCurrentCourses() {
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course1 = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		Course course2 = new Course("Computer Animation",115002,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		Course course3 = new Course("Virtual Environments",115003,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		currentCourses.add(course1);
		currentCourses.add(course2);
		currentCourses.add(course3);
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		assertEquals("Current Courses", currentCourses, s.CurrentCourses());
	}

	@Test
	public void testIsFullTime() {
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		assertEquals("Student is Full Time", true, s.IsFullTime());
	}

	@Test
	public void testIsCreated() {
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		assertEquals("Student is Created", true, s.IsCreated());
	}

	@Test
	public void testSelectCourse() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		Course course1 = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		
		assertEquals("Course Selected", course1, s.SelectCourse(course1));
	}

	@Test
	public void testRegisterCourse() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course1 = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		Course course2 = new Course("Computer Animation",115002,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		Course course3 = new Course("Virtual Environments",115003,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		
		currentCourses.add(course3);
		
		completedCourses.add(course1); // Course Already Completed
		
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		assertEquals("Register Course", true, s.RegisterCourse(course2));
	}
	
	@Test
	public void testFailedToRegisterCourse() 
	{
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course1 = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		Course course2 = new Course("Computer Animation",115002,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		currentCourses.add(course2);
		
		completedCourses.add(course1); // Course Already Completed
		
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		assertEquals("Course Already Completed", false, s.RegisterCourse(course1));
	}

	@Test
	public void testDropCourse() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course1 = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		
		
		s.SelectCourse(course1); //Select the course first
		
		assertEquals("Dropped Course ", true, s.DropCourse(course1));
	}

	@Test
	public void testDeregisterCourse() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course1 = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		s.RegisterCourse(course1);
		
		assertEquals("Deregister Course ", true, s.DeregisterCourse(course1));
	}

}
