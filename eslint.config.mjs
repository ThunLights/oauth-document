import prettier from "eslint-config-prettier";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { includeIgnoreFile } from "@eslint/compat";
import { defineConfig } from "eslint/config";
import { fileURLToPath, URL } from "node:url";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default defineConfig([
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...tseslint.configs.recommended,
	prettier,
	{
		ignores: ["eslint.config.js"]
	}
]);
