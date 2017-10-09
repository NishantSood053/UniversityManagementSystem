package com.ums.tables;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.apache.log4j.Logger;

import com.ums.courses.Course;

import com.ums.utilities.Trace;


public class CourseTable {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	List<Course> courseList = new ArrayList<Course>();
	
	private static class CourseListHolder {
		private static final CourseTable INSTANCE = new CourseTable();
	}
	
	private CourseTable() {
	String[] CourseList=new String[]{"Course1","Course2","Course3","Course4"};
	int [] courseCodes = new int[] {115014,115010,115013,115019};
	int [] numberOfAssignments = new int[] {2,2,1,3};
	Map<String,List<Integer>> weightsOfAssignments = new HashMap<String,List<Integer>>();
	
	weightsOfAssignments.put(CourseList[0], new ArrayList<Integer>(Arrays.asList(10,10)));
	weightsOfAssignments.put(CourseList[1], new ArrayList<Integer>(Arrays.asList(20,10)));
	weightsOfAssignments.put(CourseList[2], new ArrayList<Integer>(Arrays.asList(10)));
	weightsOfAssignments.put(CourseList[3], new ArrayList<Integer>(Arrays.asList(10,10,10)));
	
	
	int [] weightOfMidterms = new int[] {1,1,1,1};
	int [] weightOfFinals = new int[] {1,1,1,1};
	int [] weightOfProjects = new int[] {1,1,1,1};
    boolean [] hasProjects = new boolean[] {true,true,true,true};
    
    	for(int i=0;i<CourseList.length;i++){
			Course course =new Course(CourseList[i],courseCodes[i],numberOfAssignments[i],weightsOfAssignments.get(CourseList[i]),
					weightOfMidterms[i],
					weightOfFinals[i],weightOfProjects[i],hasProjects[i]);
			
			courseList.add(course);
		}
    	logger.info(String.format("Operation:Initialize ItemTable;ItemTable: %s", courseList));
	}
	
	public static final CourseTable getInstance() {
		return CourseListHolder.INSTANCE;
	}
	
	public List<Course> getCourseTable() {
		return courseList;
	}
}
