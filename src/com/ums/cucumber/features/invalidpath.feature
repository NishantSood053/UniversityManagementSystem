#Feature File contains all invalid paths
Feature: ALL UMS INVALID FEATURES

#LOGIN
	Scenario Outline: Admin Login with invalid password
		Given the univeristy system has started
		And the user inputs <input>
		When the user logs in with password <password>
		Then the admin is not logged in 
	
		Examples:
    		|input	| password   |
    		|admin	| asdasdas	 |
    		|1		| asdsn		 |
    		
    	Scenario Outline: Student Login with invalid password
		Given the univeristy system has started
		And the user inputs <input>
		When the user logs in with studentnumber <id> 
		Then the student is not logged in 
	
		Examples:
    		|input	| id		    |
    		|student	| 1128790	|	
    		|2		| 8872673	|
    		
#Course Creation
	Scenario Outline: Admin Creates a redundant course before registration starts
			Given the univeristy system has started
			And Wait for System Time Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 1
			When the admin creates the course <course code>,<title>,<number of assignments>,<number of midterms>,<classsize>,<has a project>
			Then the course unsuccess	
			
		Examples:
			| course code	| title		 			| number of assignments    | number of midterms | classsize | has a project			   |
			| 115001			| Software Engineering	| 2    					   | 2 				   | 30 			| true 					   |
			
	Scenario Outline: Admin Creates a course after registration starts
			Given the univeristy system has started
			And Wait for System Time Start Event to Fire
			And Wait for Registration Start Event to Fire
			And the user inputs 1 
			And the user logs in with password admin
			And the user inputs 1
			When the admin creates the course <course code>,<title>,<number of assignments>,<number of midterms>,<classsize>,<has a project>
			Then the course unsuccess	
			
		Examples:
			| course code	| title		 			| number of assignments    | number of midterms | classsize | has a project			   |
			| 115010			| OOP					| 2    					   | 2 				   | 30 			| true 					   |
			
			