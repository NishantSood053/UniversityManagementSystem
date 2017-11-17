#Feature File contains all valid paths
Feature: ALL UMS VALID FEATURES
#LOGIN
	Scenario Outline: Admin Login with valid password
		Given the univeristy system has started
		And the user inputs <input>
		When the user logs in with password <password>
		Then the admin is logged in 
	
		Examples:
    		|input	| password   |
    		|admin	| admin		 |
    		|1		| admin		 |
    		
  Scenario Outline: Student Login with valid password
		Given the univeristy system has started
		And the user inputs <input>
		When the user logs in with studentnumber <id> 
		Then the student is logged in 
	
		Examples:
    		|input	| id		    |
    		|student	| 8543748	|	
    		|2		| 8543748	|
 
 #ADMIN CREATE COURSE
 
 Scenario Outline: Admin Creates a course before registration starts
		Given the univeristy system has started
		And Wait for System Time Start Event to Fire
		And the user inputs 1 
		And the user logs in with password admin
		And the user inputs 1
		When the admin creates the course <course code>,<title>,<number of assignments>,<number of midterms>,<classsize>,<has a project>
		Then the course success	
		
	Examples:
		| course code	| title		 			| number of assignments    | number of midterms | classsize | has a project			   |
		| 115010			| OOP					| 2    					   | 2 				   | 30 			| true 					   |
		
   		
 #LOGOUT 
    		
    		Scenario Outline: Admin Logouts
		Given the univeristy system has started
		And the user inputs <1>
		When the user logs in with password <admin>
		And the user inputs <input>
		Then the admin is logged out 
	
		Examples:
    		|input|
    		|9	  |