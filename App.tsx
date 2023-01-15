import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import RouterComp from "@/common/RouterComp";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NativeRouter>
        <RouterComp />
      </NativeRouter>
    </TailwindProvider>
  );
}
