<template>
	<div class="detail-page">
		<div class="container">
			<div class="back-home">
				<!-- <img src="../assets/image/arrow.png" alt=""> -->
			</div>
			<div class="detail-page-card" v-if="post">
				<div class="card-body-image">
					<img :src="`${imgUrl}/${post.image}`" alt="pic" />
				</div>
				<div class="card-body">
					<div class="card-body-content">
						<h1>{{ post.title }}</h1>
						<p>{{ post.contact }}</p>
						<p>{{ post.category }}</p>
					</div>
					<div class="detail-page-card-btn">
						<button @click="deletePost">delete</button>
						<router-link :to="{ name: 'EditPost', params: { id: post._id } }">
							<button>edit</button>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import API from "../api.js";
export default {
	name: "DetailPost",
	data() {
		return {
			post: null,
			imgUrl: "http://localhost:1000",
		};
	},
	async created() {
		const id = this.$route.params.id;
		const postDetails = await API.getPostById(id);
		console.log(postDetails);
		this.post = postDetails;
	},

	methods: {
		async deletePost() {
			const id = this.$route.params.id;
			const deleteRes = await API.deletePost(id);
			this.post = deleteRes;
			this.redirectRouter();
		},

		redirectRouter() {
			this.$router.push({ name: "Home" });
		},
	},
};
</script>

<style></style>
