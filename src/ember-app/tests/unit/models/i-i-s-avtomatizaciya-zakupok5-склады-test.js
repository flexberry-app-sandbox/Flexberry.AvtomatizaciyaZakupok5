import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupok5-склады', 'Unit | Model | i-i-s-avtomatizaciya-zakupok5-склады', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
