declare module 'react-native-privacy-snapshot' {
  export function usePrivacySnapshot(): void;
  export function show(): void;
  export function hide(): void;
  export function enabled(enabledFlag: boolean): void;
}
