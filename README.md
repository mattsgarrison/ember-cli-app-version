## ember-cli-app-version-file

This is a tool for generating a file into your Ember build artifacts which contains your app version.

## Usage

Add this as a devDependency.

Then configure your Ember environment:

```
ENV.appVersion: {
  enabled: true,             // Enable/disable per environment
  showCreateDate: false      // Toggles whether a timestamp is also published
  version: '1.0.0'           // The value which is written to the file
  outputFile: '/version.txt' // The path and filename to write
}
```

## Thanks

This was heavily cribbed from [broccoli-manifest](https://github.com/racido/broccoli-manifest).

## License

MIT
