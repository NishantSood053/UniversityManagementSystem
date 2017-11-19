package com.ums.cucumber.features;

import com.ums.handler.InputHandler;
import com.ums.handler.OutputHandler;
import com.ums.handler.model.ServerOutput;
import com.ums.university.University;
import com.ums.utilities.Config;
import com.ums.utilities.TermEvents;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UMSStepDefinitions  {
	
	InputHandler inputHandler = new InputHandler();
	ServerOutput serverOutput = new ServerOutput("", 0);

	int state;
	String output;
	
	//-----GIVEN's---------------
	@Given("^the university system has started$")
	public void the_university_system_has_started() throws Throwable {
	    University.getInstance();
	    serverOutput = inputHandler.processInput("\n", InputHandler.WAITING);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	
	@Given("^the user inputs (.*)$")
	public void the_user_inputs(String input) throws Throwable {
		serverOutput = inputHandler.processInput(input, state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@When("^the user logs in with password (.*)$")
	public void the_user_logs_in_with_password(String password) throws Throwable {
		serverOutput = inputHandler.processInput(password, state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Then("^the admin is logged in$")
	public void the_admin_is_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.ADMIN));
	}
	
	@Then("^the admin is not logged in$")
	public void the_admin_is_not_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.ADMINLOGIN));
	}

	@Then("^the admin is logged out$")
	public void the_admin_is_logged_out() throws Throwable {
		assertThat(state, equalTo(OutputHandler.FINISHWAITING));
	}
	
	@When("^the user logs in with studentnumber (.*)$")
	public void the_user_logs_in_with_studentnumber(String studentNumber) throws Throwable {
		serverOutput = inputHandler.processInput(studentNumber, state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Then("^the student is logged in$")
	public void the_student_is_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENT));
	}
	
	@Then("^the student is not logged in$")
	public void the_student_is_not_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENTLOGIN));
	}
	
	
	@Given("^Wait for System Time Start Event to Fire$")
	public void wait_for_System_Time_Start_Event_to_Fire() throws Throwable {
	    TermEvents.SYSTEMENDED = false;
	}
	
	@When("^the admin creates the course (\\d+),(.*),(\\d+),(\\d+),(\\d+),(.*)$")
	public void the_admin_creates_the_course(int courseCode,
					String title, int noOfAssignments,int noOfMidterms,int classSize,String hasProject) throws Throwable {
		
		String input = courseCode + "," + title + "," 
				+ noOfAssignments + "," + noOfMidterms
				+ "," + classSize + "," + hasProject;
		
		serverOutput = inputHandler.processInput(input,state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Then("^(.*) success$")
	public void success(String input) throws Throwable {
		assertThat(output, equalTo(Config.SUCCESS));
	}
	
	@Then("^(.*) faliure$")
	public void faliure(String input) throws Throwable {
		assertThat(output, equalTo(Config.FALIURE));
	}
	
	@Given("^Wait for Registration Start Event to Fire$")
	public void wait_for_Registration_Start_Event_to_Fire() throws Throwable {
		TermEvents.SYSTEMENDED = true;
	}
	
	@When("^the admin creates the student (\\d+),(.*),(.*)$")
	public void the_admin_creates_the_student_john_true(int studentId,String name,String isFulltime) throws Throwable {
	   
		String input = studentId + "," + name + "," + isFulltime; 
		serverOutput = inputHandler.processInput(input,state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^the admin deletes course (.*)$")
	public void the_admin_deletes_course(String courseCode) throws Throwable {
		serverOutput = inputHandler.processInput(courseCode,state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Given("^Wait for Term End Event to Fire$")
	public void wait_for_Term_End_Event_to_Fire() throws Throwable {
	    TermEvents.TERMENDED = true;
	}


	/*
	@Given("^the university is initialized$")
	public void the_university_is_initialized() throws Throwable {
	    University.getInstance();
	}

	@Given("^Wait for System Time Start Event to Fire$")
	public void wait_for_System_Time_Start_Event_to_Fire() throws Throwable {
	   TermEvents.SYSTEMENDED = false;
	}

	@Given("^the user selects admin option$")
	public void the_user_selects_admin_option() throws Throwable {
		serverOutput = inputHandler.processInput("1", state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Given("^the admin logs in with password$")
	public void the_admin_logs_in_with_password(String password) throws Throwable {
		serverOutput = inputHandler.processInput(password, state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Given("^the admin selects create course option$")
	public void the_admin_selects_create_course_option() throws Throwable {
		serverOutput = inputHandler.processInput("1", state);
		state = serverOutput.getState();
		output = serverOutput.getOutput(); 
	}
	

	@Given("^Wait for System End Time Event to Fire$")
	public void wait_for_System_End_Time_Event_to_Fire() throws Throwable {
		 TermEvents.SYSTEMENDED = true;
	}

	@Given("^Wait for Registration Start Event to Fire$")
	public void wait_for_Registration_Start_Event_to_Fire() throws Throwable {
		TermEvents.SYSTEMENDED = true;
		TermEvents.REGISTERATIONENDED = false;
	}
	*/
	//------WHEN's---------------
/*
	@When("^the admin creates the course by (\\d+), Software Engineering,   (\\d+), (\\d+), <classsize>,<has a project>$")
	public void the_admin_creates_the_course_by_Software_Engineering_classsize_has_a_project(int arg1, int arg2, int arg3) throws Throwable {
	    
	}
	@When("^the admin creates the course by (\\d+), Computer Animation,   (\\d+), (\\d+), <classsize>,<has a project>$")
	public void the_admin_creates_the_course_by_Computer_Animation_classsize_has_a_project(int arg1, int arg2, int arg3) throws Throwable {
	   
	}

*/
	//------THEN's--------------
/*
	@Then("^the course is created$")
	public void the_course_is_created() throws Throwable {
	    
	}

	
	@Then("^the course cannot be created$")
	public void the_course_cannot_be_created() throws Throwable {
	    
	}
	*/
}
