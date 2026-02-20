const multer = require("multer");
const showAlert = require("../helpers/showAlertError");

const errorHandler = (err, req, res, next) => {
  //  errores propios de multer
  if (err instanceof multer.MulterError) {
    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        return res.send(
          showAlert(["La imagen supera el tamaño máximo permitido"]),
        );

      case "LIMIT_FILE_COUNT":
        return res.send(showAlert(["Has subido demasiados archivos"]));

      case "LIMIT_UNEXPECTED_FILE":
        return res.send(
          showAlert(["Campo de imagen incorrecto o archivo inesperado"]),
        );

      case "LIMIT_PART_COUNT":
        return res.send(showAlert(["Demasiadas partes en el formulario"]));

      case "LIMIT_FIELD_KEY":
        return res.send(showAlert(["Nombre de campo demasiado largo"]));

      case "LIMIT_FIELD_VALUE":
        return res.send(showAlert(["Valor de campo demasiado grande"]));

      case "LIMIT_FIELD_COUNT":
        return res.send(showAlert(["Demasiados campos en el formulario"]));

      default:
        return res.send(showAlert([err.message]));
    }
  }

  //  error de formato no permitido (fileFilter)
  if (err && err.message) {
    return res.send(showAlert([err.message]));
  }

  next();
};

module.exports = errorHandler;
