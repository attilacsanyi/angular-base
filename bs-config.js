module.exports = {
  port: 6201,
  open: false,
  server: {
    baseDir: './dist',
    middleware: {
      1: require('compression')()
    }
  }
};
