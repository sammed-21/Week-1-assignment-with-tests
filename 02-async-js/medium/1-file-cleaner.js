// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` -->

const fs = require("fs");

function modifierFile() {
  let reads = fs.readFileSync("test.txt", "utf-8", (err) => {
    console.log(err);
  });
  let neat = reads.replace(/\s+/g, " ");
  let clear = fs.writeFile("test.txt", "", (err) => console.log(err));

  fs.writeFile("test.txt", neat, (err) => console.log(err));
  console.log(neat);
}

console.log(modifierFile());
