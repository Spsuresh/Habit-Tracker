import * as React from 'react';
import  enGB from 'date-fns/locale'
import  enUS from 'date-fns/locale'
import  es from 'date-fns/locale'
import  pl from 'date-fns/locale';
import { ReactComponent as PolandFlagSvg } from 'icons/poland.svg';
import { ReactComponent as SpainFlagSvg } from 'icons/spain.svg';
import { ReactComponent as UnitedKingdomFlagSvg } from 'icons/united-kingdom.svg';
import { ReactComponent as UnitedStatesFlagSvg } from 'icons/united-states.svg';

// Defaukt locale
const defaultLocale = enUS;

// Available locales
const locales = [
  { code: 'es', label: 'Español', icon: <SpainFlagSvg />, import: es },
  {
    code: 'en-US',
    label: 'English US',
    icon: <UnitedStatesFlagSvg />,
    import: enUS,
  },
  {
    code: 'en-GB',
    label: 'English GB',
    icon: <UnitedKingdomFlagSvg />,
    import: enGB,
  },
  { code: 'pl', label: 'Polski', icon: <PolandFlagSvg />, import: pl },
];

export { defaultLocale, locales };
