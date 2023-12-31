const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  publicRuntimeConfig: {
    favicon: "./public/favicon.svg",
  },
  serverRuntimeConfig: {
    images: {
      domains: ["ohaomxltnhpdriahjpvz.supabase.co"],
      formats: ["image/webp"],
    },
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ohaomxltnhpdriahjpvz.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/itx_storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
