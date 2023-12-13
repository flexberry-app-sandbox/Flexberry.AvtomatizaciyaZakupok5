import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.автоматизация-закупок.caption'),
          title: i18n.t('forms.application.sitemap.автоматизация-закупок.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupok5-организации-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-организации-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-организации-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok5-контрагенты-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-контрагенты-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-контрагенты-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok5-номенклатура-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-номенклатура-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-номенклатура-l.title'),
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok5-склады-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-склады-l.title'),
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok5-единицы-измер-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-единицы-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupok5-единицы-измер-l.title'),
              icon: 'file',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupok5-план-закупок-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupok5-план-закупок-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupok5-план-закупок-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupok5-заказ-пост-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupok5-заказ-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupok5-заказ-пост-l.title'),
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupok5-отчет-о-закупках-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-avtomatizaciya-zakupok5-отчет-о-закупках-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-avtomatizaciya-zakupok5-отчет-о-закупках-l.title'),
              icon: 'chart line',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})