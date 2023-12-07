// це не диструктурізація обʼєктів, це частина синтаксису import export
import { season, temperature } from "./named-exports.mjs";
import { isRaining, humidity } from "./inline-exports.mjs";
// при export default назва може бути будь яка, головне вказаний шлях
import getDataFromServer from "./default-export.mjs";
// можна перейменовувати іменовані експорти за допомогою as
import DEFAULT_SERVER, {
  USERNAME as MY_USERNAME,
  PASSWORD as MY_PASSWORD,
} from "./mixed-exports.mjs";

console.log(season);
console.log(temperature);
console.log(isRaining, humidity);

getDataFromServer("https://jsonplaceholder.typicode.com/todos/1")
  .then((post) => console.log(post))
  .catch((err) => console.error(err));

console.log(DEFAULT_SERVER);

console.log(MY_USERNAME, MY_PASSWORD);
