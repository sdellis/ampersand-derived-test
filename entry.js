// require("!style!css!./style.css");
import app from 'ampersand-app'
import Collection from './collections'
import ManifestList from './manifest-collection'
import Me from './me'
// require("./style.css");

var c = new Collection( { _id: 'bar' })

document.write(c.app_url)

window.app = app

app.extend({
  init () {
    this.me = new Me( {id:123, login:'shaun'} )
    this.me.fetchInitialData()
  }
})

app.init()
