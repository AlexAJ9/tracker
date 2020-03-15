function calculateBmi(height: number, weight: number): string {
  if (height === 0 || weight === 0) {
    throw new Error('Invalid input')
  }
  if (weight / (height * height) >= 18.5 && weight / (height * height) < 25) {
    return 'Normal (healthy weight)'
  } else if (weight / (height * height) < 18.5) {
    return 'Below normal weight'
  } else return 'Overwieght'
}
console.log(calculateBmi(1.8, 12))
