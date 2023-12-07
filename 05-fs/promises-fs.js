const fs = require("fs/promises");

// варіант з промісами
fs.writeFile("./first.txt", "First file text")
  .then(() => console.log("File first.txt was written"))
  .then(() => fs.appendFile("./first.txt", "\nOne more line"))
  .then(() => console.log("Appended text to the first.txt file"))
  .then(() => fs.rename("./first.txt", "./renamed-first.txt"))
  .then(() => console.log("File was renamed"))
  .catch((err) => console.log(err));

// варіант з колбеками
// fs.writeFile("./first.txt", "First file text", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File first.txt was written");
//     // запис нової строки виконується у колбеку, щоб бути впевненим що спочатку файл створиться, а потім буде зроблений новий запис
//     fs.appendFile("./first.txt", "\nOne more line", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Appended text to the first.txt file");
//         // зміна назви файлу виконується у колбеку, щоб бути впевненим що спочатку файл створиться, а потім буде зроблений новий запис
//         fs.rename("./first.txt", "./renamed-first.txt", (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("File was renamed");
//           }
//         });
//       }
//     });
//   }
// });
