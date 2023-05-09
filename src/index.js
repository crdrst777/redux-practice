import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* React Redux에는 Provider컴포넌트를 통해 앱의 다른 컴포넌트에서 Redux store를 사용할 수 있음 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
