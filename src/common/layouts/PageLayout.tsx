import Footer from "@/components/Footer";
import React from "react";
import { Outlet } from "react-router-native";
import ViewSafe from "../lib/ViewSafe";

const PageLayout = (): JSX.Element => {
  return (
    <ViewSafe>
      <Outlet />
      <Footer />
    </ViewSafe>
    // <StatusBar />
    //   <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
    //     <Text>Hello</Text>
    //   </SafeAreaView>
  );
};

export default PageLayout;
