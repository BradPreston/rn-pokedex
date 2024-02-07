import { Pokemon } from '@repo/types';
import { TypeColors, Paragraph, Heading, TypeChip } from '@repo/ui';
import { Image, View } from 'react-native';

type IDHeaderProps = {
	pokemon: Pokemon;
	id: string;
};

export function Header({ pokemon, id }: IDHeaderProps) {
	const { pokemon_type, details } = pokemon;
	return (
		<View
			className={`${TypeColors[pokemon_type[0].type.name]['cardBackground']} flex-row pt-10 pb-20 items-center justify-center gap-10 relative`}>
			<Image
				className='h-40 aspect-square'
				source={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
				}}
			/>
			<View className='justify-center gap-4'>
				<Paragraph
					text={`#${details[0].id.toString().padStart(3, '0')}`}
					styles='font-[Roboto-Black]'
				/>
				<Heading
					type='H1'
					text={details[0].name}
					styles='capitalize text-white'
					shadow
				/>
				<View className='flex-row gap-2'>
					{pokemon_type.map(({ type }) => (
						<TypeChip key={type.id} type={type.name} />
					))}
				</View>
			</View>
			<View className='absolute -z-10 self-start -left-10'>
				<Paragraph
					text={details[0].name.toUpperCase()}
					styles='absolute text-white text-9xl font-[Roboto-Black] opacity-10 w-[1500px]'
				/>
			</View>
		</View>
	);
}
