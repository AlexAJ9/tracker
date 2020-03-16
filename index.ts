import express from 'express'
const app = express()
app.use(express.json())

import calculateBmi from './bmiCalculator'
import calculateExercises from './exerciseCalculator'

app.get('/', (_req, res) => {
  res.send('Hello')
})

app.get('/bmi?', (req, res) => {
  if (
    !req.query.weight ||
    isNaN(req.query.weight) ||
    !req.query.height ||
    isNaN(req.query.height)
  ) {
    res.status(400).json({ error: 'Malformatted parameters' })
  }
  const data = calculateBmi(req.query.height, req.query.weight)
  res.send({ height: req.query.height, weight: req.query.weight, bmi: data })
})

app.post('/exercises', (req, res) => {
  const body = req.body
  console.log(body)

  if (!body.target || !body.daily_exercises) {
    res.status(400).send({ error: 'parameters missing' })
  }
  if (isNaN(body.target) || body.daily_exercises.length < 1) {
    res.status(400).send({ error: 'malformatted parameters' })
  }
  const data = calculateExercises([body.target, ...body.daily_exercises])
  res.status(200).send(data)
})
const PORT = 3006

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`)
})
