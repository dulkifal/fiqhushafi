const dev = process.env.NODE_ENV !== 'production';


module.exports = {
  reactStrictMode: true,
  db:dev?'mongodb://localhost:27017/fatwaweb':'mongodb+srv://admin:dulkifal@cluster0.x15gg.mongodb.net/fatwaweb?retryWrites=true&w=majority',
  server: dev ? 'http://localhost:3000' : 'http://localhost:3000'
}
