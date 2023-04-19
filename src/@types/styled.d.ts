import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    FONT_FAMILY: {
      PRIMARY: string;
    };

    COLORS: {
      WHITE: string;
      GRAY50: string;
      GRAY100: string;
      GRAY200: string;
      GRAY300: string;
      GRAY400: string;
      GRAY500: string;
      GRAY600: string;
      GRAY700: string;
      GRAY800: string;
      DARK50: string;
      DARK100: string;
      PRIMARY: string;
      SECONDARY: string;
      RED: string;
    };
  }
}
