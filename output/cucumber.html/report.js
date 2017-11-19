$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("invalidpath.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature File contains all invalid paths"
    }
  ],
  "line": 2,
  "name": "ALL UMS INVALID FEATURES",
  "description": "",
  "id": "all-ums-invalid-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#LOGIN"
    }
  ],
  "line": 5,
  "name": "Admin Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;admin-login-with-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user logs in with password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the admin is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-login-with-invalid-password;",
  "rows": [
    {
      "cells": [
        "input",
        "password"
      ],
      "line": 12,
      "id": "all-ums-invalid-features;admin-login-with-invalid-password;;1"
    },
    {
      "cells": [
        "admin",
        "asdasdas"
      ],
      "line": 13,
      "id": "all-ums-invalid-features;admin-login-with-invalid-password;;2"
    },
    {
      "cells": [
        "1",
        "asdsn"
      ],
      "line": 14,
      "id": "all-ums-invalid-features;admin-login-with-invalid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Admin Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;admin-login-with-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user inputs admin",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user logs in with password asdasdas",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the admin is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 130353416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 1591465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdasdas",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 59308,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_not_logged_in()"
});
formatter.result({
  "duration": 959233,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Admin Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;admin-login-with-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user inputs 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user logs in with password asdsn",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the admin is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2759360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 57341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdsn",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 45150,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_not_logged_in()"
});
formatter.result({
  "duration": 15631,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Student Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;student-login-with-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user logs in with studentnumber \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;student-login-with-invalid-password;",
  "rows": [
    {
      "cells": [
        "input",
        "id"
      ],
      "line": 23,
      "id": "all-ums-invalid-features;student-login-with-invalid-password;;1"
    },
    {
      "cells": [
        "student",
        "1128790"
      ],
      "line": 24,
      "id": "all-ums-invalid-features;student-login-with-invalid-password;;2"
    },
    {
      "cells": [
        "2",
        "8872673"
      ],
      "line": 25,
      "id": "all-ums-invalid-features;student-login-with-invalid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Student Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;student-login-with-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user inputs student",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user logs in with studentnumber 1128790",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2465721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 59717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1128790",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 143627,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 20793,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Student Login with invalid password",
  "description": "",
  "id": "all-ums-invalid-features;student-login-with-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user inputs 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user logs in with studentnumber 8872673",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2632775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 53543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8872673",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 54129,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 14566,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 27,
      "value": "#Course Creation"
    }
  ],
  "line": 28,
  "name": "Admin Creates an already existing course before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the course faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 38,
      "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts;;1"
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
      "line": 39,
      "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Admin Creates an already existing course before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-existing-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the admin creates the course 115001,Software Engineering,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3351359,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 20085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 67160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 52790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 55046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 29
    },
    {
      "val": "Software Engineering",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 57
    },
    {
      "val": "2",
      "offset": 59
    },
    {
      "val": "30",
      "offset": 61
    },
    {
      "val": "true",
      "offset": 64
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 1541378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 48686,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Admin Creates a course after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the course faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 52,
      "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "115010",
        "OOP",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 53,
      "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Admin Creates a course after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the admin creates the course 115010,OOP,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 4122202,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 18864,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 22954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 68427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 53631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 47658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115010",
      "offset": 29
    },
    {
      "val": "OOP",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 40
    },
    {
      "val": "2",
      "offset": 42
    },
    {
      "val": "30",
      "offset": 44
    },
    {
      "val": "true",
      "offset": 47
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 720391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 47936,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 55,
      "value": "#Admin Create Student"
    }
  ],
  "line": 56,
  "name": "Admin Creates a student after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the admin creates the student \u003cstudent id\u003e,\u003cname\u003e,\u003cis fulltime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "create student faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "student id",
        "name",
        "is fulltime"
      ],
      "line": 67,
      "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts;;1"
    },
    {
      "cells": [
        "8543790",
        "john",
        "true"
      ],
      "line": 68,
      "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "Admin Creates a student after registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-student-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the admin creates the student 8543790,john,true",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "create student faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3976418,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 14090,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 39213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 37066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543790",
      "offset": 30
    },
    {
      "val": "john",
      "offset": 38
    },
    {
      "val": "true",
      "offset": 43
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_student_john_true(int,String,String)"
});
formatter.result({
  "duration": 191590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 66557,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 70,
      "value": "#Student with student id 8543748 is initialized as soon as the university system is started"
    }
  ],
  "line": 71,
  "name": "Admin Creates an already exisiting student before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 72,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the admin creates the student \u003cstudent id\u003e,\u003cname\u003e,\u003cis fulltime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "create student faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student id",
        "name",
        "is fulltime"
      ],
      "line": 81,
      "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "8543748",
        "nishant",
        "true"
      ],
      "line": 82,
      "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 82,
  "name": "Admin Creates an already exisiting student before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-an-already-exisiting-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 72,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the admin creates the student 8543748,nishant,true",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "create student faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 4133673,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 18177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 507957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 30
    },
    {
      "val": "nishant",
      "offset": 38
    },
    {
      "val": "true",
      "offset": 46
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_student_john_true(int,String,String)"
});
formatter.result({
  "duration": 524423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 55606,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 84,
      "value": "#Admin Deletes Course"
    }
  ],
  "line": 86,
  "name": "Admin deletes a course which does not exist before term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-deletes-a-course-which-does-not-exist-before-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 87,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the user inputs 7",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the admin deletes course 115050",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "delete course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2852370,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 18974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 41058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 56287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115050",
      "offset": 25
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_course(String)"
});
formatter.result({
  "duration": 112254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 32587,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Admin deletes existing course after term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-deletes-existing-course-after-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Wait for Term End Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the user inputs 7",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the admin deletes course 115010",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "delete course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2869714,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 17203,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Term_End_Event_to_Fire()"
});
formatter.result({
  "duration": 22384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 42015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 347586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115010",
      "offset": 25
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_course(String)"
});
formatter.result({
  "duration": 74401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 28292,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 105,
      "value": "#Admin Deletes Student"
    }
  ],
  "line": 107,
  "name": "Admin Deletes an existing student after term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-deletes-an-existing-student-after-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Wait for Term End Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the user inputs 5",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "the admin deletes student 8543748",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "delete student faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2738630,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 16897,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12237,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Term_End_Event_to_Fire()"
});
formatter.result({
  "duration": 13485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 45450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 47669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 26
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_student(String)"
});
formatter.result({
  "duration": 119764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 31208,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Admin Deletes a student which has not been created before term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-deletes-a-student-which-has-not-been-created-before-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 119,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user inputs 5",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the admin deletes student 8567244",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "delete student faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3975808,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 13681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 35086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 55646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8567244",
      "offset": 26
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_student(String)"
});
formatter.result({
  "duration": 96088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 49768,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 127,
      "value": "#Admin Cancels the course"
    }
  ],
  "line": 129,
  "name": "Admin cancels the course after registeration ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-cancels-the-course-after-registeration-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 130,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Wait for Registration Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Wait for Registration End Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the user inputs 6",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the admin cancel course 115070",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "cancel course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1951899,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12987,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 10045,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_End_Event_to_Fire()"
});
formatter.result({
  "duration": 16392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 65560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 53283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115070",
      "offset": 24
    }
  ],
  "location": "UMSStepDefinitions.the_admin_cancel_course(String)"
});
formatter.result({
  "duration": 92310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 30531,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "Admin cancels the course after term ends",
  "description": "",
  "id": "all-ums-invalid-features;admin-cancels-the-course-after-term-ends",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 141,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the user inputs 6",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "the admin cancel course 115070",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "cancel course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2315081,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 21960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 27898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115070",
      "offset": 24
    }
  ],
  "location": "UMSStepDefinitions.the_admin_cancel_course(String)"
});
formatter.result({
  "duration": 72719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 28949,
  "status": "passed"
});
formatter.uri("validpath.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature File contains all valid paths"
    }
  ],
  "line": 2,
  "name": "ALL UMS VALID FEATURES",
  "description": "",
  "id": "all-ums-valid-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#LOGIN"
    }
  ],
  "line": 4,
  "name": "Admin Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;admin-login-with-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user logs in with password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the admin is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-login-with-valid-password;",
  "rows": [
    {
      "cells": [
        "input",
        "password"
      ],
      "line": 11,
      "id": "all-ums-valid-features;admin-login-with-valid-password;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 12,
      "id": "all-ums-valid-features;admin-login-with-valid-password;;2"
    },
    {
      "cells": [
        "1",
        "admin"
      ],
      "line": 13,
      "id": "all-ums-valid-features;admin-login-with-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Admin Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;admin-login-with-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user inputs admin",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user logs in with password admin",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the admin is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2371041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 29502,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_in()"
});
formatter.result({
  "duration": 16298,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Admin Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;admin-login-with-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user inputs 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user logs in with password admin",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the admin is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2653806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 43358,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_in()"
});
formatter.result({
  "duration": 14092,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Student Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;student-login-with-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user logs in with studentnumber \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;student-login-with-valid-password;",
  "rows": [
    {
      "cells": [
        "input",
        "id"
      ],
      "line": 22,
      "id": "all-ums-valid-features;student-login-with-valid-password;;1"
    },
    {
      "cells": [
        "student",
        "8543748"
      ],
      "line": 23,
      "id": "all-ums-valid-features;student-login-with-valid-password;;2"
    },
    {
      "cells": [
        "2",
        "8543748"
      ],
      "line": 24,
      "id": "all-ums-valid-features;student-login-with-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Student Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;student-login-with-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user inputs student",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user logs in with studentnumber 8543748",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 3540426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 70742,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 17652,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Student Login with valid password",
  "description": "",
  "id": "all-ums-valid-features;student-login-with-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user inputs 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user logs in with studentnumber 8543748",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2649371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543748",
      "offset": 36
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_studentnumber(String)"
});
formatter.result({
  "duration": 54206,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 14462,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 26,
      "value": "#ADMIN CREATE COURSE"
    }
  ],
  "line": 28,
  "name": "Admin Creates a course before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 38,
      "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "115010",
        "OOP",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 39,
      "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Admin Creates a course before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the admin creates the course 115010,OOP,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1939950,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 10938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 25504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115010",
      "offset": 29
    },
    {
      "val": "OOP",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 40
    },
    {
      "val": "2",
      "offset": 42
    },
    {
      "val": "30",
      "offset": 44
    },
    {
      "val": "true",
      "offset": 47
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 731728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 62500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 41,
      "value": "#Admin Create Student"
    }
  ],
  "line": 43,
  "name": "Admin Creates a student before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the admin creates the student \u003cstudent id\u003e,\u003cname\u003e,\u003cis fulltime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "create student success",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student id",
        "name",
        "is fulltime"
      ],
      "line": 53,
      "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "8543790",
        "john",
        "true"
      ],
      "line": 54,
      "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "Admin Creates a student before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-creates-a-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the admin creates the student 8543790,john,true",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "create student success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1965404,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 40638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 263775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543790",
      "offset": 30
    },
    {
      "val": "john",
      "offset": 38
    },
    {
      "val": "true",
      "offset": 43
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_student_john_true(int,String,String)"
});
formatter.result({
  "duration": 341167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 25867,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 56,
      "value": "#Admin Deletes Course"
    }
  ],
  "line": 57,
  "name": "Admin deletes existing course before term ends",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the user inputs 7",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the admin deletes course \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "delete course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 69,
      "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends;;1"
    },
    {
      "cells": [
        "115020",
        "Ad Hoc Networking",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 70,
      "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 70,
  "name": "Admin deletes existing course before term ends",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-existing-course-before-term-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the admin creates the course 115020,Ad Hoc Networking,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the user inputs 7",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the admin deletes course 115020",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "delete course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1915830,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 11293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 36276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 51213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115020",
      "offset": 29
    },
    {
      "val": "Ad Hoc Networking",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 54
    },
    {
      "val": "2",
      "offset": 56
    },
    {
      "val": "30",
      "offset": 58
    },
    {
      "val": "true",
      "offset": 61
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 638394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115020",
      "offset": 25
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_course(String)"
});
formatter.result({
  "duration": 542737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 31007,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 72,
      "value": "#Admin Delete Student"
    }
  ],
  "line": 74,
  "name": "Admin Deletes a student before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the admin creates the student \u003cstudent id\u003e,\u003cname\u003e,\u003cis fulltime\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs 5",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the admin deletes student \u003cstudent id\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "delete student success",
  "keyword": "Then "
});
formatter.examples({
  "line": 85,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student id",
        "name",
        "is fulltime"
      ],
      "line": 86,
      "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "8543730",
        "wick",
        "false"
      ],
      "line": 87,
      "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 87,
  "name": "Admin Deletes a student before registration starts",
  "description": "",
  "id": "all-ums-valid-features;admin-deletes-a-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the admin creates the student 8543730,wick,false",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs 5",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the admin deletes student 8543730",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "delete student success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 7891202,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 14793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 57514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543730",
      "offset": 30
    },
    {
      "val": "wick",
      "offset": 38
    },
    {
      "val": "false",
      "offset": 43
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_student_john_true(int,String,String)"
});
formatter.result({
  "duration": 295998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8543730",
      "offset": 26
    }
  ],
  "location": "UMSStepDefinitions.the_admin_deletes_student(String)"
});
formatter.result({
  "duration": 196588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 26618,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 89,
      "value": "#Admin Cancel the Course"
    }
  ],
  "line": 91,
  "name": "Admin cancels the course before term ends",
  "description": "",
  "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 92,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the admin creates the course \u003ccourse code\u003e,\u003ctitle\u003e,\u003cnumber of assignments\u003e,\u003cnumber of midterms\u003e,\u003cclasssize\u003e,\u003chas a project\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the user inputs 6",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the admin cancel course \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "cancel course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends;",
  "rows": [
    {
      "cells": [
        "course code",
        "title",
        "number of assignments",
        "number of midterms",
        "classsize",
        "has a project"
      ],
      "line": 103,
      "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends;;1"
    },
    {
      "cells": [
        "115070",
        "Internetworking Technologies",
        "2",
        "2",
        "30",
        "true"
      ],
      "line": 104,
      "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 104,
  "name": "Admin cancels the course before term ends",
  "description": "",
  "id": "all-ums-valid-features;admin-cancels-the-course-before-term-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 92,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "Wait for System Time Start Event to Fire",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the user inputs 1",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the admin creates the course 115070,Internetworking Technologies,2,2,30,true",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the user inputs 6",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the admin cancel course 115070",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "cancel course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2038450,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 24037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115070",
      "offset": 29
    },
    {
      "val": "Internetworking Technologies",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 65
    },
    {
      "val": "2",
      "offset": 67
    },
    {
      "val": "30",
      "offset": 69
    },
    {
      "val": "true",
      "offset": 72
    }
  ],
  "location": "UMSStepDefinitions.the_admin_creates_the_course(int,String,int,int,int,String)"
});
formatter.result({
  "duration": 646669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 69801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115070",
      "offset": 24
    }
  ],
  "location": "UMSStepDefinitions.the_admin_cancel_course(String)"
});
formatter.result({
  "duration": 292973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 29109,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 106,
      "value": "#LOGOUT"
    }
  ],
  "line": 108,
  "name": "Admin Logouts",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 109,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "the user inputs \u003c1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the user logs in with password \u003cadmin\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the admin is logged out",
  "keyword": "Then "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts;",
  "rows": [
    {
      "cells": [
        "input"
      ],
      "line": 116,
      "id": "all-ums-valid-features;admin-logouts;;1"
    },
    {
      "cells": [
        "9"
      ],
      "line": 117,
      "id": "all-ums-valid-features;admin-logouts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 117,
  "name": "Admin Logouts",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 109,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "the user inputs \u003c1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the user logs in with password \u003cadmin\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "the user inputs 9",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the admin is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2413548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c1\u003e",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cadmin\u003e",
      "offset": 31
    }
  ],
  "location": "UMSStepDefinitions.the_user_logs_in_with_password(String)"
});
formatter.result({
  "duration": 30650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 16
    }
  ],
  "location": "UMSStepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28310,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_out()"
});
formatter.result({
  "duration": 18630,
  "status": "passed"
});
});