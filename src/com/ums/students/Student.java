package com.ums.students;

import java.util.List;

import com.ums.courses.Course;

public class Student implements IStudent{

	@Override
	public List<Course> CompletedCourses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int StudentNumber() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public String Name() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Course> CurrentCourses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean IsFullTime() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean IsCreated() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Course SelectCourse(List<Course> courses) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean RegisterCourse(Course course) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean DropCourse(Course course) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean DeregisterCourse(Course course) {
		// TODO Auto-generated method stub
		return false;
	}

}
