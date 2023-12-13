import {
  defineNamespace,
  defineProjections,
  Model as ОтчеЗакупкахMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok5-отче-закупках';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчеЗакупкахMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
