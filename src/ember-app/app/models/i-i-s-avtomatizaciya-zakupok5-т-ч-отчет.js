import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТЧОтчетMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok5-т-ч-отчет';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧОтчетMixin, Validations, {
});

export default Model;
