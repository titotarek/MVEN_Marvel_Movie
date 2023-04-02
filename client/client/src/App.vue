<template>
	<div>
		<Header />
		<router-view />
	</div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
	components: { Header },
};
</script>
<style>
@import "./assets/home.css";
@import "./assets/header.css";
@import "./assets/global-rules.css";
@import "./assets/detail-post.css";
@import "./assets/add-list.css";
@import "./assets/about.css";
@import "./assets/image-slider.css";
@import "./assets/footer.css";
@import "./assets/toggle-model.css";
</style>
