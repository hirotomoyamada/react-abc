import { getPokemonData } from "../../util"
import { Form } from "./form"

async function Page() {
  const data = await getPokemonData()

  return <Form data={data} />
}

export default Page
