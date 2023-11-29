import { TypeColors } from '@types';
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
	faSheetPlastic
} from '@fortawesome/free-solid-svg-icons';

const typeColors: TypeColors = {
	fire: {
		chipBackground: 'bg-rose-600',
		cardBackground: 'bg-rose-400',
		icon: faFire
	},
	water: {
		chipBackground: 'bg-blue-500',
		cardBackground: 'bg-blue-400',
		icon: faDroplet
	},
	psychic: {
		chipBackground: 'bg-indigo-500',
		cardBackground: 'bg-indigo-400',
		icon: faEye
	},
	flying: {
		chipBackground: 'bg-slate-500',
		cardBackground: 'bg-slate-300',
		icon: faFeather
	},
	grass: {
		chipBackground: 'bg-green-700',
		cardBackground: 'bg-green-500',
		icon: faLeaf
	},
	poison: {
		chipBackground: 'bg-pink-500',
		cardBackground: 'bg-pink-400',
		icon: faSkull
	},
	normal: {
		chipBackground: 'bg-stone-500',
		cardBackground: 'bg-stone-400',
		icon: faStar
	},
	electric: {
		chipBackground: 'bg-yellow-500',
		cardBackground: 'bg-yellow-400',
		icon: faBolt
	},
	ground: {
		chipBackground: 'bg-yellow-900',
		cardBackground: 'bg-yellow-700',
		icon: faMound
	},
	ice: {
		chipBackground: 'bg-cyan-500',
		cardBackground: 'bg-cyan-400',
		icon: faIcicles
	},
	fighting: {
		chipBackground: 'bg-orange-600',
		cardBackground: 'bg-orange-400',
		icon: faHandFist
	},
	bug: {
		chipBackground: 'bg-lime-500',
		cardBackground: 'bg-lime-400',
		icon: faBug
	},
	rock: {
		chipBackground: 'bg-amber-500',
		cardBackground: 'bg-amber-400',
		icon: faHillRockslide
	},
	ghost: {
		chipBackground: 'bg-violet-300',
		cardBackground: 'bg-violet-200',
		icon: faGhost
	},
	dragon: {
		chipBackground: 'bg-emerald-700',
		cardBackground: 'bg-emerald-500',
		icon: faDragon
	},
	fairy: {
		chipBackground: 'bg-sky-300',
		cardBackground: 'bg-sky-200',
		icon: faWandSparkles
	},
	steel: {
		chipBackground: 'bg-slate-700',
		cardBackground: 'bg-slate-500',
		icon: faSheetPlastic
	}
};

export default typeColors;
