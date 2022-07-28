/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.pexels.com', 'firebasestorage.googleapis.com'],
	},
}

module.exports = nextConfig
