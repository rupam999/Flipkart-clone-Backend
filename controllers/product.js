const uploadProductImage = (req, res) => {
    const fileName = req.file.filename;
    console.log(fileName);
    res.json({
        fileName
    });
}

module.exports = {
    uploadProductImage
}