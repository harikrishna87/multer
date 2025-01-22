const express = require("express");
const app = express();
const multer = require("multer");

const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname+"/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage : store});

app.post("/product", upload.single("file"), (req, res) => {
    const {name, email} = req.body
    const file = req.file;
    console.log(file)
})


const port = 3008;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})