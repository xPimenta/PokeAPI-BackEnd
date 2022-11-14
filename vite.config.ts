import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
	test: {
		globals: true,
	},
	resolve: {
		alias: {
			"@config": path.resolve(__dirname, 'src/config'),
			"@controllers": path.resolve(__dirname, 'src/controllers'),
			"@factories": path.resolve(__dirname, 'src/factories'),
			"@middlewares": path.resolve(__dirname, 'src/middlewares'),
			"@repositories": path.resolve(__dirname, 'src/repositories'),
			"@routers": path.resolve(__dirname, 'src/routers'),
			"@schemas": path.resolve(__dirname, 'src/schemas'),
			"@services": path.resolve(__dirname, 'src/services'),
			"@utils": path.resolve(__dirname, 'src/utils'),
		},
	},
	server: {
		proxy: {
			// string shorthand
			'/foo': 'http://localhost:5000',
			// with options
		},
	},

})
