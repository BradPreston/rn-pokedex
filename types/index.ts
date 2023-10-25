export type Pokemon = {
	__typename: string;
	id: number;
	name: string;
	height: number;
	weight: number;
	abilities: {
		nodes: Ability[];
	};
	stats: Stat[];
	types: Type[];
	pokemonSprites: Sprite[];
};

export type Species = {
	name: string;
	is_legendary: boolean;
	is_mythical: boolean;
	pokemon: {
		nodes: Pokemon[];
	};
	habitat: {
		name: string;
	};
	flavorText: FlavorText[];
};

export type SimplePokemon = {
	id: number;
	name: string;
};

type Ability = {
	ability: {
		name: string;
	};
};

type Stat = {
	base_stat: number;
	stat: {
		name: string;
	};
};

type Type = {
	slot: number;
	type: {
		name: string;
	};
};

type Sprite = {
	sprites: string;
};

type FlavorText = {
	flavor_text: string;
};
