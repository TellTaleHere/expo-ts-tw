import Page1 from "@/views/Page1";
import PageMain from "@/views/PageMain";
import React from "react";
import { Route, Routes } from "react-router-native";
import PageLayout from "./layouts/PageLayout";

const RouterComp = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<PageMain />} />
        <Route path="/page1" element={<Page1 />} />
      </Route>
    </Routes>
  );
};

export default RouterComp;
