import Route from '@ember/routing/route';
import normalizeCartoVector from 'cartobox-promises-utility/utils/normalize-carto-vectors';

export default Route.extend({
  model() {
    return normalizeCartoVector({ 
      id: 'bars',
      type: 'cartovector',
      'source-layers': [
        {
          "id": "bars",
          "sql": "select * from outgoinggsync0908",
        },
      ],
    });
  }
});
