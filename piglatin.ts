import { fromEvent, from } from 'rxjs';
import { map, mergeMap, reduce } from 'rxjs/operators';

let textbox = document.querySelector<HTMLTextAreaElement>('#text-input');
let results = document.querySelector<HTMLElement>('#results');
// Converts a word in English to one in Pig Latin
function pigLatinify(word) {
  // Handle single-letter case and empty strings
  if (word.length < 2) {
    return word;
  }
  return word.slice(1) + '-' + word[0] + 'ay';
}
// You can add tap operator inside .pipe to log the stream values
fromEvent<any>(textbox, 'keyup')
.pipe(
  map(event => event.target.value),
  mergeMap(wordString =>
    // Inner observable
    from(wordString.split(/\s+/))
    .pipe(
      map(pigLatinify),
      reduce((bigString, newWord) => bigString + ' ' + newWord, '')
    )
  )
)
.subscribe(translatedWords => results.innerText = translatedWords);
