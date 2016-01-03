# ampersand-derived-test
Test app to demonstrate issues with derived properties, async, and inheritance.

I have a set of collections and models that I would like to use as a base library in a variety of Ampersand-powered native web apps. I have created a [npm module](https://www.npmjs.com/package/tabula-rasa) (tabula-rasa) so that I can import these, and then further extend them in any of the apps I (or other devs) want to use the base library in. Before I pulled them out into their own library, I was able to add derived apps like "app_url", which is specific to my UI (other devs may have different routing etc).  This still works if I construct an object locally, but it doesn't seem to work for objects that are fetched from a remote endpoint.  I've created this test app to demonstrate my problem.  To see what I'm talking about, install it and bundle it with webpack:

```
npm i webpack -g 
npm i
webpack
```

Then open index.html in a browser and open the web/js console. When you open the page, you will see 'manifests/foo' output, which is the _app_url_ (a derived property) of the Manifest model object that I created directly.  So, here, inheritance works and I'm able to extend the model. 

You should also notice in the web console that the app is initialized and it loaded some data via fetch.  However, the app_url is undefined for the objects that it loaded.  You can test this by typing the following in the web console and hitting return:

```
app.me.presentations.manifests.models[0].app_url
// --> undefined
```

Any help figuring this out, or workaround suggestions is appreciated.
