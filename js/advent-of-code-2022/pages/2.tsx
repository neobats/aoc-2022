import { Layout } from "../components/templates/Layout"
import { input } from '../utils/inputs/2'

type Props = {
  data: string
}
export default function Two({ data }: Props) {

  const shapePoints = {
    "A X": 1,
    "A Y": 2,
    "A Z": 3,
    "B X": 1,
    "B Y": 2,
    "B Z": 3,
    "C X": 1,
    "C Y": 2,
    "C Z": 3,
  }

  const verdictPoints = {
    "A X": 3,
    "A Y": 6,
    "A Z": 0,
    "B X": 0,
    "B Y": 3,
    "B Z": 6,
    "C X": 6,
    "C Y": 0,
    "C Z": 3,
  }

  const outcomePoints = {
    "A X": 0,
    "A Y": 3,
    "A Z": 6,
    "B X": 0,
    "B Y": 3,
    "B Z": 6,
    "C X": 0,
    "C Y": 3,
    "C Z": 6,
  }
  const outcomeShapePoints = {
    "A X": 3,
    "A Y": 1,
    "A Z": 2,
    "B X": 1,
    "B Y": 2,
    "B Z": 3,
    "C X": 2,
    "C Y": 3,
    "C Z": 1,
  }

  const allHands = data.split("\n").filter(Boolean) as Array<keyof typeof shapePoints>

  const outputScores = allHands.map((hand) => {
    return shapePoints[hand] + verdictPoints[hand]
  })
  const outcomeScores = allHands.map((hand) => {
    return outcomePoints[hand] + outcomeShapePoints[hand]
  })

  const outputTotal = outputScores.reduce((total, score) => total + score, 0)
  const outcomeTotal = outcomeScores.reduce((total, score) => total + score, 0)
  
  return (
    <Layout title="Day 2">
      <h2>Rock, paper, Scissors Strategy</h2>
      <p>What is the total score of all the strategic guide&apos;s hands?</p>
      <code>{outputTotal}</code>
      <p>What about if X Y and Z are the outcome you need, not the shape to play?</p>
      <code>{outcomeTotal}</code>
    </Layout>
  )
}

export function getStaticProps() {
  const data = input
  return {
    props: {
      data,
    },
  }
}

// A + X are Rock
// B + Y are Paper
// C + Z are Scissors

// Rock is 1 point
// Paper is 2 points
// Scissors are 3 points
// a loss is 0 points
// a draw is 3 points
// a win is 6 points