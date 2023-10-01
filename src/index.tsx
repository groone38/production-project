import { render } from "react-dom";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "app/provider/theme/ThemeProvider";
import { ErrorBoundary } from "app/provider/ErrorBoundary";
import App from "./app/App";
import "shared/config/i18next/i18next";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
