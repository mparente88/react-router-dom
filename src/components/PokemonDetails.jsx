import { useParams } from "react-router-dom"

export const PokemonDetails = (props) => {
  const { pokemonId } = useParams()
  const singlePokemon = props.pokemon.find(
    (poke) => poke._id === Number(pokemonId)
  )
  console.log("Pokemon object:", singlePokemon)
  console.log(props) // Always verify that any props are being passed correctly!
  console.log("pokemonId:", pokemonId)

  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  )
}
