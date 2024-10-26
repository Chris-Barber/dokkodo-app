import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import GlobalStyles from '@/constants/GlobalStyles';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: GlobalStyles.bodyText.fontSize,
    fontWeight: GlobalStyles.bodyText.fontWeight, // Light for body text to add to a contemplative tone
    fontFamily: GlobalStyles.bodyText.fontFamily,
    lineHeight: GlobalStyles.bodyText.lineHeight,
    marginBottom: 8,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    lineHeight: 32,
    fontSize: GlobalStyles.titleText.fontSize,
    fontWeight: GlobalStyles.titleText.fontWeight, // Bold for titles
    fontFamily: GlobalStyles.titleText.fontFamily,
    textAlign: GlobalStyles.titleText.textAlign, // Center-aligned for title
    marginVertical: GlobalStyles.titleText.marginVertical,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
