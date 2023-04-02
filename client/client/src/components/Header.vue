<template>
	<div class="header">
		<div class="container header-link">
			<router-link
				:class="{
					active: currentRoute == '/' || currentRoute.includes('/post'),
				}"
				to="/"
				>Home</router-link
			>
			<router-link :class="{ active: currentRoute == '/about' }" to="/about"
				>About</router-link
			>
		</div>
		<DarkModeToggle />
	</div>
</template>

<script>
import DarkModeToggle from "./DarkModeToggle.vue";
export default {
	components: { DarkModeToggle },
	data() {
		return {
			currentRoute: "/",
		};
	},

	watch: {
		$route(to) {
            // console.log(this.currentRoute)
			this.currentRoute = to.path;
		},
	},
};
</script>

<style></style>
