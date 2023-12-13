import { Serializer as ТЧОтчетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-zakupok5-т-ч-отчет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧОтчетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
