package com.ums.students;

import java.util.List;

import com.ums.courses.Course;

public class Student implements IStudent{

	
	int studentNumber;
	String name;
	List<Course> completedCourse;
	List<Course> currentCourses;
	Course selectedCourse;
	boolean isFullTime;
	boolean isCreated;
	

	public Student(int studentNumber, String name, List<Course> completedCourse, List<Course> currentCourses,
			boolean isFullTime, boolean isCreated) {
		super();
		this.studentNumber = studentNumber;
		this.name = name;
		this.completedCourse = completedCourse;
		this.currentCourses = currentCourses;
		this.isFullTime = isFullTime;
		this.isCreated = isCreated;
	}

	@Override
	public List<Course> CompletedCourses() {
		// TODO Auto-generated method stub
		return completedCourse;
	}

	@Override
	public int StudentNumber() {
		// TODO Auto-generated method stub
		return studentNumber;
	}

	@Override
	public String Name() {
		// TODO Auto-generated method stub
		return name;
	}

	@Override
	public List<Course> CurrentCourses() {
		// TODO Auto-generated method stub
		return currentCourses;
	}

	@Override
	public boolean IsFullTime() {
		// TODO Auto-generated method stub
		return isFullTime;
	}

	@Override
	public boolean IsCreated() {
		// TODO Auto-generated method stub
		return isCreated;
	}

	@Override
	public Course SelectCourse(Course course) {
		// TODO Auto-generated method stub
		
		selectedCourse = course;
		
		//Course Selected
		return selectedCourse;
	}

	@Override
	public boolean RegisterCourse(Course course) {
		// TODO Auto-generated method stub
		if(completedCourse.contains(course)) 
		{
			return false;
		}
		
		currentCourses.add(course);
		return true;
	}

	@Override
	public boolean DropCourse(Course course) {
		
		if(selectedCourse == course) 
		{
			selectedCourse = null;
			return true;//Course Dropped Successfully
		}
		return false;
	}

	@Override
	public boolean DeregisterCourse(Course course) {
		// TODO Auto-generated method stub
		if(currentCourses.contains(course)) 
		{
			currentCourses.remove(course);
			return true;
		}
		return false;
	}

}
