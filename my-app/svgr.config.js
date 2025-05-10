// svgr.config.js
const path = require("path");

module.exports = {
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: 'prefixIds',
        params: {
          prefixIds: true,
          prefix: (_, { path: filePath }) => {
            const name = path.basename(filePath, ".svg"); // ✅ Cleanly removes .svg
            return name;
          },
        },
      },
    ],
  },
};
