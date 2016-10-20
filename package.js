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
      'fonts/Linearicons/linearicons.eot',
      'fonts/Linearicons/linearicons.svg',
      'fonts/Linearicons/linearicons.ttf',
      'fonts/Linearicons/linearicons.woff',
      'fonts/BreeSerif/BreeSerif-Regular.eot',
      'fonts/BreeSerif/BreeSerif-Regular.ttf',
      'fonts/BreeSerif/BreeSerif-Regular.woff',
      'fonts/IndieFlower/IndieFlower.eot',
      'fonts/IndieFlower/IndieFlower.ttf',
      'fonts/IndieFlower/IndieFlower.woff',
      'fonts/Lobster/Lobster-Regular.eot',
      'fonts/Lobster/Lobster-Regular.ttf',
      'fonts/Lobster/Lobster-Regular.woff',
      'fonts/Montserrat/Montserrat-Regular.eot',
      'fonts/Montserrat/Montserrat-Regular.ttf',
      'fonts/Montserrat/Montserrat-Regular.woff',
      'fonts/Montserrat/Montserrat-Bold.eot',
      'fonts/Montserrat/Montserrat-Bold.ttf',
      'fonts/Montserrat/Montserrat-Bold.woff',
      'fonts/OpenSans/OpenSans-Bold.eot',
      'fonts/OpenSans/OpenSans-Bold.ttf',
      'fonts/OpenSans/OpenSans-Bold.woff',
      'fonts/OpenSans/OpenSans-Light.eot',
      'fonts/OpenSans/OpenSans-Light.ttf',
      'fonts/OpenSans/OpenSans-Light.woff',
      'fonts/OpenSans/OpenSans-Semibold.eot',
      'fonts/OpenSans/OpenSans-Semibold.ttf',
      'fonts/OpenSans/OpenSans-Semibold.woff',
      'fonts/OpenSans/OpenSans.eot',
      'fonts/OpenSans/OpenSans.ttf',
      'fonts/OpenSans/OpenSans.woff',
      'fonts/Oswald/Oswald-Bold.eot',
      'fonts/Oswald/Oswald-Bold.ttf',
      'fonts/Oswald/Oswald-Bold.woff',
      'fonts/Oswald/Oswald-Light.eot',
      'fonts/Oswald/Oswald-Light.ttf',
      'fonts/Oswald/Oswald-Light.woff',
      'fonts/Oswald/Oswald-Regular.eot',
      'fonts/Oswald/Oswald-Regular.ttf',
      'fonts/Oswald/Oswald-Regular.woff',
      'fonts/PlayfairDisplay/PlayfairDisplay-Bold.eot',
      'fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf',
      'fonts/PlayfairDisplay/PlayfairDisplay-Bold.woff',
      'fonts/PlayfairDisplay/PlayfairDisplay-Regular.eot',
      'fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf',
      'fonts/PlayfairDisplay/PlayfairDisplay-Regular.woff',
      'fonts/PTSans/PTSans-Bold.eot',
      'fonts/PTSans/PTSans-Bold.ttf',
      'fonts/PTSans/PTSans-Bold.woff',
      'fonts/PTSans/PTSans-Regular.eot',
      'fonts/PTSans/PTSans-Regular.ttf',
      'fonts/PTSans/PTSans-Regular.woff',
      'fonts/PTSerif/PTSerif-Bold.eot',
      'fonts/PTSerif/PTSerif-Bold.ttf',
      'fonts/PTSerif/PTSerif-Bold.woff',
      'fonts/PTSerif/PTSerif-Regular.eot',
      'fonts/PTSerif/PTSerif-Regular.ttf',
      'fonts/PTSerif/PTSerif-Regular.woff',
      'fonts/Roboto/Roboto-Bold.eot',
      'fonts/Roboto/Roboto-Bold.ttf',
      'fonts/Roboto/Roboto-Bold.woff',
      'fonts/Roboto/Roboto-Light.eot',
      'fonts/Roboto/Roboto-Light.ttf',
      'fonts/Roboto/Roboto-Light.woff',
      'fonts/Roboto/Roboto-Medium.eot',
      'fonts/Roboto/Roboto-Medium.ttf',
      'fonts/Roboto/Roboto-Medium.woff',
      'fonts/Roboto/Roboto-Regular.eot',
      'fonts/Roboto/Roboto-Regular.ttf',
      'fonts/Roboto/Roboto-Regular.woff',
      'fonts/RobotoSlab/RobotoSlab-Bold.eot',
      'fonts/RobotoSlab/RobotoSlab-Bold.ttf',
      'fonts/RobotoSlab/RobotoSlab-Bold.woff',
      'fonts/RobotoSlab/RobotoSlab-Light.eot',
      'fonts/RobotoSlab/RobotoSlab-Light.ttf',
      'fonts/RobotoSlab/RobotoSlab-Light.woff',
      'fonts/RobotoSlab/RobotoSlab-Regular.eot',
      'fonts/RobotoSlab/RobotoSlab-Regular.ttf',
      'fonts/RobotoSlab/RobotoSlab-Regular.woff',
      'fonts/TitilliumWeb/TitilliumWeb-Bold.eot',
      'fonts/TitilliumWeb/TitilliumWeb-Bold.ttf',
      'fonts/TitilliumWeb/TitilliumWeb-Bold.woff',
      'fonts/TitilliumWeb/TitilliumWeb-Light.eot',
      'fonts/TitilliumWeb/TitilliumWeb-Light.ttf',
      'fonts/TitilliumWeb/TitilliumWeb-Light.woff',
      'fonts/TitilliumWeb/TitilliumWeb-Regular.eot',
      'fonts/TitilliumWeb/TitilliumWeb-Regular.ttf',
      'fonts/TitilliumWeb/TitilliumWeb-Regular.woff',
      'fonts/TitilliumWeb/TitilliumWeb-SemiBold.eot',
      'fonts/TitilliumWeb/TitilliumWeb-SemiBold.ttf',
      'fonts/TitilliumWeb/TitilliumWeb-SemiBold.woff'
    ], 'client')
  });
})();
