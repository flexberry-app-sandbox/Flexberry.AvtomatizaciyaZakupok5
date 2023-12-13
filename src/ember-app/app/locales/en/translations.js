import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvtomatizaciya_zakupok5ЕдиницыИзмерLForm from './forms/i-i-s-avtomatizaciya-zakupok5-единицы-измер-l';
import IISAvtomatizaciya_zakupok5ЗаказПостLForm from './forms/i-i-s-avtomatizaciya-zakupok5-заказ-пост-l';
import IISAvtomatizaciya_zakupok5КонтрагентыLForm from './forms/i-i-s-avtomatizaciya-zakupok5-контрагенты-l';
import IISAvtomatizaciya_zakupok5НоменклатураLForm from './forms/i-i-s-avtomatizaciya-zakupok5-номенклатура-l';
import IISAvtomatizaciya_zakupok5ОрганизацииLForm from './forms/i-i-s-avtomatizaciya-zakupok5-организации-l';
import IISAvtomatizaciya_zakupok5ОтчетОЗакупкахLForm from './forms/i-i-s-avtomatizaciya-zakupok5-отчет-о-закупках-l';
import IISAvtomatizaciya_zakupok5ПланЗакупокLForm from './forms/i-i-s-avtomatizaciya-zakupok5-план-закупок-l';
import IISAvtomatizaciya_zakupok5СкладыLForm from './forms/i-i-s-avtomatizaciya-zakupok5-склады-l';
import IISAvtomatizaciya_zakupok5ЕдиницыИзмерEForm from './forms/i-i-s-avtomatizaciya-zakupok5-единицы-измер-e';
import IISAvtomatizaciya_zakupok5ЗаказПостEForm from './forms/i-i-s-avtomatizaciya-zakupok5-заказ-пост-e';
import IISAvtomatizaciya_zakupok5КонтрагентыEForm from './forms/i-i-s-avtomatizaciya-zakupok5-контрагенты-e';
import IISAvtomatizaciya_zakupok5НоменклатураEForm from './forms/i-i-s-avtomatizaciya-zakupok5-номенклатура-e';
import IISAvtomatizaciya_zakupok5ОрганизацииEForm from './forms/i-i-s-avtomatizaciya-zakupok5-организации-e';
import IISAvtomatizaciya_zakupok5ОтчетОЗакупкахEForm from './forms/i-i-s-avtomatizaciya-zakupok5-отчет-о-закупках-e';
import IISAvtomatizaciya_zakupok5ПланЗакупокEForm from './forms/i-i-s-avtomatizaciya-zakupok5-план-закупок-e';
import IISAvtomatizaciya_zakupok5СкладыEForm from './forms/i-i-s-avtomatizaciya-zakupok5-склады-e';
import IISAvtomatizaciya_zakupok5ЕдиницыИзмерModel from './models/i-i-s-avtomatizaciya-zakupok5-единицы-измер';
import IISAvtomatizaciya_zakupok5ЗаказПостModel from './models/i-i-s-avtomatizaciya-zakupok5-заказ-пост';
import IISAvtomatizaciya_zakupok5КонтрагентыModel from './models/i-i-s-avtomatizaciya-zakupok5-контрагенты';
import IISAvtomatizaciya_zakupok5НоменклатураModel from './models/i-i-s-avtomatizaciya-zakupok5-номенклатура';
import IISAvtomatizaciya_zakupok5ОрганизацииModel from './models/i-i-s-avtomatizaciya-zakupok5-организации';
import IISAvtomatizaciya_zakupok5ОтчеЗакупкахModel from './models/i-i-s-avtomatizaciya-zakupok5-отче-закупках';
import IISAvtomatizaciya_zakupok5ПланЗакупокModel from './models/i-i-s-avtomatizaciya-zakupok5-план-закупок';
import IISAvtomatizaciya_zakupok5ПланModel from './models/i-i-s-avtomatizaciya-zakupok5-план';
import IISAvtomatizaciya_zakupok5СкладыModel from './models/i-i-s-avtomatizaciya-zakupok5-склады';
import IISAvtomatizaciya_zakupok5ТЧЗаказModel from './models/i-i-s-avtomatizaciya-zakupok5-т-ч-заказ';
import IISAvtomatizaciya_zakupok5ТЧОтчетModel from './models/i-i-s-avtomatizaciya-zakupok5-т-ч-отчет';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-zakupok5-единицы-измер': IISAvtomatizaciya_zakupok5ЕдиницыИзмерModel,
    'i-i-s-avtomatizaciya-zakupok5-заказ-пост': IISAvtomatizaciya_zakupok5ЗаказПостModel,
    'i-i-s-avtomatizaciya-zakupok5-контрагенты': IISAvtomatizaciya_zakupok5КонтрагентыModel,
    'i-i-s-avtomatizaciya-zakupok5-номенклатура': IISAvtomatizaciya_zakupok5НоменклатураModel,
    'i-i-s-avtomatizaciya-zakupok5-организации': IISAvtomatizaciya_zakupok5ОрганизацииModel,
    'i-i-s-avtomatizaciya-zakupok5-отче-закупках': IISAvtomatizaciya_zakupok5ОтчеЗакупкахModel,
    'i-i-s-avtomatizaciya-zakupok5-план-закупок': IISAvtomatizaciya_zakupok5ПланЗакупокModel,
    'i-i-s-avtomatizaciya-zakupok5-план': IISAvtomatizaciya_zakupok5ПланModel,
    'i-i-s-avtomatizaciya-zakupok5-склады': IISAvtomatizaciya_zakupok5СкладыModel,
    'i-i-s-avtomatizaciya-zakupok5-т-ч-заказ': IISAvtomatizaciya_zakupok5ТЧЗаказModel,
    'i-i-s-avtomatizaciya-zakupok5-т-ч-отчет': IISAvtomatizaciya_zakupok5ТЧОтчетModel
  },

  'application-name': 'Avtomatizaciya_zakupki',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupki',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupki',
          title: 'Avtomatizaciya_zakupki'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-avtomatizaciya-zakupok5-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok5-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok5-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok5-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok5-единицы-измер-l': {
              caption: 'Единицы измерения',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-avtomatizaciya-zakupok5-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupok5-заказ-пост-l': {
              caption: 'Заказ поставщику',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-avtomatizaciya-zakupok5-отчет-о-закупках-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avtomatizaciya-zakupok5-единицы-измер-l': IISAvtomatizaciya_zakupok5ЕдиницыИзмерLForm,
    'i-i-s-avtomatizaciya-zakupok5-заказ-пост-l': IISAvtomatizaciya_zakupok5ЗаказПостLForm,
    'i-i-s-avtomatizaciya-zakupok5-контрагенты-l': IISAvtomatizaciya_zakupok5КонтрагентыLForm,
    'i-i-s-avtomatizaciya-zakupok5-номенклатура-l': IISAvtomatizaciya_zakupok5НоменклатураLForm,
    'i-i-s-avtomatizaciya-zakupok5-организации-l': IISAvtomatizaciya_zakupok5ОрганизацииLForm,
    'i-i-s-avtomatizaciya-zakupok5-отчет-о-закупках-l': IISAvtomatizaciya_zakupok5ОтчетОЗакупкахLForm,
    'i-i-s-avtomatizaciya-zakupok5-план-закупок-l': IISAvtomatizaciya_zakupok5ПланЗакупокLForm,
    'i-i-s-avtomatizaciya-zakupok5-склады-l': IISAvtomatizaciya_zakupok5СкладыLForm,
    'i-i-s-avtomatizaciya-zakupok5-единицы-измер-e': IISAvtomatizaciya_zakupok5ЕдиницыИзмерEForm,
    'i-i-s-avtomatizaciya-zakupok5-заказ-пост-e': IISAvtomatizaciya_zakupok5ЗаказПостEForm,
    'i-i-s-avtomatizaciya-zakupok5-контрагенты-e': IISAvtomatizaciya_zakupok5КонтрагентыEForm,
    'i-i-s-avtomatizaciya-zakupok5-номенклатура-e': IISAvtomatizaciya_zakupok5НоменклатураEForm,
    'i-i-s-avtomatizaciya-zakupok5-организации-e': IISAvtomatizaciya_zakupok5ОрганизацииEForm,
    'i-i-s-avtomatizaciya-zakupok5-отчет-о-закупках-e': IISAvtomatizaciya_zakupok5ОтчетОЗакупкахEForm,
    'i-i-s-avtomatizaciya-zakupok5-план-закупок-e': IISAvtomatizaciya_zakupok5ПланЗакупокEForm,
    'i-i-s-avtomatizaciya-zakupok5-склады-e': IISAvtomatizaciya_zakupok5СкладыEForm
  },

});

export default translations;
