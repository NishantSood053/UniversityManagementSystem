package com.ums.university;
import java.util.List;

import com.ums.courses.*;
import com.ums.students.Student;
public interface IUniversity {
	
	List<Course> Courses();
	List<Student> Students();
	Course CreateCourse(String name,int cap);
	void RegisterStudentforCourse(Student student,Course aCourse);
	void CancelCourse(Course course);
	void DestroyCourse(Course course);

}
