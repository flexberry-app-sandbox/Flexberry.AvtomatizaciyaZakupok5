import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказПостMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupok5-заказ-пост';

import ОтчеЗакупкахModel from './i-i-s-avtomatizaciya-zakupok5-отче-закупках';

let Model = ОтчеЗакупкахModel.extend(ЗаказПостMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
