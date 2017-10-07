package com.ums.courses;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ums.students.Student;

public class Course implements ICourse {

	String title;
	int code;
	int weightOfMidterm;
	int weightOfFinal;
	boolean hasProject;
	int weightOfProject;
	int numberOfAssignments;
	List<Integer> assignmentWeights = new ArrayList<Integer>();
	List<Student> students = new ArrayList<Student>();
	
	
	public Course(String title, int code,int numberOfAssignements,List<Integer> assignmentWeights, 
			int weightOfMidterm, int weightOfFinal,int weightOfProject, boolean hasProject) {
		super();
		this.title = title;
		this.code = code;
		this.weightOfMidterm = weightOfMidterm;
		this.weightOfFinal = weightOfFinal;
		this.weightOfProject = weightOfProject;
		this.hasProject = hasProject;
		this.numberOfAssignments = numberOfAssignements;
		this.assignmentWeights = assignmentWeights;
	}

	
	@Override
	public String Title() {
		// TODO Auto-generated method stub
		return title;
	}

	@Override
	public List<Student> GetStudents() {
		// TODO Auto-generated method stub
		return students;
	}

	@Override
	public int WeightOfAssignment(int assignmentNumber) {
		return assignmentWeights.get(assignmentNumber);
	}

	@Override
	public int WeightOfMidterm() {
		// TODO Auto-generated method stub
		return weightOfMidterm;
	}

	@Override
	public int WeightOfFinal() {
		// TODO Auto-generated method stub
		return weightOfFinal;
	}

	@Override
	public int MarkForStudent(Student student) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean HasProject() {
		// TODO Auto-generated method stub
		return hasProject;
	}

	@Override
	public boolean IsFull() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean AddStudent(Student s) {
		// TODO Auto-generated method stub
		students.add(s);
		return true;
	}

	@Override
	public boolean RemoveStudent(Student s) {
		// TODO Auto-generated method stub
		for(int i=0; i < students.size(); i++) 
		{
			if(students.contains(s)) 
			{
				int index = students.indexOf(s);
				students.remove(index);
				return true;
			}
		}
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
