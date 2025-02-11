import multer from "multer";

const filestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, "api-img" + Date.now() + "-" );
  },
});

let upload = multer({ storage: filestorage });

export default upload