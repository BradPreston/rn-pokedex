/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery get_all_pokemon {\n\tpokemon: pokemon_v2_pokemonspecies(limit: 151, order_by: { id: asc }) {\n\t\tid\n\t\tname\n\t\tis_legendary\n\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\tnodes {\n\t\t\t\theight\n\t\t\t\tweight\n\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\twhere: {\n\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t}\n\t\t) {\n\t\t\tdescription: flavor_text\n\t\t}\n\t}\n}\n": types.Get_All_PokemonDocument,
    "\n\tquery pokemon_details($id: Int!) {\n\t\tpokemon: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tdescription: flavor_text\n\t\t\t}\n\t\t}\n\t}\n": types.Pokemon_DetailsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery get_all_pokemon {\n\tpokemon: pokemon_v2_pokemonspecies(limit: 151, order_by: { id: asc }) {\n\t\tid\n\t\tname\n\t\tis_legendary\n\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\tnodes {\n\t\t\t\theight\n\t\t\t\tweight\n\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\twhere: {\n\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t}\n\t\t) {\n\t\t\tdescription: flavor_text\n\t\t}\n\t}\n}\n"): (typeof documents)["\nquery get_all_pokemon {\n\tpokemon: pokemon_v2_pokemonspecies(limit: 151, order_by: { id: asc }) {\n\t\tid\n\t\tname\n\t\tis_legendary\n\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\tnodes {\n\t\t\t\theight\n\t\t\t\tweight\n\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\twhere: {\n\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t}\n\t\t) {\n\t\t\tdescription: flavor_text\n\t\t}\n\t}\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery pokemon_details($id: Int!) {\n\t\tpokemon: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tdescription: flavor_text\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery pokemon_details($id: Int!) {\n\t\tpokemon: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tdescription: flavor_text\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;