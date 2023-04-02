const express = require("express");
const router = express.Router();
const multer = require("multer");
const API = require("../controllers/api");



// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 	  cb(null, '/tmp/my-uploads')
// 	},
// 	filename: function (req, file, cb) {
// 	  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
// 	  cb(null, file.fieldname + '-' + uniqueSuffix)
// 	}
//       })
      
//       const upload = multer({ storage: storage })

//  middleware
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
	},
});

let upload = multer({
	storage: storage,
}).single("image");

router.get("/", API.fetchAlPosts);
router.get("/:id", API.fetchPostById);
router.post("/", upload, API.createPost);
router.patch("/:id", upload, API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;
