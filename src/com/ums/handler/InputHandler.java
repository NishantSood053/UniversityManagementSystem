package com.ums.handler;

import com.ums.handler.model.Output;
import com.ums.handler.model.ServerOutput;

public class InputHandler {

public static final int WAITING = 0;
	
	public ServerOutput processInput(String input, int state) {
		String output = "";
		Output o = new Output("",0);
		ServerOutput oo = new ServerOutput(output,o.getState());
		
		return oo;
	}
}
