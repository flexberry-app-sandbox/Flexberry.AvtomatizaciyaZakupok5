import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupok5-заказ-пост', 'Unit | Serializer | i-i-s-avtomatizaciya-zakupok5-заказ-пост', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-zakupok5-заказ-пост',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-avtomatizaciya-zakupok5-сост-оплаты',
    'transform:i-i-s-avtomatizaciya-zakupok5-сост-поставок',

    'model:i-i-s-avtomatizaciya-zakupok5-единицы-измер',
    'model:i-i-s-avtomatizaciya-zakupok5-заказ-пост',
    'model:i-i-s-avtomatizaciya-zakupok5-контрагенты',
    'model:i-i-s-avtomatizaciya-zakupok5-номенклатура',
    'model:i-i-s-avtomatizaciya-zakupok5-организации',
    'model:i-i-s-avtomatizaciya-zakupok5-отче-закупках',
    'model:i-i-s-avtomatizaciya-zakupok5-план-закупок',
    'model:i-i-s-avtomatizaciya-zakupok5-план',
    'model:i-i-s-avtomatizaciya-zakupok5-склады',
    'model:i-i-s-avtomatizaciya-zakupok5-т-ч-заказ',
    'model:i-i-s-avtomatizaciya-zakupok5-т-ч-отчет',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
