import 'styled-components';

import { InvTheme } from '@/styles/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends InvTheme {}
}
