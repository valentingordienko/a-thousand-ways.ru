const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getExternals() {
	return fs.readdirSync('node_modules')
		.concat(['react-dom/server'])
		.filter((mod) => mod !== '.bin')
		.reduce((externals, mod) => {
			externals[mod] = `commonjs ${mod}`;
			return externals;
		}, {});
}

module.exports = [
	{
		/*
		* Определение путей исходных файлов
		* Имена свойств для путей исходных файлов будут использованы для имен итоговых файлов
		*/
		entry: {
			babelPolyfill: 'babel-polyfill',
			index: ['./src/client/index.client.js']
		},
		/*
		* Определение имен итоговых файлов и места их хранения
		*/
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'public')
		},
		/*
		* Определение правил обработки подключаемых модулей в исходных файлах
		*/
		module: {
			rules: [
				/*
				* Правило для подключаемых файлов с расширением .js
				*/
				{
					/* Проверка файла на соответствие расширению */
					test: /\.js$/,
					exclude: /node_modules/,
					/* Файл будет подключен предварительно пройдя обработку транспилятором BABEL.JS */
					loader: 'babel-loader'
				},
				/*
				* Правило для подключаемых файлов типа .css
				*/
				{
					/* Проверка файла на соответствие расширению */
					test: /\.css$/,
					/* Файл будет подключен предварительно пройдя обработку плагином ExtractTextPlugin */
					loader: ExtractTextPlugin.extract({
						/* Лоадер который будет использован для не экспортируемых css файлов */
						fallback: 'style-loader',
						/* Лоадер который будет использован для экспортируемых css файлов */
						use: 'css-loader'
					})
				}
			]
		},
		/*
		* Инициализация и конфигурация плагинов
		*/
		plugins: [
			/* Имя итогового файла */
			new ExtractTextPlugin('index.css')
		],
		watch: true
	},
	{
		entry: {
			index: './src/client/index.server.js',
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'src/server/static-markup'),
			libraryTarget: 'umd'
		},
		target: 'node',
		externals: getExternals(),
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.css$/,
					loader: 'ignore-loader'
				}
			]
		},
		watch: true
	}
];
