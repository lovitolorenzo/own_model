const nextConfig = {
	output: "export",
	async rewrites() {
		return [
			{
				source: "/chat",
				destination: "/ModelChatPage",
			},
		];
	},
};

export default nextConfig;
