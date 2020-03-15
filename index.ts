import express from 'express'
const app = express()
import calculateBmi from './bmiCalculator'

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
const PORT = 3006

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`)
})
