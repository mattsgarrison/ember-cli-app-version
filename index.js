var path = require('path');
var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var funnel = require('broccoli-funnel');

var appVersion = require('./lib/app-version');

module.exports = {
  name: 'ember-cli-app-version-file',

  isDevelopingAddon: function() {
    return true;
  },

  config: function (env, baseConfig) {
    var options = baseConfig.appVersion || {};

    var defaultOptions = {
      enabled: true,
      version: '0.0.0',
      showCreateDate: true,
      outputFile: '/current_version.txt'
    }

    for (var option in defaultOptions) {
      if (!options.hasOwnProperty(option)) {
        options[option] = defaultOptions[option];
      }
    }

    this.appVersionOptions = options;
  },

  postprocessTree: function (type, tree) {
    var options = this.appVersionOptions;

    if (options.enabled) {
      appVersionTree = funnel(tree, {});
      return mergeTrees([tree, appVersion(appVersionTree, options)], {overwrite: true});
    }

    return tree;
  },

  treeFor: function() {}
}
