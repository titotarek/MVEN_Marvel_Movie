const Post = require("../models/posts");
const { post } = require("../routes/routes.js");
const fs = require("fs");

module.exports = class API {
	// Fetch  All the Posts
	static async fetchAlPosts(req, res) {
		try {
			const post = require("../models/posts");
			const posts = await Post.find();
			res.status(200).json(posts);
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	}

	// Fetch  post by id
	static async fetchPostById(req, res) {
		const getSinglePost = req.params.id;
		try {
			const post = await Post.findById(getSinglePost);
			res.status(200).json(post);
		} catch (error) {
			res.status(404).json({ message: err.message });
		}
	}

	// create a  post
	static async createPost(req, res) {
		const post = req.body;
		console.log(req.file);
		const imagename = req.file.filename;
		post.image = imagename;
		console.log(post.image);
		try {
			await Post.create(post);
			res.status(201).json({ message: "post has created successfully!" });
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	}

	// update a post + uploads image
	static async updatePost(req, res) {
		const updateSinglePost = req.params.id;
		let new_image = "";
		if (req.file) {
			new_image = req.file.filename;
			try {
				fs.unlinkSync("./uploads/" + req.body.old_image);
				console.log({ fs: fs } + "this line");
			} catch (err) {
				console.log(err);
			}
		} else {
			new_image = req.body.old_image;
		}
		const newPost = req.body;
		newPost.image = new_image;
		try {
			await Post.findByIdAndUpdate(updateSinglePost, newPost);
			res.status(200).json({ message: "post updated successfully!" });
		} catch (error) {
			res.status(404).json({ message: err.message });
		}
	}

	// delete a post
	static async deletePost(req, res) {
		const deletePostById = req.params.id;
		try {
			const result = await Post.findByIdAndDelete(deletePostById);
			if (result.image != "")
				try {
					fs.unlinkSync("./uploads/" + result.image);
				} catch (err) {
					console.log(err);
				}
			res.status(200).json({ message: "post deleted successfully!" });
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	}
};
