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
  "duration": 137337577,
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
  "duration": 1706776,
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
  "duration": 53823,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_not_logged_in()"
});
formatter.result({
  "duration": 944770,
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
  "duration": 2999852,
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
  "duration": 64640,
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
  "duration": 36125,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_not_logged_in()"
});
formatter.result({
  "duration": 19729,
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
  "duration": 3119685,
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
  "duration": 62334,
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
  "duration": 145475,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 29389,
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
  "duration": 3600277,
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
  "duration": 41944,
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
  "duration": 77271,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 20422,
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
  "duration": 2842641,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 26437,
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
  "duration": 59747,
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
  "duration": 47366,
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
  "duration": 59790,
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
  "duration": 1474953,
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
  "duration": 41889,
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
  "duration": 2450878,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 19176,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 16326,
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
  "duration": 69923,
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
  "duration": 37241,
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
  "duration": 40779,
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
  "duration": 695090,
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
  "duration": 49421,
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
  "duration": 3531939,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 17247,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 16147,
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
  "duration": 53980,
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
  "duration": 53096,
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
  "duration": 49227,
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
  "duration": 191680,
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
  "duration": 48431,
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
  "duration": 4685754,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 16504,
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
  "duration": 46622,
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
  "duration": 54497,
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
  "duration": 50830,
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
  "duration": 688961,
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
  "duration": 74997,
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
  "duration": 2663951,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 17344,
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
  "duration": 66519,
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
  "duration": 43742,
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
  "duration": 54675,
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
  "duration": 76991,
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
  "duration": 49135,
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
  "duration": 2751139,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 14230,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Term_End_Event_to_Fire()"
});
formatter.result({
  "duration": 25659,
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
  "duration": 53441,
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
  "duration": 35335,
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
  "duration": 433146,
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
  "duration": 100782,
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
  "duration": 45211,
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
  "duration": 2485664,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 22474,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 16710,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Term_End_Event_to_Fire()"
});
formatter.result({
  "duration": 12999,
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
  "duration": 69047,
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
  "duration": 44963,
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
  "duration": 47302,
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
  "duration": 235011,
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
  "duration": 56231,
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
  "duration": 3138332,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12403,
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
  "duration": 48208,
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
  "duration": 34980,
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
  "duration": 53695,
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
  "duration": 108524,
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
  "duration": 40061,
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
  "duration": 2534203,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 18509,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 17812,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_End_Event_to_Fire()"
});
formatter.result({
  "duration": 24565,
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
  "duration": 45973,
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
  "duration": 79783,
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
  "duration": 64156,
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
  "duration": 137683,
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
  "duration": 66664,
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
  "duration": 2177832,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 13268,
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
  "duration": 31244,
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
  "duration": 39359,
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
  "duration": 50024,
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
  "duration": 82547,
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
  "duration": 36879,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 149,
      "value": "#Student Selects the Course"
    }
  ],
  "line": 150,
  "name": "Student Selects a course which does not exist",
  "description": "",
  "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 151,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the user selects the course \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "select course faliure",
  "keyword": "Then "
});
formatter.examples({
  "line": 158,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist;",
  "rows": [
    {
      "cells": [
        "course code"
      ],
      "line": 159,
      "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist;;1"
    },
    {
      "cells": [
        "112001"
      ],
      "line": 160,
      "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 160,
  "name": "Student Selects a course which does not exist",
  "description": "",
  "id": "all-ums-invalid-features;student-selects-a-course-which-does-not-exist;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 151,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the user selects the course 112001",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 156,
  "name": "select course faliure",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 2327358,
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
  "duration": 44119,
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
  "duration": 83756,
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
  "duration": 52333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "112001",
      "offset": 28
    }
  ],
  "location": "UMSStepDefinitions.the_user_selects_the_course(String)"
});
formatter.result({
  "duration": 147716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.faliure(String)"
});
formatter.result({
  "duration": 44150,
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
  "duration": 4286651,
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
  "duration": 33474,
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
  "duration": 33753,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_in()"
});
formatter.result({
  "duration": 15971,
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
  "duration": 2427846,
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
  "duration": 32963,
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
  "duration": 29088,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_in()"
});
formatter.result({
  "duration": 12161,
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
  "duration": 2062085,
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
  "duration": 33131,
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
  "duration": 53302,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 15174,
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
  "duration": 1872698,
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
  "duration": 27702,
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
  "duration": 39714,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 11495,
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
  "duration": 2438932,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 13042,
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
  "duration": 33363,
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
  "duration": 31751,
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
  "duration": 30447,
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
  "duration": 734052,
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
  "duration": 50829,
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
  "duration": 2272426,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12450,
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
  "duration": 30186,
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
  "duration": 320692,
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
  "duration": 59694,
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
  "duration": 357000,
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
  "duration": 46594,
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
  "duration": 7916590,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 14637,
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
  "duration": 41886,
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
  "duration": 34862,
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
  "duration": 40774,
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
  "duration": 611749,
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
  "duration": 29344,
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
  "duration": 386947,
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
  "duration": 26188,
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
  "duration": 2031302,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 11186,
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
  "duration": 27027,
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
  "duration": 21279,
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
  "duration": 22520,
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
  "duration": 268318,
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
  "duration": 22219,
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
  "duration": 187406,
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
  "duration": 25639,
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
  "duration": 3217967,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 12006,
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
  "duration": 28140,
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
  "duration": 23548,
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
  "duration": 25934,
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
  "duration": 594735,
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
  "duration": 25742,
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
  "duration": 227727,
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
  "duration": 26580,
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
  "duration": 1319044,
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
  "duration": 30462,
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
  "duration": 20978,
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
  "duration": 20207,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_out()"
});
formatter.result({
  "duration": 15170,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 119,
      "value": "#Student Selects a Course"
    }
  ],
  "line": 120,
  "name": "Student Selects an exisiting Course after registeration starts and before term starts",
  "description": "",
  "id": "all-ums-valid-features;student-selects-an-exisiting-course-after-registeration-starts-and-before-term-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user selects the course \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "select course success",
  "keyword": "Then "
});
formatter.examples({
  "line": 128,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;student-selects-an-exisiting-course-after-registeration-starts-and-before-term-starts;",
  "rows": [
    {
      "cells": [
        "course code"
      ],
      "line": 129,
      "id": "all-ums-valid-features;student-selects-an-exisiting-course-after-registeration-starts-and-before-term-starts;;1"
    },
    {
      "cells": [
        "115001"
      ],
      "line": 130,
      "id": "all-ums-valid-features;student-selects-an-exisiting-course-after-registeration-starts-and-before-term-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 130,
  "name": "Student Selects an exisiting Course after registeration starts and before term starts",
  "description": "",
  "id": "all-ums-valid-features;student-selects-an-exisiting-course-after-registeration-starts-and-before-term-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "the university system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user logs in with studentnumber 8543748",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the user inputs 2",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user selects the course 115001",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "select course success",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_university_system_has_started()"
});
formatter.result({
  "duration": 1324253,
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
  "duration": 28038,
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
  "duration": 37228,
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
  "duration": 19860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115001",
      "offset": 28
    }
  ],
  "location": "UMSStepDefinitions.the_user_selects_the_course(String)"
});
formatter.result({
  "duration": 243804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.success(String)"
});
formatter.result({
  "duration": 24965,
  "status": "passed"
});
});