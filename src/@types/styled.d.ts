import 'styled-components'

import { defaulTheme } from '../styles/themes'

type ThemeType = typeof defaulTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
