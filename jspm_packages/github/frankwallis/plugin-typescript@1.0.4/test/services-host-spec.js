/* */ 
"format es6";
var path = require('path');
var should  = require('should');
var ts = require('typescript');

var Traceur = require('traceur');

// Traceur will compile all JS aside from node modules
Traceur.require.makeDefault(function(filename) {
   return !(/node_modules/.test(filename));
});

var Host = require('../lib/services-host').LanguageServicesHost;

describe( 'Language Service Host', function () {

   var host;

   describe( 'addFile', function () {
      beforeEach(function() {
         host = new Host();
      });

      it('defaults the config', function () {
         host = new Host();
         var options = host.getCompilationSettings();
         options.module.should.be.equal(ts.ModuleKind.CommonJS);
         options.target.should.be.equal(ts.ScriptTarget.ES5);
         options.sourceMap.should.be.true;
      });

      it('defaults the config', function () {
         var config = {
            noImplicitAny: true
         };
         host = new Host(config);
         var options = host.getCompilationSettings();
         options.module.should.be.equal(ts.ModuleKind.CommonJS);
         options.target.should.be.equal(ts.ScriptTarget.ES5);
         options.sourceMap.should.be.true;
         options.noImplicitAny.should.be.true;
      });

      it('adds files', function () {
         var filename = 'filea.ts';
         host.addFile(filename, 'sometext');
         host.getScriptSnapshot(filename).should.have.property('text', 'sometext');
         host.getScriptFileNames().should.have.property('0', 'filea.ts');
      });

      it('increments version if files are different', function () {
         var filename = 'filea.ts';
         host.addFile(filename, 'sometext');
         var version1 = host.getScriptVersion(filename);
         host.addFile(filename, 'differenttext');
         var version2 = host.getScriptVersion(filename);
         version1.should.be.equal('0');
         version2.should.be.equal('1');
      });

      it('does not increment version if they are the same', function () {
         var filename = 'filea.ts';
         host.addFile(filename, 'sometext');
         var version1 = host.getScriptVersion(filename);
         host.addFile(filename, 'sometext');
         var version2 = host.getScriptVersion(filename);
         version1.should.be.equal('0');
         version2.should.be.equal('0');
      });

   });
});
