import { render } from "react-dom";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "app/provider/theme/ThemeProvider";
import App from "./app/App";
import "shared/config/i18next/i18next";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
