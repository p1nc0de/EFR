const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    // указываем путь для мультера куда складывать фото
    cb(null, path.join(process.env.PWD, 'public', 'photos'));
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname.slice(file.originalname.lastIndexOf('.'))}`); // добавляем, чтобы картинка читалась
  },
});

const upload = multer({ storage });

module.exports = upload;
