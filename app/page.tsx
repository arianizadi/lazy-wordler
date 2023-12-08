async function getWordle() {
  const file = new Date().toISOString().slice(0, 10)
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
  const wordle: WordleJSON = await getWordle()
  return (
   <main>
    <div className="flex justify-center items-center h-[100svh] w-screen overflow-hidden text-white">
        <Tile wordle={wordle} />
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