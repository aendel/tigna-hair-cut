import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
export const MAIN_COLOR_THEME = "teal";
export const tealTheme = extendTheme(
  {
    components: {
      Link: {
        baseStyle: {
          color: MAIN_COLOR_THEME,
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: MAIN_COLOR_THEME })
);
