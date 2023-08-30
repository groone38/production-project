import { render } from "react-dom";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "app/provider/theme/ThemeProvider";
import App from "./app/App";
import "shared/config/i18next/i18next";
import { ErrorBoundary } from "app/provider/ErrorBoundary";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root"),
);
