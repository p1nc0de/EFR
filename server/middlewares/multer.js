const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './photos');
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname.slice(file.originalname.lastIndexOf('.'))}`); // добавляем, чтобы картинка читалась
  },
});

const upload = multer({ storage });

module.exports = upload;
