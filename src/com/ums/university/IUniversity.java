package com.ums.university;
import java.util.List;

import com.ums.courses.*;
import com.ums.students.Student;
public interface IUniversity {
	
	List<Course> Courses();
	List<Student> Students();
	Course CreateCourse(String title, int code,List<Integer> weightOfAssignments, 
			List<Integer> weightOfMidterm, int weightOfFinal,int weightOfProject, boolean hasProject);
	void RegisterStudentforCourse(Student student,Course aCourse);
	void CancelCourse(Course course);
	void DestroyCourse(Course course);
	Student CreateStudent(int studentNumber, String name, List<Course> completedCourse, List<Course> currentCourses,
			boolean isFullTime, boolean isCreated);

}
