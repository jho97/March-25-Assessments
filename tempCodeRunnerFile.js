const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]
const answers = []
// console.log('big')
for (let i = 0; i < bigOrSmallArray.length; i++) {
  if (bigOrSmallArray[i] > 100) {
    answers.push(bigOrSmallArray[i] = 'big')
  } else if (bigOrSmallArray[i] <= 100) {
    answers.push(bigOrSmallArray[i] = 'small')
  }
}
console.log(answers)