// When needing to use white space from content delivered from a headless cms
// new lines like \n or \n need replacing with a break.

const exampleData = "<p>This is text \n with line breaks \r in</p>";

const replaced = exampleData.replace(/(?:\r\n|\r|\n)/g, "<br>");

console.log(replaced);

// Add css to make the breaks look better
// br {
//     display: block;
//     content: "";
//     margin-top: 1.5rem;
// }
