import { Serializer as ЗаказПостSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-zakupok5-заказ-пост';
import ОтчеЗакупкахSerializer from './i-i-s-avtomatizaciya-zakupok5-отче-закупках';

export default ОтчеЗакупкахSerializer.extend(ЗаказПостSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
