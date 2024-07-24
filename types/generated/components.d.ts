import type { Schema, Attribute } from '@strapi/strapi';

export interface DisplayHero extends Schema.Component {
  collectionName: 'components_display_heroes';
  info: {
    displayName: 'Hero';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    heroHeadline: Attribute.Text & Attribute.Required;
    heroImage: Attribute.Media<'images'> & Attribute.Required;
    hasLink: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    heroLink: Attribute.String;
    heroText: Attribute.Text;
    linkInNewtab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'display.hero': DisplayHero;
    }
  }
}
