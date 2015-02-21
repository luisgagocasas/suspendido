module.exports = function (grunt) {
	grunt.initConfig({
		//Preprocesador css
        stylus: {
            compile: {
                options: {
                    compress: true,
                    linenos: false
                },
                files: [{
                    'public/css/estilos.css': 'stylus/estilos.styl',
                }]
            }
        },
		// Compresor de .js
	    uglify: {
			options: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			js: {
				files: {
					'public/js/main.min.js': 'javascript/*.js',
				}
			}
	    },
	    // Compilar Jade
		jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: {
					'public/index.html': 'jade/index.jade',
					'public/404.html': 'jade/404.jade'
				}
            }
        },
        //Observar cambios
		watch: {
			options: {
				nospawn: true,
				livereload: true
			},
			//observar de stylus
			stylesheets: {
				files: ['stylus/*.styl'],
				tasks: ['stylus']
			},
			//observar de js
			scripts: {
                files: ['javascript/*.js'],
                tasks: ['uglify']
            },
            //observar el jade
			jade: {
				files: ["jade/*.jade"],
				tasks: ["jade"]
			}
		},
	});

	//Cargo las tareas
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Run Default task(s).
	grunt.registerTask('default', ['stylus','uglify','jade','watch']);
};