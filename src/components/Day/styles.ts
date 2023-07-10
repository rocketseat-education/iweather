import { StyleSheet } from 'react-native';
import { theme } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  day: {
    color: theme.colors.gray_200,
    fontFamily: theme.fonts.bold,
    fontSize: 14
  },
  img: {
    height: 56,
    width: 56,
    marginVertical: 4
  },
  min: {
    color: theme.colors.gray_400,
    fontFamily: theme.fonts.bold,
    fontSize: 14
  },
  max: {
    color: theme.colors.gray_100,
    fontFamily: theme.fonts.bold,
    fontSize: 14
  },
});