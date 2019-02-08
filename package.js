Package.describe({
  summary: "Wechat account login for meteor",
  "version": "0.2.6",
  "git": "https://github.com/95zz/meteor-accounts-wechat",
  "name": "jxtpro:accounts-wechat"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-oauth', ['client', 'server']);

  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', ['client', 'server']);
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.add_files('wechat_client.js', 'client');
  api.add_files('wechat_server.js', 'server');
  api.add_files("wechat.js");

  api.export('Wechat');

  api.add_files([
    'wechat_configuration.html',
    'wechat_configuration.js',
    'wechat_login_button.css'
  ],'client');
});
