interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

type Data = Array<number>

const parseData = (args: Array<string>): Data => {
  if (args.length < 5) throw new Error('Not enough arguments')

  if (args.slice(2).filter(x => isNaN(Number(x))).length > 0)
    throw new Error(`Array must be an array of numbers `)
  else return [...args.slice(2).map(x => Number(x))]
}

function calculateExercises(data: Array<number>): Result {
  const analyzedData: Result = {
    periodLength: data.length,
    trainingDays: data.filter(x => x > 0).length,
    success: this.average > this.target ? true : false,
    rating: data.length === 0 ? 1 : data.length > 4 ? 3 : 2,
    ratingDescription:
      this.rating === 1 ? 'real bad' : this.rating > 2 ? 'average bad' : 'ok',
    target: data[0],
    average: data.reduce((x, y) => x + y) / data.length,
  }
  return analyzedData
}

try {
  const data = parseData(process.argv)
  console.log(calculateExercises(data))
} catch (Err) {
  console.log(Err.message)
}
