import React from "react";
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleProp,
  ViewProps,
} from "react-native";
import { useTailwind } from "tailwind-rn";

export interface ViewInterface {
  children: JSX.Element | JSX.Element[];
  shouldDismissKeyboard?: boolean;
  style?: StyleProp<ViewProps>;
}

const ViewSafe = ({
  style,
  children,
  shouldDismissKeyboard = true,
}: ViewInterface): JSX.Element => {
  const tw = useTailwind();

  return (
    <SafeAreaView
      style={[
        tw("flex-1"),
        style,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
      onStartShouldSetResponderCapture={({ target }: any) => {
        if (
          shouldDismissKeyboard &&
          ![
            "AndroidTextInput",
            "RCTSinglelineTextInputView",
            "RCTMultilineTextInputView",
          ].includes(target.viewConfig.uiViewClassName)
        ) {
          Keyboard.dismiss();
        }
        return false;
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default ViewSafe;
