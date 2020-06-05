import Layout from "./Layout.vue";

// import Package from "../package.json";

export default {
	Layout,
	NotFound: () => "custom 404", // <- this is a Vue 3 functional component
	enhanceApp({ app, router, siteData }) {
		// app.package = Package;
		console.log(app);
	},
};
