import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  состОтгрузки: DS.attr('i-i-s-avtomatizaciya-zakupok5-сост-поставок'),
  состояниеОплаты: DS.attr('i-i-s-avtomatizaciya-zakupok5-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-avtomatizaciya-zakupok5-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-avtomatizaciya-zakupok5-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-avtomatizaciya-zakupok5-склады', { inverse: null, async: false }),
  тЧЗаказ: DS.hasMany('i-i-s-avtomatizaciya-zakupok5-т-ч-заказ', { inverse: 'отчеЗакупках', async: false }),
  тЧОтчет: DS.hasMany('i-i-s-avtomatizaciya-zakupok5-т-ч-отчет', { inverse: 'отчеЗакупках', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧЗаказ: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.тЧЗаказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧОтчет: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupok5-отче-закупках.validations.тЧОтчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОЗакупкахE', 'i-i-s-avtomatizaciya-zakupok5-отче-закупках', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupok5-организации', 'Организации', {
      организация: attr('Организация', { index: 4 })
    }, { index: 3 }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupok5-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 7 })
    }, { index: 6 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 8 }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupok5-склады', 'Склады', {
      склад: attr('Склад', { index: 9 })
    }, { index: 5 }),
    состОтгрузки: attr('Сост отгрузки', { index: 10 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 11 }),
    суммаДокумента: attr('Сумма документа', { index: 12 })
  });

  modelClass.defineProjection('ОтчетОЗакупкахL', 'i-i-s-avtomatizaciya-zakupok5-отче-закупках', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupok5-организации', 'Организация', {
      организация: attr('Организация', { index: 3 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupok5-склады', 'Склад', {
      склад: attr('Склад', { index: 4 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupok5-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 5 })
    }, { index: -1, hidden: true }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 6 }),
    суммаДокумента: attr('Сумма документа', { index: 7 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 8 }),
    состОтгрузки: attr('Сост отгрузки', { index: 9 })
  });
};
