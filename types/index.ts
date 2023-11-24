// export type Pokemon = {
// 	__typename: string;
// 	id: number;
// 	name: string;
// 	height: number;
// 	weight: number;
// 	abilities: {
// 		nodes: Ability[];
// 	};
// 	stats: Stat[];
// 	types: Type[];
// 	pokemonSprites: Sprite[];
// };

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
	flavor_text: Description[];
};

type Description = {
	description: string;
};

// export type SpeciesArr = {
// 	species: Species[];
// };

// export type Species = {
// 	name: string;
// 	is_legendary: boolean;
// 	is_mythical: boolean;
// 	pokemon: {
// 		nodes: Pokemon[];
// 	};
// 	habitat: {
// 		name: string;
// 	};
// 	flavorText: FlavorText[];
// };

// export type SimplePokemonArr = {
// 	pokemon: SimplePokemon[];
// };

// export type SimplePokemon = {
// 	id: number;
// 	name: string;
// };

// type Ability = {
// 	ability: {
// 		name: string;
// 	};
// };

// type Stat = {
// 	base_stat: number;
// 	stat: {
// 		name: string;
// 	};
// };

// // type Type = {
// // 	slot: number;
// // 	type: {
// // 		name: string;
// // 	};
// // };

// type Sprite = {
// 	sprites: string;
// };

// type FlavorText = {
// 	flavor_text: string;
// };
