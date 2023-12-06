export type PokemonArr = {
	pokemon: Pokemon[];
};

export type Pokemon = {
	id: number;
	name: string;
	is_legendary?: boolean;
	details: {
		nodes: Details[];
	};
	flavor_text: FlavorText[];
};

type Details = {
	height: number;
	weight: number;
	types: Type[];
};

type Type = {
	type: {
		name: string;
	};
};

type FlavorText = {
	description: string;
};
