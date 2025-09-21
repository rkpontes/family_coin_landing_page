/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Só usar output: "export" em produção
  ...(process.env.NODE_ENV === 'production' && { output: "export" }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
