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
        <Button
          title={'light' === 'light' ? t('Light') : t('Dark')}
        />
      </View>
      <View>
        <Button onPress={() => changeLanguage('en')} title={t('english')} />
        <Button onPress={() => changeLanguage('vi')} title={t('vietnamese')} />
      </View>
      <Text
        accessibilityRole="header"
        aria-level="2">
        {platform}
      </Text>
    </View>
  );
};
