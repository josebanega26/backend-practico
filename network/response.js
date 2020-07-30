const success = (req, res, message = '', status = 200) => {
  res.status(status).json({
    error: false,
    status,
    message,
  });
};

const error = (req, res, message = 'Intersal Server Error', status = 500) => {
  res.status(status).json({
    error: true,
    status,
    message,
  });
};

module.exports = {
  success: success,
  error,
};
