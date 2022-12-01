import { input } from '../utils/inputs/1'

type Props = {
  data: string
}

export default function One({ data }: Props) {
  const allSnacks = data.split("\n")

  const snackMap = new Map<number, string>()
  let currentElf = 0
  for (let i = 0; i < allSnacks.length; i++) {
     if (allSnacks[i] === "") {
      currentElf++
     }
     else {
      if (snackMap.has(currentElf)) {
        snackMap.set(
          currentElf,
          allSnacks[i].concat(" ", snackMap.get(currentElf) as string)
        )
      } else {
        snackMap.set(currentElf, allSnacks[i])
      }
     }
  }

  const mapSnackTotals = <K extends number = number, V extends number = number>(map: Map<number, string>) => {
    const newMap = new Map<K, V>()
  
    const convertTotal = (snacks: string): number =>
      snacks
        .split(" ")
        .reduce((total, snack) => parseInt(snack, 10) + total, 0)

    map.forEach((snacks, elf) => {
      newMap.set(elf as K, convertTotal(snacks) as V)
    })

    return newMap
  }

  const elvesWithTotalCalories = mapSnackTotals(snackMap)
  
  let elfWithMostCalories = 0
  elvesWithTotalCalories.forEach((total) => {
    if (total > elfWithMostCalories) {
      elfWithMostCalories = total
    }
  })

  const sortedCalories = Array.from(elvesWithTotalCalories.values()).sort((a, b) => b - a)
  const topThreeTotals = sortedCalories.slice(0, 3).reduce((total, t ) => total + t, 0)
  
  return (
    <div>
      <h1>Advent of Code Day One</h1>
      <h2>Part One:</h2>
      <p>Find the elf with the most calories. How many calories is that elf carrying?</p>
      <p>Answer:</p>
      <p>{elfWithMostCalories}</p>
      <h2>Part Two:</h2>
      <p>Find the top three elves by most calories carried. How many calories are they carrying together?</p>
      <p>Answer:</p>
      <p>{topThreeTotals}</p>
      <h2>Input Data:</h2>
      <code>{data}</code>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = input

  return {
    props: {
      data
    }
  }
}

// 68802
// 205370