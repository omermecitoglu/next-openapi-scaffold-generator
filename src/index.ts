import { askQuestions } from "./prompt";

(async () => {
  const [modelName] = await askQuestions(["Enter Model Name: "]);
  console.log(modelName);
})();
