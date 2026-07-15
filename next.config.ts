import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/tri-heal on the Vercel project when this app is
// served behind dev-spirit.com/tri-heal via a cross-project rewrite. Left
// unset locally so `npm run dev` still serves at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  basePath,
};

export default nextConfig;
