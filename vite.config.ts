import { defineConfig } from "vite";
import  { nodePolyfills } from "vite-plugin-node-polyfills";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [nodePolyfills(), dts({
    tsconfigPath: "./tsconfig.json", // Ensure this points to your tsconfig.json
    outDir: "./dist", // Output directory for declaration files
    entryRoot: "./src", // Base directory for entry files
    insertTypesEntry: true, // Generate types entry in package.json
    rollupTypes: true, // Bundle type declarations into a single file
  })],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      fs: "vite-plugin-node-polyfills/fs",
      path: "vite-plugin-node-polyfills/path",
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "element_interfaces",
      fileName: (format) => `element_interfaces.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [], // Specify external dependencies if any
    },
  },
});
