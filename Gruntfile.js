module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');

	var DIR_BOWER = './bower_components/',
		DIR_CSS = 'assets/css/',
		DIR_JS = 'assets/js/',
		DIR_IMG = 'assets/img/';

	grunt.initConfig({
		bower: grunt.file.readJSON('bower.json'),
		'sass': {
			dist: {
				files: {
					"assets/css/style.css": DIR_BOWER + "sassquatch2/sass/sassquatch.scss"
				}
			}
		},
		'clean': {
			css: [DIR_CSS]
		}
	});

	grunt.registerTask('default', ['clean', 'sass']);
};
