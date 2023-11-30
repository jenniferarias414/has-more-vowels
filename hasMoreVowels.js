const hasMoreVowels = word => {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0
  let vowelsNeeded = word.length / 2
  let wordSplit = word.toLowerCase().split('')

  for (let i = 0; i < wordSplit.length; i++) {
    let letter = wordSplit[i]

    if (vowels.includes(letter)) {
      vowelCount++
    }

    if (vowelCount > vowelsNeeded) {
      return true
    }
  }

  return false
}

// hasMoreVowels('moose')
// hasMoreVowels('Aal')
// hasMoreVowels('yay')
// hasMoreVowels('mice')

// keep a count of how many vowels there are
// change to lower case b/c uppercase can be included
// loop will increase vowel count

// separate if statement to compare amt vowels to half size of word