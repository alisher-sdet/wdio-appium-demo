import path from "path";
import { config as baseConfig } from "./wdio.shared.conf.js";

// ====================
// Runner Configuration
// ====================
baseConfig.port = 4723;
//
// ==================
// Specify Test Files
// ==================
baseConfig.specs = ["../test/specs/android/*.js"];
//
// ============
// Capabilities
// ============
baseConfig.capabilities = [
	{
		// capabilities for local Appium web tests on an Android Emulator
		platformName: "Android",
		"appium:deviceName": "Pixel 9 Pro", // Android GoogleAPI Emulator
		"appium:platformVersion": "17.0", // 12.0
		"appium:automationName": "UiAutomator2",
		"appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
	},
];
//
// ===================
// Test Configurations
// ===================
baseConfig.services = ["appium"];
// baseConfig.appium = {
// 	command: "appium",
// 	args: {
// 		address: "localhost",
// 		port: 4723,
// 	},
// };

export const config = baseConfig;
