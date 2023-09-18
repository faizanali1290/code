import https from "https";

export default {
  server: {
    port: 3000,
    https:{
      
    }
  },
  plugins: [
    // Add your plugins here
  ],
  build: {
    outDir: "dist",
    target: "es5",
  },
};
