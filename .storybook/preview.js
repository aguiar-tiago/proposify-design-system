import { addParameters, addDecorator, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import themeDecorator from "./theme-decorator";

addDecorator(withKnobs);
addDecorator(themeDecorator);