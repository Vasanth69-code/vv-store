import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Productpage from "./Pages/Productpage.jsx";
import Loginpage from "./Pages/Loginpage.jsx";
import {Provider} from "react-redux"
import {store} from "./store.js";
import CardScreen from "./Pages/CardScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
     
      <Route index element={<Homepage />} />
      
      <Route path="product/:id" element={<Productpage />} />
      <Route path="cart" element={<CardScreen/>}/>

      <Route path="login" element={<Loginpage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);
