import { createBrowserRouter } from "react-router-dom";
import Parent from "./components/Parent";
import PromoInput from "./components/PromoInput";
import Activated from "./components/Activated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    children: [
      { index: true, element: <PromoInput /> }, 
      { path: "activated", element: <Activated /> },
    ],
  },
]);

export default router;