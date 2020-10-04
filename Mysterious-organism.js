/*
Context: You’re part of a research team that has found a
newmysterious organism at the bottom of the ocean near hydrothermal vents.
Your team names the organism, Pila aequor (P. aequor),
and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency
at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study.
However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive.
Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.
*/


// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};

// <-- code start -->

const pAequorFactory = (num, seq) => {
  return {
    specimenNum: num,
    DNA: seq,
    mutate() {
      let idx = Math.floor(Math.random() * 15);
      let x = this.DNA[idx];
      let y = '';
      do {
        y = returnRandBase();
      } while (x === y);
      if (x !== y) {
        this.DNA.splice(idx, 1, y);
      }
      return this.DNA;
    },
    compareDNA(obj) {
      let match = 0
      for (x = 0; x < this.DNA.length; x++) {
        if (this.dna[x] === obj[x]) {
          match++;
        }
      }
      let percenti = match / obj.length * 100
      let percent = (match / obj.length * 100).toFixed(2);
      return `The two DNA strands have ${percent}% DNA in common.`
    },
    willLikelySurvive() {
      let match = 0
      for (x = 0; x < this.DNA.length; x++) {
        if (this.DNA[x] === 'C' || this.DNA[x] === 'G') {
          match++;
        }
      }
      let percent = match / this.DNA.length * 100;
      if (percent < 60) {
        return false;
      }
      return true;
    }
  }
};


let arr = [];
let count = 0
let match = 0;
let counter = 1
let counters = 0
do {
  let test10 = pAequorFactory(counter, mockUpStrand());
  test11 = test10.willLikelySurvive();
  counter++
  if (test11) {
    match++;
    counters++;
    arr.push({
      Test: test10.specimenNum,
      Completed: counters,
      DNA: test10.DNA
    })
  }
} while (match < 30);
console.log(arr);