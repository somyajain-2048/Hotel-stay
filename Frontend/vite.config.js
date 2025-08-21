// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });
// //

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["@mapbox/node-pre-gyp", "aws-sdk", "mock-aws-s3", "nock"],
  },
  build: {
    commonjsOptions: {
      exclude: ["@mapbox/node-pre-gyp", "aws-sdk", "mock-aws-s3", "nock"],
    },
  },
});
