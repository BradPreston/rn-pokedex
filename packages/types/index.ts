import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type PokemonArr = {
	pokemon: Pokemon[];
};

export type AllPokemon = {
	pokemon: {
		name: string;
		id: number;
		types: Type[];
	}[];
};

export type Pokemon = {
	details: Details[];
	efficacies: Efficacy[];
	evolution_chain: EvolutionChain[];
	pokemon_stat: Stat[];
	pokemon_type: Type[];
	species: Species[];
};

type Details = {
	name: string;
	id: number;
	height: number;
	weight: number;
	abilities: Ability[];
};

type Ability = {
	ability: {
		name: string;
		description: FlavorText[];
	};
};

type Efficacy = {
	target_type: {
		id: number;
		name: string;
		type_efficacy: TypeEfficacy[];
	};
};

type TypeEfficacy = {
	damage_factor: number;
	type: {
		name: string;
	};
};

type EvolutionChain = {
	evolution: Evolution[];
};

type Evolution = {
	name: string;
	id: number;
};

type Stat = {
	base_stat: number;
	stat: {
		name: string;
	};
};

type Type = {
	type: {
		name: string;
		id?: number;
	};
};

type Species = {
	description: Description[];
};

type Description = {
	flavor_text: string;
};

type FlavorText = {
	flavor_text: string;
};

export type TypeColors = {
	[key: string]: {
		chipBackground: string;
		cardBackground: string;
		textColor: string;
		icon: IconDefinition;
	};
};
