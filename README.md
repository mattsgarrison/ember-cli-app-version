## ember-cli-app-version-file

This is a tool for generating a file into your Ember build artifacts which contains your app version.

The was motivated by wanting to check the version of a build artifact without needing complex parsing of the minified JS or the index.html file.

## Usage

Add this as a devDependency:

`yarn add ember-cli-app-version-file -D`

or

`npm install ember-cli-app-version-file --save-dev`

Then configure your Ember environment:

```
ENV.appVersion: {
  enabled: true,             // Enable/disable per environment
  showCreateDate: false      // Toggles whether a timestamp is also published
  version: '1.0.0'           // The value which is written to the file
  outputFile: '/version.txt' // The path and filename to write
}
```

After running `ember build`, you should now have a `version.txt` in your `./dist` directory containing the text `1.0.0`.

Enabling `showCreateDate` will also include a timestamp for when the build was created.

## Thanks

This was heavily cribbed from [broccoli-manifest](https://github.com/racido/broccoli-manifest).

## License

MIT
