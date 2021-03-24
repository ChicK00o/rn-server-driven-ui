import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, Platform, View, Text, StyleSheet } from 'react-native';
import { useThemeSystem } from 'src/contexts/ThemeContext';
import { GET_PAGE } from 'src/gql/page.gql';
import { GetPage } from 'src/gql/types/GetPage';
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
  const { theme, toggleTheme } = useThemeSystem();
  const { data, loading, error } = useQuery<GetPage>(GET_PAGE);

  const platform = Platform.select({
    ios: t('home.text.platform.ios'),
    android: t('home.text.platform.android'),
    web: t('home.text.platform.web'),
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.palette.background }]}>
      <View style={styles.theme}>
        <Text style={{ color: theme.palette.onBackground }}>Theme: </Text>
        <Button
          onPress={toggleTheme}
          title={theme.paletteName === 'light' ? t('Light') : t('Dark')}
        />
      </View>
      <View style={styles.languages}>
        <Button onPress={() => changeLanguage('en')} title={t('english')} />
        <Button onPress={() => changeLanguage('vi')} title={t('vietnamese')} />
      </View>
      <Text
        style={[styles.footer, { color: theme.palette.onBackground }]}
        accessibilityRole="header"
        aria-level="2">
        {platform}
      </Text>
      {loading ? (
        <Text>Loading....</Text>
      ) : (
        <Text>{'Data : ' + JSON.stringify(data) + ' || Error : ' + JSON.stringify(error)}</Text>
      )}
    </View>
  );
};
