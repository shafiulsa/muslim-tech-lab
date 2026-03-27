// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'api.dicebear.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'assets.codepen.io',
//       },
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // Dicebear SVG ফরম্যাটে ইমেজ দেয়, তাই এটি True করতে হবে
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**', // সব সাব-পাথ এলাউ করার জন্য
      },
      {
        protocol: 'https',
        hostname: 'assets.codepen.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // আপনার ক্লাউডিনারি ইমেজগুলোর জন্য এটিও যোগ করে রাখা ভালো
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;