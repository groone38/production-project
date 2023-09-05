import React from "react";
import { useTranslation } from "react-i18next";
// import Button, { ThemeButton } from "shared/ui/Button/Button";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      {t("About page")}
      {/* <Button theme={ThemeButton.OUTLINE}>Test</Button> */}
    </div>
  );
};

export default AboutPage;
