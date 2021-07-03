const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "tlipwei",
        mongodb_password: "MNIqLO9OJ9Utt4cN",
        mongodb_clustername: "cluster0",
        mongodb_database: "bovita",
      },
    };
  }
  return {
    env: {
      mongodb_username: "tlipwei",
      mongodb_password: "MNIqLO9OJ9Utt4cN",
      mongodb_clustername: "cluster0",
      mongodb_database: "bovita",
    },
  };
};

module.exports = {
  images: {
    domains: ["img.icons8.com"],
  },
};

module.exports = {
  images: {
    loader: "imgix",
    path: "https://bovitabrandimage.s3.amazonaws.com/",
    domains: ["bovitabrandimage.s3.amazonaws.com"],
  },
};
