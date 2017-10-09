package com.ums.tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.ums.courses.Course;
import com.ums.students.Student;
import com.ums.utilities.RandomWeights;


public class CourseTests {
	
	
	@Test
	public void testTitle() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		assertEquals("Check Valid Course Title", "Software Engineering", course.Title());
	}

	@Test
	public void testGetStudents() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		List<Student> students = new ArrayList<Student>();
		students.add(s);
		course.AddStudent(s);
		assertEquals("Student List Returned", students , course.GetStudents());
	}

	@Test
	public void testWeightOfAssignment() {
		
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		int expectedValue = n.WeightOfAssignments().get(1);
		assertEquals("Check Assignment Weight", expectedValue, course.WeightOfAssignment(1)); // Check weight of assignment 1
	}

	@Test
	public void testWeightOfMidterm() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		int expectedValue = n.WeightOfMidterms().get(0);
		assertEquals("Check Midterm Weight", expectedValue, course.WeightOfMidterm(0)); // Check weight of midterm 1
	}

	@Test
	public void testWeightOfFinal() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		int expectedValue = n.WeightOfFinals();
		assertEquals("Check Finals Weight", expectedValue, course.WeightOfFinal()); // Check weight of finals
		
	}

	
	@Test
	public void testHasProject() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		assertEquals("Check If the course has Project", true, course.HasProject());
	}

	

	@Test
	public void testAddStudent() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		course.AddStudent(s);
		assertEquals("Student Created", 1, course.GetStudents().size());

	}

	@Test
	public void testRemoveStudent() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		
		List<Course> completedCourses = new ArrayList<Course>();
		List<Course> currentCourses = new ArrayList<Course>();
		Student s = new Student(12345,"Nishant",completedCourses,currentCourses,true,true);
		course.AddStudent(s);
		assertEquals("Student Removed", true, course.RemoveStudent(s));
	}

	@Test
	public void testCode() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		assertEquals("TestCode", 115001, course.Code());
		
	}
	
	@Test
	public void testTotalWeight() 
	{
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		int totalWeight = 0;
		RandomWeights n = new RandomWeights(numberOfAssignments, numberOfMidterms, hasProject);
		Course course = new Course("Software Engineering",115001,n.WeightOfAssignments(),n.WeightOfMidterms(),n.WeightOfFinals(),n.WeightOfProject(),true);
		for(int i=0;i<numberOfAssignments;i++) 
		{
			totalWeight +=n.WeightOfAssignments().get(i);
		}
		for(int j=0;j<numberOfMidterms;j++) 
		{
			totalWeight += n.WeightOfMidterms().get(j);
		}
		totalWeight += n.WeightOfProject()+n.WeightOfFinals();
		assertEquals("Test Total Weight", totalWeight, 100);
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
