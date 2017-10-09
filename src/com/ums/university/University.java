package com.ums.university;

import java.util.ArrayList;
import java.util.List;

import com.ums.courses.Course;
import com.ums.students.Student;

public class University implements IUniversity {

	List<Course> courses = new ArrayList<Course>();
	List<Student> students = new ArrayList<Student>();
	
	@Override
	public List<Course> Courses() {
		// TODO Auto-generated method stub
		return courses;
	}

	@Override
	public List<Student> Students() {
		// TODO Auto-generated method stub
		return students;
	}

	
	@Override
	public void RegisterStudentforCourse(Student student, Course aCourse) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void CancelCourse(Course course) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void DestroyCourse(Course course) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public Course CreateCourse(String title, int code,List<Integer> weightOfAssignments, 
			List<Integer> weightOfMidterm, int weightOfFinal,int weightOfProject, boolean hasProject) {
		Course course = new Course(title,  code, weightOfAssignments, 
				weightOfMidterm,  weightOfFinal, weightOfProject,  hasProject);
		courses.add(course);
		return course;
	}

	@Override
	public Student CreateStudent(int studentNumber, String name, List<Course> completedCourse, List<Course> currentCourses,
			boolean isFullTime, boolean isCreated) {
		Student student = new Student(studentNumber,  name,  completedCourse, currentCourses,
				 			isFullTime,  isCreated);
		students.add(student);
		return student;
	}
}
