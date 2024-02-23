import { TypeColors } from '@repo/types';
import {
	faFire,
	faDroplet,
	faEye,
	faFeather,
	faLeaf,
	faSkull,
	faStar,
	faBolt,
	faMound,
	faIcicles,
	faHandFist,
	faBug,
	faHillRockslide,
	faGhost,
	faDragon,
	faWandSparkles,
	faSheetPlastic,
	faMoon
} from '@fortawesome/free-solid-svg-icons';

const typeColors: TypeColors = {
	fire: {
		chipBackground: 'bg-rose-600',
		cardBackground: 'bg-rose-400',
		textColor: 'text-rose-600',
		icon: faFire
	},
	water: {
		chipBackground: 'bg-blue-500',
		cardBackground: 'bg-blue-400',
		textColor: 'text-blue-500',
		icon: faDroplet
	},
	psychic: {
		chipBackground: 'bg-indigo-500',
		cardBackground: 'bg-indigo-400',
		textColor: 'text-indigo-500',
		icon: faEye
	},
	flying: {
		chipBackground: 'bg-slate-500',
		cardBackground: 'bg-slate-300',
		textColor: 'text-slate-500',
		icon: faFeather
	},
	grass: {
		chipBackground: 'bg-green-700',
		cardBackground: 'bg-green-500',
		textColor: 'text-green-700',
		icon: faLeaf
	},
	poison: {
		chipBackground: 'bg-pink-500',
		cardBackground: 'bg-pink-400',
		textColor: 'text-pink-500',
		icon: faSkull
	},
	normal: {
		chipBackground: 'bg-stone-500',
		cardBackground: 'bg-stone-400',
		textColor: 'text-stone-500',
		icon: faStar
	},
	electric: {
		chipBackground: 'bg-yellow-500',
		cardBackground: 'bg-yellow-400',
		textColor: 'text-yellow-500',
		icon: faBolt
	},
	ground: {
		chipBackground: 'bg-yellow-900',
		cardBackground: 'bg-yellow-700',
		textColor: 'text-yellow-900',
		icon: faMound
	},
	ice: {
		chipBackground: 'bg-cyan-500',
		cardBackground: 'bg-cyan-400',
		textColor: 'text-cyan-500',
		icon: faIcicles
	},
	fighting: {
		chipBackground: 'bg-orange-600',
		cardBackground: 'bg-orange-400',
		textColor: 'text-orange-600',
		icon: faHandFist
	},
	bug: {
		chipBackground: 'bg-lime-500',
		cardBackground: 'bg-lime-400',
		textColor: 'text-lime-500',
		icon: faBug
	},
	rock: {
		chipBackground: 'bg-amber-500',
		cardBackground: 'bg-amber-400',
		textColor: 'text-amber-500',
		icon: faHillRockslide
	},
	ghost: {
		chipBackground: 'bg-violet-300',
		cardBackground: 'bg-violet-200',
		textColor: 'text-violet-300',
		icon: faGhost
	},
	dragon: {
		chipBackground: 'bg-emerald-700',
		cardBackground: 'bg-emerald-500',
		textColor: 'text-emerald-700',
		icon: faDragon
	},
	fairy: {
		chipBackground: 'bg-sky-300',
		cardBackground: 'bg-sky-200',
		textColor: 'text-sky-300',
		icon: faWandSparkles
	},
	steel: {
		chipBackground: 'bg-slate-700',
		cardBackground: 'bg-slate-500',
		textColor: 'text-slate-700',
		icon: faSheetPlastic
	},
	dark: {
		chipBackground: 'bg-gray-900',
		cardBackground: 'bg-gray-700',
		textColor: 'text-gray-900',
		icon: faMoon
	}
};

export default typeColors;
