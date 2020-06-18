// 拼接路径
const resolve = dir => require('path').join(__dirname, dir);

// 基础路径 注意发布之前要先修改这里
const publicPath = '/';

module.exports = {
	publicPath,
	lintOnSave: true,
	// 不输出 map 文件
	productionSourceMap: false,
	devServer: {
		publicPath,
		disableHostCheck: process.env.NODE_ENV === 'development', // 关闭 host check，方便使用 ngrok 之类的内网转发工具
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: "@import '~@/assets/style/public.scss';",
			},
		},
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
		} else {
			// 为开发环境修改配置...
		}
	},
	chainWebpack: config => {
		//删除懒加载模块的 prefetch preload，降低带宽压力
		config.plugins.delete('prefetch').delete('preload');
		// 解决 cli3 热更新失效
		config.resolve.symlinks(true);
		config
			// 开发环境 sourcemap 不包含列信息
			.when(process.env.NODE_ENV === 'development', config =>
				config.devtool('cheap-source-map')
			);
		// markdown
		config.module
			.rule('md')
			.test(/\.md$/)
			.use('text-loader')
			.loader('text-loader')
			.end();
		// image exclude
		const imagesRule = config.module.rule('images');
		imagesRule.test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/).end();
		// 重新设置 alias
		config.resolve.alias.set('@api', resolve('src/api'));
	},
	// i18n
	pluginOptions: {
		i18n: {
			locale: 'zh-chs',
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true,
		},
	},
};
