import getMultipliers from '@/app/internal/getMultipliers';
import { Pokemon } from '@repo/types';
import { TypeChip } from '@repo/ui';
import { TypeColors, Paragraph, Heading } from '@repo/ui';
import { View } from 'react-native';

type AboutProps = {
	pokemon: Pokemon;
};

export function About({ pokemon }: AboutProps) {
	const { details, species, pokemon_type } = pokemon;

	const typeNames = pokemon_type.map(({ type }) => type.name);
	const multipliers = getMultipliers(typeNames);
	const weaknesses: string[] = [];
	for (const [name, multiplier] of Object.entries(multipliers.defense)) {
		if (multiplier <= 1) continue;
		weaknesses.push(name);
	}

	return (
		<>
			<Paragraph
				text={species[0].description[0].flavor_text
					.replaceAll('\f', ' ')
					.replaceAll('\n', ' ')}
			/>
			<Heading
				type='H2'
				text='Pokedex Data'
				styles={`${TypeColors[pokemon_type[0].type.name]['textColor']} mb-8 mt-6`}
			/>
			<View className='gap-5 w-full'>
				<View className='flex-row items-center'>
					<Paragraph text='Height' styles='w-2/5 font-black' />
					<Paragraph text={`${details[0].height / 10}m`} styles='w-3/5' />
				</View>
				<View className='flex-row items-center'>
					<Paragraph text='Weight' styles='w-2/5 font-black' />
					<Paragraph text={`${details[0].weight / 10}kg`} styles='w-3/5' />
				</View>
				<View className='flex-row'>
					<Paragraph text='Abilities' styles='w-2/5 font-black' />
					<View className='flex-col gap-5 w-3/5'>
						{details[0].abilities.map(({ ability }, index) => (
							<View key={ability.name} className='flex-col'>
								<Paragraph
									styles='capitalize mb-1'
									text={`${index + 1}. ${ability.name}`}
								/>
								<Paragraph
									styles='italic text-sm'
									text={ability.description[0].flavor_text.replaceAll('\n', '')}
								/>
							</View>
						))}
					</View>
				</View>
				<View className='flex-row'>
					<Paragraph text='Weaknesses' styles='w-2/5 font-black' />
					<View className='flex-row flex-wrap w-3/5 gap-3'>
						{weaknesses.map((weakness) => (
							<TypeChip key={weakness} type={weakness} />
						))}
					</View>
				</View>
			</View>
		</>
	);
}
