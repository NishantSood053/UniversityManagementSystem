package com.ums.tests;

import org.apache.log4j.Logger;

public class Log4JPropertiesTest {

	static Logger log = Logger.getLogger(Log4JPropertiesTest.class);

	public static void main(String[] args) {
		log.debug("This is a debug message");
		myMethod();
		log.info("This is an info message");
	}

	private static void myMethod() {
		try {
			throw new Exception("My Exception");
		} catch (Exception e) {
			log.error("This is an exception", e);
		}
	}
}
