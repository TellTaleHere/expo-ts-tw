import React from "react";
import { Outlet } from "react-router-native";
import ViewSafe from "../lib/ViewSafe";

const PageLayout = (): JSX.Element => {
  return (
    <ViewSafe>
      <Outlet />
    </ViewSafe>
  );
};

export default PageLayout;
