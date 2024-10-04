const fs = require('fs'); // File system module to write to files
const wordsArray = require('an-array-of-english-words'); // Import words array

// Prepare the content to write to the words.js file
const content = `const wordsArray = ${JSON.stringify(wordsArray, null, 2)};\n\nexport default wordsArray;`;

// Write the array to words.js
fs.writeFile('words.js', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('words.js file created successfully!');
  }
});
