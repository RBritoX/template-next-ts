import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;

      backgroundPrimary: string;
      backgroundSecondary: string;

      white: string;

      card: string;

      theme: string;
      themeBg: sting;

      inputBg: string;
      placeholder: string;

      text: string;
      textBtn: string;

      transparent: string;
    };
  }
}
