import { Pokemon } from '@repo/types';
import { Paragraph } from '@repo/ui';
import { Heading, TypeColors } from '@repo/ui';
import { View } from 'react-native';

type StatProps = {
	pokemon: Pokemon;
};

export function Stats({ pokemon }: StatProps) {
	const { pokemon_type, pokemon_stat } = pokemon;

	// HP is calculated slightly different than the rest of the stats
	const calculateHP = (stat: number) => stat * 2 + 204;
	const calculateRestStats = (stat: number) =>
		Math.floor((stat * 2 + 99) * 1.1);
	// calculate the percentage of progress of the base stat to the max stat possible
	const calculateBaseStatProgress = (stat: number, name: string) =>
		Math.round(
			(stat / (name === 'hp' ? calculateHP(stat) : calculateRestStats(stat))) *
				100
		);

	return (
		<View>
			<Heading
				type='H2'
				text='Base Stats'
				styles={`${TypeColors[pokemon_type[0].type.name]['textColor']} mb-6`}
			/>
			<View>
				{pokemon_stat.map(({ base_stat, stat }) => {
					return (
						<View key={stat.name} className='flex-row mb-4 w-full items-center'>
							<Paragraph
								text={stat.name
									.replace('-attack', ' Atk')
									.replace('-defense', ' Def')}
								styles='font-black capitalize w-3/12'
							/>
							<Paragraph text={base_stat} styles='w-2/12 text-center' />
							<View className='w-5/12'>
								<View className='bg-gray-100 w-5/6 h-2 rounded-full mx-auto'>
									<View
										style={{
											width: `${calculateBaseStatProgress(base_stat, stat.name)}%`
										}}
										className={`${TypeColors[pokemon_type[0].type.name]['chipBackground']} h-full rounded-full`}></View>
								</View>
							</View>
							<Paragraph
								text={
									stat.name === 'hp'
										? calculateHP(base_stat)
										: calculateRestStats(base_stat)
								}
								styles='w-2/12 text-center'
							/>
						</View>
					);
				})}
				<View className='flex-row mt-2'>
					<View className='w-3/12'>
						{/* placeholder space below stat names */}
					</View>
					<Paragraph text='Base' styles='w-2/12 text-center font-black' />
					<View className='w-5/12'>
						{/* placeholder space below progress bar */}
					</View>
					<Paragraph text='Max' styles='w-2/12 text-center font-black' />
				</View>
			</View>
		</View>
	);
}
