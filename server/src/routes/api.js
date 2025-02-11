import express  from "express";
import * as UserController from '../controllers/UserController.js'
import * as ProductController from '../controllers/ProductController.js'
import * as ContactController from "../controllers/ContactController.js";
import * as FileUploadController from "../controllers/FileUploadController.js";
import * as TeamController from "../controllers/TeamController.js";
import * as BlogController from "../controllers/BlogController.js";
import * as ServiceController from "../controllers/ServiceController.js";
import upload from "../middleware/FileUploads.js";
const router = express.Router()

//user
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);




//product
router.post("/createproduct", ProductController.createproduct);
router.get("/allproduct", ProductController.getallproduct);
router.delete("/deleteProduct/:id", ProductController.deleteProduct);



//fileupload
router.post(
  "/file-upload",
  upload.array("file", 20),
  FileUploadController.fileupload
);


//contact
router.post("/contact", ContactController.contact);


//team

router.post("/createteam", TeamController.createteam);
router.get("/readteam", TeamController.readteam);
router.put("/updateteam/:id", TeamController.updateteam);
router.delete("/deleteteam/:id", TeamController.deleteteam);





//blog

router.post("/createblog", BlogController.createblog);
router.get("/readblog", BlogController.readblog);
router.put("/updateblog/:id", BlogController.updateblog);
router.delete("/deleteblog/:id", BlogController.deleteblog);


//service

router.post("/create_service", ServiceController.create_service);
router.get("/read_service", ServiceController.read_service);
router.put("/update_service/:id", ServiceController.update_service);
router.delete("/delete_service/:id", ServiceController.delete_service);


export default router