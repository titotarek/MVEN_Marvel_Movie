<template>
	<div class="home">
		<ImgSlider />
		<CreateNew />
		<div class="container">
			<p v-if="this.$route.params.message">{{ this.$route.params.message }}</p>
			<div class="cards">
				<div class="card" v-for="post in posts" :key="post._id">
					<ul>
						<li><img :src="`${imgUrl}/${post.image}`" /></li>
					</ul>
					<ul class="card-body">
						<li>
							<h1>{{ post.title }}</h1>
						</li>
						<li>
							<p>{{ post.contact }}</p>
						</li>
						<li>
							<p>{{ post.category.substring(0, 100) }}</p>
						</li>
						<router-link
							class="btn"
							:to="{ name: 'DetailPost', params: { id: post._id } }"
							>Details</router-link
						>
					</ul>
				</div>
			</div>
		</div>
		<!-- <Translate /> -->
		<Footer />
	</div>
</template>

<script>
import API from "../api.js";
import CreateNew from "../components/CreateNew.vue";
import Footer from "../components/Footer.vue";
import ImgSlider from "../components/ImgSlider.vue";
// import Translate from "../components/Translate.vue";
// import DarkModeToggle from '../components/DarkModeToggle.vue';

export default {
	name: "Home",
	components: { ImgSlider, CreateNew, Footer },
	data() {
		return {
			posts: null,
			imgUrl: "http://localhost:1000",
		};
	},

	async created() {
		this.posts = await API.getAllPost();
	},
};
</script>
