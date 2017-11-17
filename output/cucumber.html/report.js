$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("admincreatescourse.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature File Course Creation"
    }
  ],
  "line": 2,
  "name": "Admin Creates a Course",
  "description": "",
  "id": "admin-creates-a-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Admin Creates a course before registration starts",
  "description": "",
  "id": "admin-creates-a-course;admin-creates-a-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user selects admin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the admin logs in with password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the admin selects create course option",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the admin creates the course by \u003ccourse code\u003e, \u003ctitle\u003e,   \u003cnumber of assignments\u003e, \u003cnumber of midterms\u003e, \u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "admin-creates-a-course;admin-creates-a-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "class size",
        "has a project(true/false)"
      ],
      "line": 13,
      "id": "admin-creates-a-course;admin-creates-a-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "115001",
        "Software Engineering",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 14,
      "id": "admin-creates-a-course;admin-creates-a-course-before-registration-starts;;2"
    },
    {
      "cells": [
        "115002",
        "Computer Animation",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 15,
      "id": "admin-creates-a-course;admin-creates-a-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Admin Creates a course before registration starts",
  "description": "",
  "id": "admin-creates-a-course;admin-creates-a-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user selects admin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the admin logs in with password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the admin selects create course option",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the admin creates the course by 115001, Software Engineering,   2, 2, \u003cclasssize\u003e,\u003chas a project\u003e",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 158799122,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 181765,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_user_selects_admin_option()"
});
formatter.result({
  "duration": 276165,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_logs_in_with_password(String)"
});
formatter.result({
  "duration": 382682,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.ums.cucumber.features.UMSStepDefinitions.the_admin_logs_in_with_password(String) in file:/Users/nishantsood/Workspace/Eclipse/UniversityManagementSystem/target/classes/\u0027 with pattern [^the admin logs in with password$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And the admin logs in with password\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n",
  "status": "failed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_selects_create_course_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 32
    },
    {
      "val": "2",
      "offset": 64
    },
    {
      "val": "2",
      "offset": 67
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course_by_Software_Engineering_classsize_has_a_project(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UMSStepDefinitions.the_course_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Admin Creates a course before registration starts",
  "description": "",
  "id": "admin-creates-a-course;admin-creates-a-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user selects admin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the admin logs in with password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the admin selects create course option",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the admin creates the course by 115002, Computer Animation,   2, 2, \u003cclasssize\u003e,\u003chas a project\u003e",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the course is created",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 70409,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12911,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_user_selects_admin_option()"
});
formatter.result({
  "duration": 12572,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_logs_in_with_password(String)"
});
formatter.result({
  "duration": 209802,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.ums.cucumber.features.UMSStepDefinitions.the_admin_logs_in_with_password(String) in file:/Users/nishantsood/Workspace/Eclipse/UniversityManagementSystem/target/classes/\u0027 with pattern [^the admin logs in with password$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And the admin logs in with password\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n",
  "status": "failed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_selects_create_course_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "115002",
      "offset": 32
    },
    {
      "val": "2",
      "offset": 62
    },
    {
      "val": "2",
      "offset": 65
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course_by_Computer_Animation_classsize_has_a_project(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UMSStepDefinitions.the_course_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Admin Creates a course after registration starts",
  "description": "",
  "id": "admin-creates-a-course;admin-creates-a-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Wait for System End Time Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user selects admin option",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the admin logs in successfully",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the admin selects create course option",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the admin creates the course by \u003ccourse code\u003e, \u003ctitle\u003e,\u003cnumber of assignments\u003e, \u003cnumber of midterms\u003e, \u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course cannot be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "admin-creates-a-course;admin-creates-a-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "class size",
        "has a project(true/false)"
      ],
      "line": 28,
      "id": "admin-creates-a-course;admin-creates-a-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "115001",
        "Software Engineering",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 29,
      "id": "admin-creates-a-course;admin-creates-a-course-after-registration-starts;;2"
    },
    {
      "cells": [
        "115002",
        "Computer Animation",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 30,
      "id": "admin-creates-a-course;admin-creates-a-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Admin Creates a course after registration starts",
  "description": "",
  "id": "admin-creates-a-course;admin-creates-a-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Wait for System End Time Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user selects admin option",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the admin logs in successfully",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the admin selects create course option",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the admin creates the course by 115001, Software Engineering,2, 2, \u003cclasssize\u003e,\u003chas a project\u003e",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course cannot be created",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 25224,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_End_Time_Event_to_Fire()"
});
formatter.result({
  "duration": 17730,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 15662,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_user_selects_admin_option()"
});
formatter.result({
  "duration": 19118,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_selects_create_course_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "UMSStepDefinitions.the_course_cannot_be_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Admin Creates a course after registration starts",
  "description": "",
  "id": "admin-creates-a-course;admin-creates-a-course-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Wait for System End Time Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user selects admin option",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the admin logs in successfully",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the admin selects create course option",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the admin creates the course by 115002, Computer Animation,2, 2, \u003cclasssize\u003e,\u003chas a project\u003e",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course cannot be created",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 45747,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_End_Time_Event_to_Fire()"
});
formatter.result({
  "duration": 19868,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 19938,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_user_selects_admin_option()"
});
formatter.result({
  "duration": 22545,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_selects_create_course_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "UMSStepDefinitions.the_course_cannot_be_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("umsfeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature was referenced from //https://examples.javacodegeeks.com/core-java/junit/junit-cucumber-example/"
    }
  ],
  "line": 2,
  "name": "University Management System",
  "description": "",
  "id": "university-management-system",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "########------INTERNAL TIMER-------#######"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "id": "university-management-system;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Check InternalTimer Term Startup",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "InternalTimer Starts Term Setup",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Term Start Event is Fired",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "",
  "description": "",
  "id": "university-management-system;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Check InternalTimer Starts Registration",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "InternalTimer Starts Registration",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Registeration Start Event is Fired",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#########-----ADMIN------###########"
    }
  ],
  "line": 17,
  "name": "",
  "description": "",
  "id": "university-management-system;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Check InternalTimer Starts Registration",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "InternalTimer Starts Registration",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Registration Start Event is Fired",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "university-management-system;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Check InternalTimer Starts Registration",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "InternalTimer Starts Registration",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Registration Start Event is Fired",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});