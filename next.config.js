const nextConfig = {
	publicRuntimeConfig: {
		favicon: './public/favicon.svg'
	},
	serverRuntimeConfig: {
		images: {
			domains: ['ohaomxltnhpdriahjpvz.supabase.co'],
			formats: ['image/webp']
		}
	},
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ohaomxltnhpdriahjpvz.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/itx_storage/**'
			}
		]
	}
}

module.exports = nextConfig
