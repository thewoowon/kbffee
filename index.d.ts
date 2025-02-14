declare module '@env' {
  export const FIREBASE_API_KEY: string;
  export const API_URL: string;
}

declare module '*.svg' {
  import {FC, SVGProps} from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}
