module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  port: 5433,
  password: 'docker',
  database: 'meetapp',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
