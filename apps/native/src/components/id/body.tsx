import { Pressable, View, Image } from 'react-native';
import { About, Stats, Evolution } from './tabs';
import { Paragraph } from '@repo/ui';
import { useState } from 'react';
import { Nav } from '@expo/html-elements';
import { Pokemon } from '@repo/types';

type CurrentTab = 'About' | 'Stats' | 'Evolution';

type BodyProps = {
	pokemon: Pokemon;
};

export function Body({ pokemon }: BodyProps) {
	const [currentTab, setCurrentTab] = useState<CurrentTab>('About');

	const handlePress = (tab: CurrentTab) => setCurrentTab(tab);

	const pokeballImage = require('../../../assets/white-pokeball-bg.png');

	return (
		<View className='bg-white rounded-t-2xl h-full -top-10'>
			<Nav className='flex-row gap-5 self-center -top-6 w-full justify-between px-10 relative'>
				<Pressable
					onPress={() => handlePress('About')}
					className='items-center'>
					<Paragraph
						styles={`${currentTab === 'About' ? 'opacity-100' : 'opacity-60'} text-white font-[Roboto-Black]`}
						text='About'
					/>
					{currentTab === 'About' && (
						<Image
							className='h-24 w-24 aspect-square opacity-10 absolute -top-6 overflow-visible'
							source={pokeballImage}
						/>
					)}
				</Pressable>
				<Pressable
					onPress={() => handlePress('Stats')}
					className='items-center'>
					<Paragraph
						styles={`${currentTab === 'Stats' ? 'opacity-100' : 'opacity-60'} text-white font-[Roboto-Black]`}
						text='Stats'
					/>
					{currentTab === 'Stats' && (
						<Image
							className='h-24 w-24 aspect-square opacity-10 absolute -top-6 overflow-visible'
							source={pokeballImage}
						/>
					)}
				</Pressable>
				<Pressable
					onPress={() => handlePress('Evolution')}
					className='items-center'>
					<Paragraph
						styles={`${currentTab === 'Evolution' ? 'opacity-100' : 'opacity-60'} text-white font-[Roboto-Black]`}
						text='Evolution'
					/>
					{currentTab === 'Evolution' && (
						<Image
							className='h-24 w-24 aspect-square opacity-10 absolute -top-6 overflow-visible'
							source={pokeballImage}
						/>
					)}
				</Pressable>
			</Nav>
			<View className='px-4'>
				{currentTab === 'About' && <About pokemon={pokemon} />}
				{currentTab === 'Stats' && <Stats pokemon={pokemon} />}
				{currentTab === 'Evolution' && <Evolution />}
			</View>
		</View>
	);
}
