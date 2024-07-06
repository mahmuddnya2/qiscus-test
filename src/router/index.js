import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GroupView from "../views/GroupView.vue";
import PrivateView from "../views/PrivateView.vue";

const routes = [
	{
		path: "/",
		component: HomeView,
	},
	{
		path: "/group",
		component: GroupView,
	},
	{
		path: "/private",
		component: PrivateView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
