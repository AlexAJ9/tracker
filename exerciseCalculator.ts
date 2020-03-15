interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

function calculateExercises(data: Array<number>): Result {
  const analyzedData: Result = {
    periodLength: data.length,
    trainingDays: data.filter(x => x > 0).length,
    success: this.average > this.target ? true : false,
    rating: data.length === 0 ? 1 : data.length > 4 ? 3 : 2,
    ratingDescription:
      this.rating === 1 ? 'real bad' : this.rating > 2 ? 'average bad' : 'ok',
    target: 22,
    average: data.reduce((x, y) => x + y) / data.length,
  }
  return analyzedData
}
console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]))
