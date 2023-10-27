import { defineConfig } from "tsup";

export default defineConfig({
	entry: ['src/index.tsx'],
  minify: true,
  format: ["esm", "cjs"],
  dts: true,
});
