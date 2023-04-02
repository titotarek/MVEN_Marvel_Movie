<template>
	<div class="mood" @click="toggleTheme">
		<img :src="modeColors.icon" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			theme: "light",
		};
	},
	computed: {
		darkModeColors() {
			return {
				background: "#222222",
				color: "#ffffff",
				icon: require("../assets/images/night-mode.png"),
			};
		},
		lightModeColors() {
			return {
				background: "#ffffff",
				color: "#222222",

				icon: require("../assets/images/brightness.png"),
			};
		},
		modeColors() {
			return this.theme === "dark" ? this.darkModeColors : this.lightModeColors;
		},
	},
	methods: {
		toggleTheme() {
			this.theme = this.theme === "light" ? "dark" : "light";
		},
	},
	mounted() {
		const theme = localStorage.getItem("theme");
		if (theme) {
			this.theme = theme;
		}
	},
	watch: {
		theme() {
			localStorage.setItem("theme", this.theme);
			document.body.style.backgroundColor = this.modeColors.background;
			document.body.style.color = this.modeColors.color;
		},
	},
};
</script>
