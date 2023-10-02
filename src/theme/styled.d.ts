import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {};
    breakpoints: {
      xs: '320px';
      sm: '576px';
      md: '768px';
      lg: '1024px';
      xl: '1280px';
      '2xl': '1536px';
      '3xl': '1920px';
    };
  }
}
