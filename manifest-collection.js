// module.exports = "It works from content.js.";
import {ManifestList} from 'tabula-rasa'

export default ManifestList.extend({

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'foo/' + this._id
      }
    }
  }

})
