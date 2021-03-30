import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'native-base';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text
        accessibilityRole="header"
        aria-level="2"
      >
        {t('Home')}
      </Text>
    </View>
  );
};
