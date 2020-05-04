import Layout from "./Layout.vue";

export default {
	Layout,
	NotFound: () => "custom 404", // <- this is a Vue 3 functional component
	enhanceApp({ app, router, siteData }) {},
};
