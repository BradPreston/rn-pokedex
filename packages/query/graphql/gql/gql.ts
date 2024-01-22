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
    "\n\tquery get_all_pokemon {\n\t\tpokemon: pokemon_v2_pokemonspecies(limit: 151, order_by: { id: asc }) {\n\t\t\tid\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tdescription: flavor_text\n\t\t\t}\n\t\t}\n\t}\n": types.Get_All_PokemonDocument,
    "\n\tquery pokemon_details($id: Int!) {\n\t\tevolution_chain: pokemon_v2_evolutionchain(where: { id: { _eq: $id } }) {\n\t\t\tevolution: pokemon_v2_pokemonspecies(order_by: { id: asc }) {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t\tspecies: pokemon_v2_pokemonspecies(limit: 1) {\n\t\t\tdescription: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: { language_id: { _eq: 9 } }\n\t\t\t\tlimit: 1\n\t\t\t) {\n\t\t\t\tflavor_text\n\t\t\t}\n\t\t}\n\t\tpokemon_stat: pokemon_v2_pokemonstat(where: { pokemon_id: { _eq: $id } }) {\n\t\t\tstat: pokemon_v2_stat {\n\t\t\t\tname\n\t\t\t}\n\t\t\tbase_stat\n\t\t}\n\t\tpokemon_type: pokemon_v2_pokemontype(where: { pokemon_id: { _eq: $id } }) {\n\t\t\ttype: pokemon_v2_type {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t\tefficacies: pokemon_v2_typeefficacy(limit: 18) {\n\t\t\ttarget_type: pokemonV2TypeByTargetTypeId {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t\ttype_efficacy: pokemon_v2_typeefficacies {\n\t\t\t\t\tdamage_factor\n\t\t\t\t\ttype: pokemonV2TypeByTargetTypeId {\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdetails: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {\n\t\t\tname\n\t\t\tid\n\t\t\theight\n\t\t\tweight\n\t\t\tabilities: pokemon_v2_pokemonabilities {\n\t\t\t\tability: pokemon_v2_ability {\n\t\t\t\t\tname\n\t\t\t\t\tdescription: pokemon_v2_abilityflavortexts(\n\t\t\t\t\t\twhere: { language_id: { _eq: 9 } }\n\t\t\t\t\t\tlimit: 1\n\t\t\t\t\t) {\n\t\t\t\t\t\tflavor_text\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.Pokemon_DetailsDocument,
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
export function graphql(source: "\n\tquery get_all_pokemon {\n\t\tpokemon: pokemon_v2_pokemonspecies(limit: 151, order_by: { id: asc }) {\n\t\t\tid\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tdescription: flavor_text\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery get_all_pokemon {\n\t\tpokemon: pokemon_v2_pokemonspecies(limit: 151, order_by: { id: asc }) {\n\t\t\tid\n\t\t\tname\n\t\t\tis_legendary\n\t\t\tdetails: pokemon_v2_pokemons_aggregate(limit: 1) {\n\t\t\t\tnodes {\n\t\t\t\t\theight\n\t\t\t\t\tweight\n\t\t\t\t\ttypes: pokemon_v2_pokemontypes {\n\t\t\t\t\t\ttype: pokemon_v2_type {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tflavor_text: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: {\n\t\t\t\t\tpokemon_v2_language: { name: { _eq: \"en\" } }\n\t\t\t\t\tpokemon_v2_version: { name: { _eq: \"red\" } }\n\t\t\t\t}\n\t\t\t) {\n\t\t\t\tdescription: flavor_text\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery pokemon_details($id: Int!) {\n\t\tevolution_chain: pokemon_v2_evolutionchain(where: { id: { _eq: $id } }) {\n\t\t\tevolution: pokemon_v2_pokemonspecies(order_by: { id: asc }) {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t\tspecies: pokemon_v2_pokemonspecies(limit: 1) {\n\t\t\tdescription: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: { language_id: { _eq: 9 } }\n\t\t\t\tlimit: 1\n\t\t\t) {\n\t\t\t\tflavor_text\n\t\t\t}\n\t\t}\n\t\tpokemon_stat: pokemon_v2_pokemonstat(where: { pokemon_id: { _eq: $id } }) {\n\t\t\tstat: pokemon_v2_stat {\n\t\t\t\tname\n\t\t\t}\n\t\t\tbase_stat\n\t\t}\n\t\tpokemon_type: pokemon_v2_pokemontype(where: { pokemon_id: { _eq: $id } }) {\n\t\t\ttype: pokemon_v2_type {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t\tefficacies: pokemon_v2_typeefficacy(limit: 18) {\n\t\t\ttarget_type: pokemonV2TypeByTargetTypeId {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t\ttype_efficacy: pokemon_v2_typeefficacies {\n\t\t\t\t\tdamage_factor\n\t\t\t\t\ttype: pokemonV2TypeByTargetTypeId {\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdetails: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {\n\t\t\tname\n\t\t\tid\n\t\t\theight\n\t\t\tweight\n\t\t\tabilities: pokemon_v2_pokemonabilities {\n\t\t\t\tability: pokemon_v2_ability {\n\t\t\t\t\tname\n\t\t\t\t\tdescription: pokemon_v2_abilityflavortexts(\n\t\t\t\t\t\twhere: { language_id: { _eq: 9 } }\n\t\t\t\t\t\tlimit: 1\n\t\t\t\t\t) {\n\t\t\t\t\t\tflavor_text\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery pokemon_details($id: Int!) {\n\t\tevolution_chain: pokemon_v2_evolutionchain(where: { id: { _eq: $id } }) {\n\t\t\tevolution: pokemon_v2_pokemonspecies(order_by: { id: asc }) {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t\tspecies: pokemon_v2_pokemonspecies(limit: 1) {\n\t\t\tdescription: pokemon_v2_pokemonspeciesflavortexts(\n\t\t\t\twhere: { language_id: { _eq: 9 } }\n\t\t\t\tlimit: 1\n\t\t\t) {\n\t\t\t\tflavor_text\n\t\t\t}\n\t\t}\n\t\tpokemon_stat: pokemon_v2_pokemonstat(where: { pokemon_id: { _eq: $id } }) {\n\t\t\tstat: pokemon_v2_stat {\n\t\t\t\tname\n\t\t\t}\n\t\t\tbase_stat\n\t\t}\n\t\tpokemon_type: pokemon_v2_pokemontype(where: { pokemon_id: { _eq: $id } }) {\n\t\t\ttype: pokemon_v2_type {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t\tefficacies: pokemon_v2_typeefficacy(limit: 18) {\n\t\t\ttarget_type: pokemonV2TypeByTargetTypeId {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t\ttype_efficacy: pokemon_v2_typeefficacies {\n\t\t\t\t\tdamage_factor\n\t\t\t\t\ttype: pokemonV2TypeByTargetTypeId {\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdetails: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {\n\t\t\tname\n\t\t\tid\n\t\t\theight\n\t\t\tweight\n\t\t\tabilities: pokemon_v2_pokemonabilities {\n\t\t\t\tability: pokemon_v2_ability {\n\t\t\t\t\tname\n\t\t\t\t\tdescription: pokemon_v2_abilityflavortexts(\n\t\t\t\t\t\twhere: { language_id: { _eq: 9 } }\n\t\t\t\t\t\tlimit: 1\n\t\t\t\t\t) {\n\t\t\t\t\t\tflavor_text\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;