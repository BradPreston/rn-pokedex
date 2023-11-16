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
    "\n\tquery getAllPokemon {\n\t\tpokemon: pokemon_v2_pokemon(limit: 151) {\n\t\t\tname\n\t\t\tid\n\t\t}\n\t}\n": types.GetAllPokemonDocument,
    "\n\tquery pokemon_details($id: Int!) {\n\t\tspecies: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tpokemon: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tname\n\t\t\t\t\tid\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\tslot\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavorText: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tflavor_text\n\t\t\t}\n\t\t}\n\t}\n": types.Pokemon_DetailsDocument,
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
export function graphql(source: "\n\tquery getAllPokemon {\n\t\tpokemon: pokemon_v2_pokemon(limit: 151) {\n\t\t\tname\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getAllPokemon {\n\t\tpokemon: pokemon_v2_pokemon(limit: 151) {\n\t\t\tname\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery pokemon_details($id: Int!) {\n\t\tspecies: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tpokemon: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tname\n\t\t\t\t\tid\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\tslot\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavorText: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tflavor_text\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery pokemon_details($id: Int!) {\n\t\tspecies: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tpokemon: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tname\n\t\t\t\t\tid\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\tslot\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavorText: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tflavor_text\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;