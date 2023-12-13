import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчеЗакупкахMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok5-отче-закупках';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчеЗакупкахMixin, Validations, {
});

defineProjections(Model);

export default Model;
