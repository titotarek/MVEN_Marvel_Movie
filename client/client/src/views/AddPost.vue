<template>
	<div class="add-list">
		<div class="container">
			<h1>create new list post</h1>
			<div class="list-form">
				<form @submit.prevent="submitUserPost">
					<label for="">title</label>
					<input
						type="text"
						placeholder="write your title"
						v-model="post.title"
					/>

					<label for="">category</label>
					<input type="text" placeholder="category" v-model="post.category" />

					<label for="">contact</label>
					<input type="text" placeholder="contact" v-model="post.contact" />

					<input type="file" @change="selectFile" />
					<button class="list-form-btn">Add Post</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import API from "../api.js";
export default {
	name: "AddPost",
	data() {
		return {
			post: {
				title: "",
				category: "",
				contact: "",
				image: "",
			},
			image: "",
		};
	},

	methods: {
		selectFile(e) {
			console.log(e.target.files[0]);

			this.image = e.target.files[0];
		},

		async submitUserPost() {
			// const id = this.$route.params.id
			const formData = new FormData();
			formData.append("image", this.image);
			formData.append("title", this.post.title);
			formData.append("category", this.post.category);
			formData.append("contact", this.post.contact);
			// console.log(formData)
			//    if(formData){
			const response = await API.addPost(formData);

			this.$router.push({
				name: "Home",
				params: { message: response.message },
			});
		},
	},
};
</script>
