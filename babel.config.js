module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
		"@babel/preset-typescript",
	],
	plugins: [
		[
			"module-resolver",
			{
				alias: {
					"@config": "./src/config",
					"@controllers": "./src/controllers",
					"factories": "./src/factories",
					"@routes": "./src/routes",
					"@middlewares": "./src/middlewares",
					"@repositories": "./src/repositories",
					"@services": "./src/services",
					"@utils": "./src/utils",
					"@schemas": "./src/schemas",
				},
			},
		],
	],
	ignore: ["**/*.spec.ts"],
}