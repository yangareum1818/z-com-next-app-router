const path = require("path");
/** @type {import('next').NextConfig} */

const nextConfig = {
  // pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
