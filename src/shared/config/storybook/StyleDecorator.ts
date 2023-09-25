// import "../../../../config/storybook/storybook.scss";
import "../../../app/styles/index.scss";
// import { Decorator, Story } from "@storybook/react";
import { Decorator } from "@storybook/react";

// export const StyleDecorator = (story: () => Story) => story();
export const StyleDecorator: Decorator = (Story) => Story();
