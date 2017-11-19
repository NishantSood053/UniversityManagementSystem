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
  "name": "the univeristy system has started",
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 131746293,
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
  "duration": 1830129,
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
  "duration": 59782,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_not_logged_in()"
});
formatter.result({
  "duration": 1132188,
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 43347,
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
  "duration": 56705,
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
  "duration": 37454,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_not_logged_in()"
});
formatter.result({
  "duration": 19721,
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
  "name": "the univeristy system has started",
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 26469,
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
  "duration": 45798,
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
  "duration": 127138,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 22104,
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 35190,
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
  "duration": 63047,
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
  "duration": 58121,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 21311,
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
  "name": "Admin Creates a redundant course before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-redundant-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the univeristy system has started",
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
  "name": "the course unsuccess",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-redundant-course-before-registration-starts;",
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
      "id": "all-ums-invalid-features;admin-creates-a-redundant-course-before-registration-starts;;1"
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
      "id": "all-ums-invalid-features;admin-creates-a-redundant-course-before-registration-starts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Admin Creates a redundant course before registration starts",
  "description": "",
  "id": "all-ums-invalid-features;admin-creates-a-redundant-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the univeristy system has started",
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
  "name": "the course unsuccess",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 31091,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 270600,
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
  "duration": 67943,
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
  "duration": 39993,
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
  "duration": 42875,
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
  "duration": 2243090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.unsuccess(String)"
});
formatter.result({
  "duration": 55612,
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
  "name": "the univeristy system has started",
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
  "name": "the course unsuccess",
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
  "name": "the univeristy system has started",
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
  "name": "the course unsuccess",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 28119,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 19082,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_Registration_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 15665,
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
  "duration": 61117,
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
  "duration": 35917,
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
  "duration": 44502,
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
  "duration": 560925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the course",
      "offset": 0
    }
  ],
  "location": "UMSStepDefinitions.unsuccess(String)"
});
formatter.result({
  "duration": 30821,
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
  "name": "the univeristy system has started",
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 43593,
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
  "duration": 57813,
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
  "duration": 54760,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_in()"
});
formatter.result({
  "duration": 26165,
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 29110,
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
  "duration": 39046,
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
  "duration": 38739,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_in()"
});
formatter.result({
  "duration": 14366,
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
  "name": "the univeristy system has started",
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 39918,
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
  "duration": 61153,
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
  "duration": 73827,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 18109,
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 27269,
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
  "duration": 39669,
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
  "duration": 60485,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 14913,
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
  "name": "the univeristy system has started",
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
  "name": "the univeristy system has started",
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
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 31092,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.wait_for_System_Time_Start_Event_to_Fire()"
});
formatter.result({
  "duration": 13336,
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
  "duration": 40476,
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
  "duration": 55099,
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
  "duration": 49061,
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
  "duration": 914300,
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
  "duration": 76896,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 42,
      "value": "#LOGOUT"
    }
  ],
  "line": 44,
  "name": "Admin Logouts",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the univeristy system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user inputs \u003c1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user logs in with password \u003cadmin\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the user inputs \u003cinput\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the admin is logged out",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts;",
  "rows": [
    {
      "cells": [
        "input"
      ],
      "line": 52,
      "id": "all-ums-valid-features;admin-logouts;;1"
    },
    {
      "cells": [
        "9"
      ],
      "line": 53,
      "id": "all-ums-valid-features;admin-logouts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Admin Logouts",
  "description": "",
  "id": "all-ums-valid-features;admin-logouts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the univeristy system has started",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user inputs \u003c1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user logs in with password \u003cadmin\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the user inputs 9",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the admin is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "UMSStepDefinitions.the_univeristy_system_has_started()"
});
formatter.result({
  "duration": 26237,
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
  "duration": 39586,
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
  "duration": 31718,
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
  "duration": 279594,
  "status": "passed"
});
formatter.match({
  "location": "UMSStepDefinitions.the_admin_is_logged_out()"
});
formatter.result({
  "duration": 25497,
  "status": "passed"
});
});