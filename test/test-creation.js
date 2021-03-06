/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('Assemble generator', function () {

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('assemble:app', [
        '../../app'
      ]);

      done();
    }.bind(this));
  });

  it('creates expected files with all option' , function (done) {
    var expected = [
      // add files you expect to exist here.
      'AUTHORS',
      'CHANGELOG',
      'Gruntfile.js',
      'LICENSE-MIT',
      'README.md',
      'package.json',
      'dist/assets/assemble.css',
      'dist/assets/github.css',
      'dist/assets/highlight.js',
      '.gitignore',
      '.editorconfig',
      'src/content/markdown.md',
      'src/data/site.yml',
      'src/templates/layouts/default.hbs',
      'src/templates/pages/blog.hbs',
      'src/templates/pages/index.hbs',
      'src/templates/partials/navbar-fixed-top.hbs'
    ];

    helpers.mockPrompt(this.app, {
      projectName: 'assemble',
      githubUser: 'assemble'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

});
