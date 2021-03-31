import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
})

export const Home = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        accessibilityRole="header"
        aria-level="2"
      >
        {t('Home')}
      </Text>
    </View>
  );
};
