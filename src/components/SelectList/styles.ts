import { StyleSheet } from 'react-native';
import { theme } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  options: {
    overflow: 'hidden',
    position: 'absolute',
    borderRadius: 8,
    top: 64,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray_100,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_600,
    backgroundColor: theme.colors.gray_500,
  }
});