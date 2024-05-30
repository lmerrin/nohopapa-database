export function capitalizeWords(str) {
    return str
     .split(' ')        // Split the string into an array of words
     .map(word =>        // Map over each word
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter and concatenate with the rest of the word
     )
     .join(' ');        // Join the array back into a string
   }

