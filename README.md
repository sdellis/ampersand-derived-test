# Tabula Rasa demo app
This is a simple test app to demonstrate how to use (and extend) tabula-rasa in a web app. 

Install it and bundle it with webpack:

```
npm i webpack -g 
npm i
webpack
```

Then open index.html in a browser and open the web/js console. When you open the page, you will see 'manifests/foo' output to the screen. This is the _app_url_ (a derived property) of the Manifest model object extended from tabula-rasa's Manifest model, which does not have an app_url property.  

You should also notice in the web console that the app is initialized and it loaded some data via fetch from the [IIIF fixtures collection](http://iiif.io/api/presentation/2.0/example/fixtures/collection.json).  You can play with the manifest by typing in the web console. Examples:

```
app.me.presentations.manifests.models[0].app_url
app.me.presentations.manifests.models[0]['@id']
app.me.presentations.manifests.models[0].label[0]['@value']
```
