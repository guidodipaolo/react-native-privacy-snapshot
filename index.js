import { useEffect } from "react";
import { NativeModules, Platform } from "react-native";
let { PrivacySnapshot } = NativeModules;
const show = () => Platform.OS === "ios" && PrivacySnapshot._show(true);
const hide = () => Platform.OS === "ios" && PrivacySnapshot._show(false);
const enabled = (enable, isDarkMode) =>
  Platform.OS === "ios" && PrivacySnapshot.enabled(enable, isDarkMode);
const usePrivacySnapshot = () => {
  useEffect(() => {
    show();
    return () => {
      hide();
    };
  }, []);
};
export { show, hide, enabled, usePrivacySnapshot };
