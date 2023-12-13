import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ЗаказПостMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok5-заказ-пост';

import ОтчеЗакупкахModel from './i-i-s-avtomatizaciya-zakupok5-отче-закупках';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok5-отче-закупках';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ОтчеЗакупкахModel.extend(ЗаказПостMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
