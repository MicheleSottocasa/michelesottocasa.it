import merge from 'lodash/merge';
import { enUS as enUSAdapter, it as itITAdapter } from 'date-fns/locale';
// core
import { enUS as enUSCore, itIT as itITCore } from '@mui/material/locale';
// date-pickers
import { enUS as enUSDate, itIT as itITDate } from '@mui/x-date-pickers/locales';
// data-grid
import { enUS as enUSDataGrid, itIT as itITDataGrid } from '@mui/x-data-grid';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: merge(enUSDate, enUSDataGrid, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:gb-nir',
  },
  {
    label: 'Italiano',
    value: 'it',
    systemValue: merge(itITDate, itITDataGrid, itITCore),
    adapterLocale: itITAdapter,
    icon: 'flagpack:it',
  },
];

export const defaultLang = allLangs[0]; // English

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
// https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0
