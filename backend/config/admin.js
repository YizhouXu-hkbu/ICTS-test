module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '45474e79cf07cf04c1a246299da121c4'),
  },
});
