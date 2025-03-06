import bassUI from "../../../ui/dist/bass-ui.js";
import DefaultTheme from "vitepress/theme";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    console.log(bassUI);
    app.use(bassUI);
    console.log(app);
  },
};
