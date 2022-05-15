/* inspirational message generator. Parts of the message will be combined how? 
*/
const adverbs = ['never', 'always', 'sometimes', 'remember'];
const verbs = ['keep', 'try', 'wait', 'understand', 'can', 'should'];
const subjectPronouns = ['you', 'we', 'they', 'he', 'she'];
const objectPronouns = ['you', 'him', 'her', 'us', 'them'];
const conjunctions = ['and', 'but', 'if'];
const prepositions = ['at', 'by', 'for', 'from', 'in', 'of', 'on', 'to', 'with'];

const randomize = (part) => {
  const randomNum = Math.floor(Math.random() * part.length);
  return part[randomNum];
}

function titleCase(string){
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const firstWord = titleCase(randomize(subjectPronouns));
const secondWord = randomize(adverbs);
const thirdWord = randomize(verbs);
const fourthWord = randomize(objectPronouns);
const fifthWord = randomize(conjunctions);
const sixthWord = randomize(subjectPronouns);
const seventhWord = randomize(verbs);
const eighthWord = randomize(prepositions);
const ninthWord = randomize(verbs);
const tenthWord = randomize(objectPronouns);

console.log(`${firstWord} ${secondWord} ${thirdWord} ${fourthWord} ${fifthWord} ${sixthWord} ${seventhWord} ${eighthWord} ${ninthWord} ${tenthWord}.`);



