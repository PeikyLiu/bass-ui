import * as components from "./components/index";
export * from "./components/index";
console.log(components);
const installer = (app) => {
  console.log("被调用了");
  Object.keys(components).forEach((componentKey) => {
    // eslint-disable-next-line
    app.use(components[componentKey]);
  });
};
export default {
  install: installer,
  ...components,
};
