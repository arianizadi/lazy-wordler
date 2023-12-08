async function getWordle(date: Date) {
  const file = date.toISOString().slice(0, 10)
  const baseURL = "https://www.nytimes.com/svc/wordle/v2/"
  const res = await fetch(`${baseURL + file}.json`)
  const data = await res.json()

  if (!res.ok) {
    throw new Error(`Failed to fetch - ${baseURL + file}.json`)
  }

  return data
}

interface WordleJSON {
  id: Number,
  solution: String,
  print_date: String,
  days_since_launch: Number,
  editor: String
}

export default async function Home() {
  const prevWordle: WordleJSON = await getWordle(new Date(new Date().setDate(new Date().getDate() - 1)))
  const curWordle: WordleJSON = await getWordle(new Date())
  const tomWordle: WordleJSON = await getWordle(new Date(new Date().setDate(new Date().getDate() + 1)))
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-[100svh] w-screen overflow-hidden text-white space-y-10">
        <div>
          <h1 className="text-6xl font-bold">Lazy Wordler</h1>
          <h2 className="text-2xl">Get wordle answers without the work</h2>
        </div>
        <div className="flex flex-row space-x-10">
          <Tile wordle={prevWordle} />
          <Tile wordle={curWordle} />
          <Tile wordle={tomWordle} />
        </div>
      </div>
    </main>
  )
}

function Tile({ wordle }: { wordle: WordleJSON }) {
  return (
    <div className="bg-zinc-800 p-10 rounded-lg text-center text-2xl font-bold flex flex-col space-y-5">
      <h1>{wordle.print_date}</h1>
      <h1>{wordle.solution}</h1>
    </div>
  )
}