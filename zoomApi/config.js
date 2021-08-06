const env = process.env.NODE_ENV || "production";


const config = {
  development: {
    APIKey: "",
    APISecret: "",
  },
  production: {
    APIKey: "_rf3zvUoTo-QlepQkvGpgA",
    APISecret: "QvJHRSzlz67fd7PEs7JxVBrJBFsl36y3AAL5",
  },
};

module.exports = config[env];
