'use client';

import { Card } from '@repo/ui';

import styles from '../styles/index.module.css';
import { GET_ALL_POKEMON, PokemonQuery } from '@repo/query';
import { PokemonArr } from '@repo/types';

export default function Web() {
	const { data } = PokemonQuery<PokemonArr>('allPokemon', GET_ALL_POKEMON);

	return (
		<div className={styles.container}>
			<div className={styles.pokemonList}>
				{data &&
					data.pokemon.map((pokemon) => (
						<Card
							key={pokemon.id}
							pokemon={pokemon}
							image={'/images/white-pokeball-bg.png'}
						/>
					))}
			</div>
		</div>
	);
}
