import PageMain from "@/views/PageMain";
import React from "react";
import { Route, Routes } from "react-router-native";
import PageLayout from "./layouts/PageLayout";

const RouterComp = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<PageMain />} />
      </Route>
    </Routes>
  );
};

export default RouterComp;
