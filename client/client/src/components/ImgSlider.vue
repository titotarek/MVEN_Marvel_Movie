<template>
	<div class="image-slider">
		<div
			class="slider-container"
			:style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }"
		>
			<div class="slider-item" v-for="(image, index) in images" :key="index">
				<img :src="image.url" />
			</div>
		</div>
		<div class="slider-controls">
			<div class="slider-controls-icon">
				<button class="prev" @click="prevImage" :disabled="isFirstImage">
					<img v-if="!isFirstImage" src="../assets/images/next.png" alt="" />
				</button>
				<button class="next" @click="nextImage" :disabled="isLastImage">
					<img v-if="!isLastImage" src="../assets/images/next.png" alt="" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			images: [
				{ url: require("../assets/images/captain-america.webp") },
				{ url: require("../assets/images/captain_marvel_poster.png") },
				{ url: require("../assets/images/hulk.jpeg") },
				{ url: require("../assets/images/scene-Iron-Man.webp") },
				{ url: require("../assets/images/spider-man.webp") },
			],
		};
	},
	computed: {
		isFirstImage() {
			return this.currentIndex === 0;
		},
		isLastImage() {
			return this.currentIndex === this.images.length - 1;
		},
	},
	methods: {
		prevImage() {
			this.currentIndex--;
		},
		nextImage() {
			this.currentIndex++;
		},
	},
};
</script>
