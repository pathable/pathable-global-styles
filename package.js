(function() {
  Package.info = {
    name: 'pathable-global-styles',
    version: '0.0.1',
    summary: 'Pathable Global CSS styles.',
    git: '',
    documentation: 'README.md'
  };
  Package.describe(Package.info);

  Package.onUse(function(api) {
    api.versionsFrom('1.3.2.4');
    api.use('ecmascript');
    api.use('francocatena:compass@0.6.0');
    api.use('fourseven:scss');
    api.use('meta:susy');

    api.addFiles([
      './imports/host.scss',
      './imports/theme.scss'
    ]);

    api.addAssets([
      'fonts/linearicons.eot',
      'fonts/linearicons.svg',
      'fonts/linearicons.ttf',
      'fonts/linearicons.woff'
    ], 'client')
  });
})();
