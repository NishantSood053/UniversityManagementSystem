package com.ums.courses;

import java.util.List;

public class ProjectCourse extends Course implements IProjectCourse {

	
	

	public ProjectCourse(String title, int code, int numberOfAssignements, List<Integer> assignmentWeights,
			int weightOfMidterm, int weightOfFinal, int weightOfProject, boolean hasProject) {
		super(title, code, numberOfAssignements, assignmentWeights, weightOfMidterm, weightOfFinal, weightOfProject,
				hasProject);
		// TODO Auto-generated constructor stub
	}

	@Override
	public int WeightOfProject() {
		// TODO Auto-generated method stub
		return 0;
	}

}
