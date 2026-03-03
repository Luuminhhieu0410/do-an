import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const HOST = "localhost";
const BE_PORT = 3000;
const FE_PORT = 5173;
const proxyOptions = {
  target: `http://${HOST}:${BE_PORT}`,
  changeOrigin: false,
  secure: true,
  ws: false,
};
const proxyConfig = {
  "^/api(/|(\\?.*)?$)": proxyOptions,
};
const serverConfig = {
  host: HOST, 
  port: FE_PORT,
  hmr: true,
  proxy: proxyConfig,
  allowedHosts: true,
};
export default defineConfig({
  plugins: [react()],
  server: serverConfig,
});
