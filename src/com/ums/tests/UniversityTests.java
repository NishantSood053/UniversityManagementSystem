package com.ums.tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.ums.courses.Course;
import com.ums.network.StartServer;
import com.ums.students.Student;
import com.ums.university.University;
import com.ums.utilities.Config;
import com.ums.utilities.TermEvents;


public class UniversityTests {

	@Test
	public void testCoursesAlreadyExist() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		List<Course> courses = new ArrayList<Course>();
		University university = new University();
	
		Course course1 = new Course("Software Engineering",115001,numberOfAssignments,numberOfMidterms,30,hasProject,true);
		Course course2 = new Course("Computer Animation",115002,numberOfAssignments,numberOfMidterms,30,hasProject,true);
		
		courses.add(course1);
		courses.add(course2);

		university.SetCourses(courses);
		assertEquals("Courses set",courses, university.Courses());
	}
	
	@Test
	public void testCourses() {
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		List<Course> courses = new ArrayList<Course>();
		University university = new University();
		courses.add(university.CreateCourse("Object Oriented Software Develoment",115003,numberOfAssignments,numberOfMidterms,30,hasProject,true));
		university.SetCourses(courses);
		assertEquals("Courses set",courses, university.Courses());
	}

	@Test
	public void testStudents() {
		List<Student> students = new ArrayList<Student>();
		int[] studentNumbers = new int[]{12345, 12356};
		String[] studentNames = new String[]{"Nishant","Jatin"};
		boolean[] isFullTime = new boolean[]{true,true};
		for(int i=0;i<studentNumbers.length;i++) {
			Student s = new Student(studentNumbers[i], studentNames[i], isFullTime[i]);
			students.add(s);
		}
		
		University university = new University();
		university.SetStudents(students);
		assertEquals("Students Set",students, university.Students());
	}

	@Test
	public void testCreateCourse() {
	
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		University u = new University();
		//StartServer.start = System.currentTimeMillis();
		/*
		try {
			Thread.sleep(Config.STIMULATED_DAY * 1);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
		Course course = u.CreateCourse("Object Oriented Software Develoment",115003,numberOfAssignments,numberOfMidterms,30,hasProject,true);
		//Course course = u.CreateCourse("Object Oriented Software Develoment",115003,numberOfAssignments,numberOfMidterms,30,hasProject,true);
		
		assertTrue("Create Course",u.Courses().contains(course));

	}
	
	@Test(expected = NullPointerException.class)
	public void testCreateCourseFaliedPastDeadline() {
	
		int numberOfAssignments = 3;
		int numberOfMidterms = 1;
		boolean hasProject = true;
		University u = new University();
		/*
		StartServer.start = System.currentTimeMillis();
		try {
			Thread.sleep(Config.STIMULATED_DAY * (Config.OVERDUE + 1));
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		List<Course> courses = new ArrayList<Course>();
		courses.add(u.CreateCourse("Software Engineering",115001,numberOfAssignments,numberOfMidterms,30,hasProject,true));
		assertEquals("Course Creation Failed",courses,u.Courses());

	}
	@Test
	public void testCreateStudent() {
		University university = new University();
		/*
		StartServer.start = System.currentTimeMillis();
		try {
			Thread.sleep(Config.STIMULATED_DAY * 1);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		Student s = university.CreateStudent(12345, "Nishant", true);
		
		assertTrue("Student Created!", s!=null);
	}

	@Test
	public void testRegisterStudentforCourse() {
		University university = new University();
		//StartServer.start = System.currentTimeMillis();
		Student s = university.CreateStudent(12345, "Nishant",true);
	
		Student registeredStudent = university.RegisterStudentforCourse(s, university.getInstance().GetCourse(115001));
		
		assertEquals("Student Registered",s, registeredStudent);
	}
	

	@Test
	public void testCancelCourse() {
		fail("Not yet implemented");
		//Deregister all the students 
		// course is still there
	}

	@Test
	public void testDestroyCourse() {
		
		// Delete the course from the list
		University u  = new University();
		Course course = u.GetCourse(115001);
		TermEvents.SYSTEMENDED=true;
		assertTrue("Course Removed",u.DestroyCourse(course));
		TermEvents.SYSTEMENDED=false;
	}
	
	@Test(expected=NullPointerException.class)
	public void testDestroyCourseFailed() {
		
		// Delete the course from the list
		University u  = new University();
		Course course = u.GetCourse(115010);
		assertFalse("Course Removed",u.DestroyCourse(course));
	}
	@Test
	public void testDeleteStudent() 
	{
		//Delete the student from the list
		University university = new University();
		//StartServer.start = System.currentTimeMillis();
		Student s = university.GetStudent(8543748);
		assertTrue(university.DeleteStudent(s));
	}
	
	@Test(expected=NullPointerException.class)
	public void testDeleteStudentFailed() 
	{
		//Delete the student from the list
		University university = new University();
		//StartServer.start = System.currentTimeMillis();
		Student s = university.GetStudent(123456);
		assertFalse(university.DeleteStudent(s));
		
	}

}
