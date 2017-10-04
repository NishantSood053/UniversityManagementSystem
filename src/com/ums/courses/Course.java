package com.ums.courses;

import java.util.List;

import com.ums.students.Student;

public class Course implements ICourse {

	String title;
	int code;
	int weightOfAssignment;
	int weightOfMidterm;
	int weightOfFinal;
	boolean hasProject;
	int weightOfProject;
	
	public Course(String title, int code,int weightOfAssignment, int weightOfMidterm, int weightOfFinal,int weightOfProject, boolean hasProject) {
		super();
		this.title = title;
		this.code = code;
		this.weightOfAssignment = weightOfAssignment;
		this.weightOfMidterm = weightOfMidterm;
		this.weightOfFinal = weightOfFinal;
		this.weightOfProject = weightOfProject;
		this.hasProject = hasProject;
	}

	
	@Override
	public String Title() {
		// TODO Auto-generated method stub
		return title;
	}

	@Override
	public List<Student> GetStudents() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int WeightOfAssignment(int assignmentNumber) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int WeightOfMidterm(int midtermNum) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int WeightOfFinal() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int MarkForStudent(Student student) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean HasProject() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean IsFull() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean AddStudent(Student s) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean RemoveStudent(Student s) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int Code() {
		// TODO Auto-generated method stub
		return code;
	}

	@Override
	public List<Integer> PreRequisities() {
		// TODO Auto-generated method stub
		return null;
	}

	

}
