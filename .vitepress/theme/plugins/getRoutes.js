// // import fs from "fs";
// // import path from "path";

// // import { promises as fs } from "fs";
// // import path from "path";

// const fs = require("fs").promises;
// const path = require("path");
// // interface routesType {
// // 	name: string;
// // 	path: string;
// // }

// export const getRoutes = async (dir = __dirname) => {
// 	if (process.browser) return;
// 	if (dir !== __dirname) dir = path.join(__dirname, dir);

// 	// const routes: routesType[] = [];
// 	const routes = [];
// 	await fs.readdir(dir, (err, files) => {
// 		if (err) {
// 			console.log("Error getting directory information.", err);
// 			return;
// 		}

// 		files.forEach(function (file) {
// 			fs.stat(dir + `/${file}`, function (err, stats) {
// 				if (err) {
// 					console.log("Error getting file stats information.", err);
// 					return;
// 				}
// 				routes.push(stats);
// 				console.log(stats);
// 			});
// 		});
// 	});
// 	return routes;
// };
