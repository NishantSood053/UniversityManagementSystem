package com.ums.tables;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.ums.students.Student;
import com.ums.utilities.Trace;


public class StudentTable {
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	List<Student> courseList = new ArrayList<Student>();
	
	private static class StudentListHolder {
		private static final StudentTable INSTANCE = new StudentTable();
	}
	
	private StudentTable() {
		
	}
	
	public static final StudentTable getInstance() {
		return StudentListHolder.INSTANCE;
	}
}
