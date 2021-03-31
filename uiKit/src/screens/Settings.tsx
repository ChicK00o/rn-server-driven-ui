import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useI18n } from 'src/i18n/hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  theme: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  languages: {
    marginBottom: 20,
  },
  footer: {
    marginTop: 40,
  },
});

export const Settings = () => {
  const { t, changeLanguage } = useI18n();

  const platform = Platform.select({
    ios: t('home.text.platform.ios'),
    android: t('home.text.platform.android'),
    web: t('home.text.platform.web'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.theme}>
        <Text>Theme: </Text>
        <Button mode="contained" onPress={() => null}>
          {t('Light')}
        </Button>
      </View>
      <View style={styles.languages}>
        <Button onPress={() => changeLanguage('en')} mode="contained">
          {t('english')}
        </Button>
        <Button onPress={() => changeLanguage('vi')} mode="contained">
          {t('vietnamese')}
        </Button>
      </View>
      <Text style={styles.footer} accessibilityRole="header" aria-level="2">
        {platform}
      </Text>
    </View>
  );
};
