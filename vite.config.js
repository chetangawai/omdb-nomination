import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from "vite-plugin-environment";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [react(), EnvironmentPlugin("all")],
  plugins: [react({
    fastRefresh: process.env.NODE_ENV !== 'test'
  })]
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './tests/setupTests.js',
  // }
})
