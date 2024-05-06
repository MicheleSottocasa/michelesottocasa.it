'use client';

import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
// utils
import { localStorageGetItem } from 'src/utils/storage-available';
// components
import { useSettingsContext } from 'src/components/settings';
//
import { allLangs, defaultLang } from './config-lang';

// ----------------------------------------------------------------------

export default function useLocales() {
  const { t, i18n } = useTranslation();

  const settings = useSettingsContext();

  const langStorage = localStorageGetItem('i18nextLng');

  const currentLang = allLangs.find((lang) => lang.value === langStorage) || defaultLang;

  const onChangeLang = useCallback(
    (newLang: string) => {
      i18n.changeLanguage(newLang);
      settings.onChangeDirectionByLang(newLang);
    },
    [settings, i18n]
  );

  return {
    allLangs,
    t,
    currentLang,
    onChangeLang,
  };
}
