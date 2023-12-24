import { useMemo, useState } from "react";
import { Layout } from "../components/templates/Layout";
import { input } from "../utils/inputs/3";
import { chunkBy } from '../utils/chunkBy'

type Props = {
  data: string[];
};

const getHalfwayPoint = (arr: unknown[] | string) => Math.floor(arr.length / 2)
const splitRucksack = (rucksack: string): [string[], string[]] => [
  rucksack.slice(0, getHalfwayPoint(rucksack)).split(''),
  rucksack.slice(getHalfwayPoint(rucksack)).split('')
]

const union = <T,>(arrA: T[], arrB: T[]) => {
  return [...new Set(arrA.filter(a => arrB.includes(a)))]
}

const getCharPriority = (char: string) => {
  const x = char.charCodeAt(0)
  return x > 96 ? x - 96 // lower a is 97, and a represents 1 in our case
    : x - (64 - 26) // upper A is 65, and A represents 26 in our case
}

const sumCharPriority = (total: number, char: string) => total + getCharPriority(char)

const chunkGroup = chunkBy<string>(3)
const findGroupBadge = (rucksacks: string[]) => {
  const chunked = chunkGroup(rucksacks)
  return chunked.map(chunk => 
    chunk.reduce(
      (common, r) =>union(common, r.split('')), 
      chunk[0].split('')
    )
  )
}


export default function Three({ data }: Props) {
  const [showCommonData, setShowCommonData] = useState(false)

  const commonItemType = useMemo(() =>
    data
      .map(splitRucksack)
      .map(c => ({
        compartments: c.map(ec => ec.join('')),
        common: union(...c)})
      ),
    [data]
  )

  const totalPriority = useMemo(() => 
    commonItemType
      .flatMap(({ common }) => common)
      .reduce(sumCharPriority, 0), 
    [commonItemType]
  )

  const groupBadge = useMemo(() =>
    findGroupBadge(data)
      .flat()
      .reduce(sumCharPriority, 0), 
    [data]
  )
    

  const renderCommonItems = () => commonItemType.map(({ compartments, common}) => (
    <article style={{ border: '1px solid darkblue', display: 'flex', gap: '1rem', padding: '2rem'}} key={JSON.stringify(compartments)}>
      <div style={{ maxWidth: '50%', backgroundColor: '#191970', padding: '2rem', borderRadius: '1rem'}}>
        <h3>Compartments</h3>         
        <p>{compartments.join('\t')}</p>
      </div>
      <div style={{ maxWidth: '50%', backgroundColor: '#191970', padding: '2rem', borderRadius: '1rem'}}>
        <h3>Common Item Type</h3>
        <p>{common}</p>
      </div>
    </article>
  ))

  return (
    <Layout title="Day 3">
      <>
        <h2>Compartment Item Sorting</h2>
        <p>The total priority of the common items is: {totalPriority}</p>
        <p>The sum of the priorities of the badges is : {groupBadge}</p>
        <button onClick={() => setShowCommonData(!showCommonData)}>Show computed items</button>
        {showCommonData && renderCommonItems()}
      </>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {
      data: input,
    },
  };
}
