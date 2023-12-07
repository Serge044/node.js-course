const fs = require("fs");

fs.writeFile("./first.txt", "First file text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File first.txt was written");
    // запис нової строки виконується у колбеку, щоб бути впевненим що спочатку файл створиться, а потім буде зроблений новий запис
    fs.appendFile("./first.txt", "\nOne more line", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Appended text to the first.txt file");
        // зміна назви файлу виконується у колбеку, щоб бути впевненим що спочатку файл створиться, а потім буде зроблений новий запис
        fs.rename("./first.txt", "./renamed-first.txt", (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File was renamed");
          }
        });
      }
    });
  }
});
