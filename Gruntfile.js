module.exports = function(grunt)
{
	grunt.initConfig({
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! Built from Three.js r78 on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['glTF-parser.js', 'glTFLoader.js', 'glTFLoaderUtils.js', 'glTFShaders.js'],
				dest: 'three-glTFLoader.js'
			}
		},
		uglify: {
			options: {
				screwIE8: true,
				banner: '/*! Built from Three.js r78 on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'three-glTFLoader.js',
				dest: 'three-glTFLoader.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);
};
