package com.ums.handler;

import com.ums.handler.model.Output;
import com.ums.handler.model.ServerOutput;

public class InputHandler {

	public static final int WAITING = 0;
	public static final int FINISHWAITING=1;
	public static final int ADMIN = 2;
	public static final int USER = 3;
	public static final int CREATEUSER=4;
	public static final int CREATETITLE=5;
	public static final int CREATEITEM=6;
	public static final int DELETEUSER=7;
	public static final int DELETETITLE=8;
	public static final int DELETEITEM=9;
	public static final int BORROW=10;
	public static final int RENEW=11;
	public static final int RETURN=12;
	public static final int PAYFINE=13;
	public static final int CLERKLOGIN=14;
	public static final int USERLOGIN=15;
	
	public ServerOutput processInput(String input, int state) {
		String output = "";
		Output o = new Output("",0);
		ServerOutput oo = new ServerOutput(output,o.getState());
		
		return oo;
	}
}
