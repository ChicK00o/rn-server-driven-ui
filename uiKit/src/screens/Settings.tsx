import React from 'react';
import { Platform } from 'react-native';
import { Button, View, Text } from 'native-base';
import { useI18n } from 'src/i18n/hooks';

export const Settings = () => {
  const { t, changeLanguage } = useI18n();

  const platform = Platform.select({
    ios: t('home.text.platform.ios'),
    android: t('home.text.platform.android'),
    web: t('home.text.platform.web'),
  });

  return (
    <View>
      <View>
        <Text>Theme: </Text>
        <Button colorScheme="emerald"> {'light' === 'light' ? t('Light') : t('Dark')} </Button>
      </View>
      <View>
        <Button colorScheme="emerald" onPress={() => changeLanguage('en')}>
          {t('english')}
        </Button>
        <Button colorScheme="emerald" onPress={() => changeLanguage('vi')}>
          {t('vietnamese')}
        </Button>
      </View>
      <Text accessibilityRole="header" aria-level="2">
        {platform}
      </Text>
    </View>
  );
};
