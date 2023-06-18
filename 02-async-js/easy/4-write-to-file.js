// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require("fs");
function fss() {
  // fs.readFile("te.txt", "utf-8", function (err, data) {
  //   if (err) console.log(err);
  //   else console.log(data.toString());
  // });
  fs.writeFile(
    "te.txt",

    "hello i am one of the blockchain developer how are 1 in 1000000",
    (err) => console.log(err)
  );
}

console.log(fss());
