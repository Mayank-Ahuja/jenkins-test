"use strict";
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    war: {
      test: {
        options: {
          war_dist_folder: 'warfile',
          war_name: 'jenkins-test' /* The name fo the WAR file (.war will be the extension) */
        },
        files: [{
          expand: true,
          cwd: 'dist/execute-mdm',
          src: ['**'],
          dest: ''
        }]
      },
    },
    clean: {
      build: ['warfile']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-war');
  grunt.registerTask('default', ['clean', 'war:test']);
};
