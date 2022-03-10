module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e9d953e509257849e7915553650accac'),
  },
});
