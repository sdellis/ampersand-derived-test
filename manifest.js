import {Manifest} from 'tabula-rasa'

export default Manifest.extend({

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'manifests/' + this._id
      }
    }
  }

})
