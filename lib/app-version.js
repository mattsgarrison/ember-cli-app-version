var fs = require("fs");
var path = require('path');
var brocWriter = require("broccoli-writer");

var AppVersion = function AppVersion(inTree, options) {
  if (!(this instanceof AppVersion)) {
    return new AppVersion(inTree, options);
  }
  this.inTree = inTree;
  options = options || {};
  this.outputFile = options.outputFile || "/current_version.txt";
  this.version = options.version || '0.0.0';
  this.showCreateDate = options.showCreateDate;
};

AppVersion.prototype = Object.create(brocWriter.prototype);
AppVersion.prototype.constructor = AppVersion;

AppVersion.prototype.write = function(readTree, destDir) {
  var version = this.version;
  var showCreateDate = this.showCreateDate;
  var outputFile = this.outputFile;
  return readTree(this.inTree).then(function (srcDir) {
    var lines = [];

    lines.push('' + version + '');

    if (showCreateDate) {
      lines.push('', "# created " + (new Date()).toISOString());
    }

    fs.writeFileSync(path.join(destDir, outputFile), lines.join("\n"));
  });
};

AppVersion.prototype.addExternalFile = function(file) {
  this.externalFiles.push(file);
}

module.exports = AppVersion;
