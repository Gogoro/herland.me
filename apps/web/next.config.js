const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
