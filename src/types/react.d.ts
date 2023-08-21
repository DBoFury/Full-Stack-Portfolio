import 'react';

declare module 'react' {
  interface CSSProperties extends CSSProperties {
    '--line-height'?: string | number;
    '--line-width'?: string | number;
    '--rotation'?: string;
  }
}
