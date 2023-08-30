import { BugButton } from "app/provider/ErrorBoundary";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const MainPage = (props: Props) => {
  const { t } = useTranslation("main");
  return (
    <div>
      <BugButton />
      {t("Main Page")}
    </div>
  );
};

export default MainPage;
