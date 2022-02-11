import { sentenceJoiner } from './sentenceJoiner';
import { sentenceSplitter } from './sentenceSplitter';

function isNotAVowel (word:string):boolean{
  if (word.charAt(0).toUpperCase() === "A"){
    return false
  }
  else if (word.charAt(0).toUpperCase() === "E"){
    return false
  }
  else if (word.charAt(0).toUpperCase() === "I"){
    return false
  }
  else if (word.charAt(0).toUpperCase() === "O"){
    return false
  }
  else if (word.charAt(0).toUpperCase() === "U"){
    return false
  }
  else if (word.charAt(0).toUpperCase() === "Y"){
    return false
  } else {
    return true
  }
}


export const context = (sentence:string):string => {
  let splitedSentence = sentenceSplitter(sentence)
  splitedSentence =(splitedSentence.filter(word => isNotAVowel(word)))
  return sentenceJoiner(splitedSentence)
};
