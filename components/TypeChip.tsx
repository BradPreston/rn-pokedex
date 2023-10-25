import { View, Text } from 'react-native';

type TypeColors = {
	[key: string]: {
		bg: string;
	};
};

type Props = {
	type: string;
};

const typeColors: TypeColors = {
	fire: {
		bg: 'bg-rose-600'
	},
	water: {
		bg: 'bg-blue-500'
	},
	psychic: {
		bg: 'bg-indigo-500'
	},
	flying: {
		bg: 'bg-slate-500'
	},
	grass: {
		bg: 'bg-green-500'
	},
	poison: {
		bg: 'bg-pink-500'
	},
	normal: {
		bg: 'bg-stone-500'
	},
	electric: {
		bg: 'bg-yellow-500'
	},
	ground: {
		bg: 'bg-orange-600'
	},
	ice: {
		bg: 'bg-cyan-500'
	},
	fighting: {
		bg: 'bg-yellow-900'
	},
	bug: {
		bg: 'bg-lime-500'
	},
	rock: {
		bg: 'bg-amber-500'
	},
	ghost: {
		bg: 'bg-violet-400'
	},
	dragon: {
		bg: 'bg-emerald-700'
	},
	fairy: {
		bg: 'bg-sky-400'
	},
	steel: {
		bg: 'bg-slate-700'
	}
};

export default function TypeChip({ type }: Props) {
	return (
		<View
			className={`${typeColors[type]['bg']} w-24 h-8 flex items-center justify-center rounded-2xl`}>
			<Text className='text-white text-xl capitalize'>{type}</Text>
		</View>
	);
}
