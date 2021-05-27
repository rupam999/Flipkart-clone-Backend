const multer = require('multer');
const path = require('path');
const Product = require('../controllers/product'); 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: (req, file, cb) => {
        const fileName = `${file.fieldname}-${Date.now().toString()}-${file.originalname}`;
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })

module.exports = (router) => {
    router.post('/product/add/image', upload.single('productImage'), Product.uploadProductImage);
    router.post('/product/add/details', Product.addProductDetails);
}