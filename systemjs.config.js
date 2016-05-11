/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    '@angular2-material':         'node_modules/@angular2-material',
    'clicomponent':                'node_modules/clicomponent'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };
  
  var materialPackages = [
    'button',
    'card',
    'checkbox',
    'core',
    'icon',
    'input',
    'list',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'toolbar'
  ];

  materialPackages.forEach(function(pkg) {
    let name = '@angular2-material/' + pkg;
    packages[name] = {
      format: 'cjs',
      defaultExtension: 'js',
      main: pkg + '.js'
    };
  });

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade',
  ];
  
packages['clicomponent'] = {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'angular2.component'
};

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
