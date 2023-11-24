import { PokemonProps } from "./PokemonProps";

export type RequestListProps = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonProps[];
}
