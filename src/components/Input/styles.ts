import { theme } from '@styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    backgroundColor: theme.colors.gray_600,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    color: theme.colors.white,
  }
});