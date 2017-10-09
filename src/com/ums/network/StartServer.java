package com.ums.network;

import com.ums.utilities.Config;

public class StartServer {
	public static void main(String[] argv) {
		System.out.println("Starting server ...");
		new UMSServer(Config.DEFAULT_PORT);
	}
}
