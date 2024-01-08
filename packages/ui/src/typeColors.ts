/*
The cardBackground and textColor are the same rgb value, but are left in just in case I end up going back to using tailwind in the UI package
*/

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
	faSheetPlastic
} from '@fortawesome/free-solid-svg-icons';

const typeColors: TypeColors = {
	fire: {
		chipBackground: 'rgb(225 29 72)', // bg-rose-600
		cardBackground: 'rgb(251 113 133)', // bg-rose-400
		textColor: 'rgb(251 113 133)', // text-rose-400
		icon: faFire
	},
	water: {
		chipBackground: 'rgb(59 130 246)', // bg-blue-500
		cardBackground: 'rgb(96 165 250)', // bg-blue-400
		textColor: 'rgb(96 165 250)', // text-blue-400
		icon: faDroplet
	},
	psychic: {
		chipBackground: 'rgb(99 102 241)', // bg-indigo-500
		cardBackground: 'rgb(129 140 248)', // bg-indigo-400
		textColor: 'rgb(129 140 248)', // text-indigo-400
		icon: faEye
	},
	flying: {
		chipBackground: 'rgb(100 116 139)', // bg-slate-500
		cardBackground: 'rgb(203 213 225)', // bg-slate-300
		textColor: 'rgb(203 213 225)', // text-slate-300
		icon: faFeather
	},
	grass: {
		chipBackground: 'rgb(21 128 61)', // bg-green-700
		cardBackground: 'rgb(34 197 94)', // bg-green-500
		textColor: 'rgb(34 197 94)', // text-green-500
		icon: faLeaf
	},
	poison: {
		chipBackground: 'rgb(236 72 153)', // bg-pink-500
		cardBackground: 'rgb(249 168 212)', // bg-pink-400
		textColor: 'rgb(249 168 212)', // text-pink-400
		icon: faSkull
	},
	normal: {
		chipBackground: 'rgb(120 113 108)', // bg-stone-500
		cardBackground: 'rgb(168 162 158)', // bg-stone-400
		textColor: 'rgb(168 162 158)', // text-stone-400
		icon: faStar
	},
	electric: {
		chipBackground: 'rgb(234 179 8)', // bg-yellow-500
		cardBackground: 'rgb(250 204 21)', // bg-yellow-400
		textColor: 'rgb(250 204 21)', // text-yellow-400
		icon: faBolt
	},
	ground: {
		chipBackground: 'rgb(113 63 18)', // bg-yellow-900
		cardBackground: 'rgb(161 98 7)', // bg-yellow-700
		textColor: 'rgb(161 98 7)', // text-yellow-700
		icon: faMound
	},
	ice: {
		chipBackground: 'rgb(6 182 212)', // bg-cyan-500
		cardBackground: 'rgb(34 211 238)', // bg-cyan-400
		textColor: 'rgb(34 211 238)', // text-cyan-400
		icon: faIcicles
	},
	fighting: {
		chipBackground: 'rgb(234 88 12)', // bg-orange-600
		cardBackground: 'rgb(251 146 60)', // bg-orange-400
		textColor: 'rgb(251 146 60)', // text-orange-400
		icon: faHandFist
	},
	bug: {
		chipBackground: 'rgb(132 204 22)', // bg-lime-500
		cardBackground: 'rgb(163 230 53)', // bg-lime-400
		textColor: 'rgb(163 230 53)', // text-lime-400
		icon: faBug
	},
	rock: {
		chipBackground: 'rgb(245 158 11)', // bg-amber-500
		cardBackground: 'rgb(251 191 36)', // bg-amber-400
		textColor: 'rgb(251 191 36)', // text-amber-400
		icon: faHillRockslide
	},
	ghost: {
		chipBackground: 'rgb(196 181 253)', // bg-violet-300
		cardBackground: 'rgb(221 214 254)', // bg-violet-200
		textColor: 'rgb(221 214 254)', // text-violet-200
		icon: faGhost
	},
	dragon: {
		chipBackground: 'rgb(4 120 87)', // bg-emerald-700
		cardBackground: 'rgb(16 185 129)', // bg-emerald-500
		textColor: 'rgb(16 185 129)', // text-emerald-500
		icon: faDragon
	},
	fairy: {
		chipBackground: 'rgb(125 211 252)', // bg-sky-300
		cardBackground: 'rgb(186 230 253)', // bg-sky-200
		textColor: 'rgb(186 230 253)', // text-sky-200
		icon: faWandSparkles
	},
	steel: {
		chipBackground: 'rgb(51 65 85)', // bg-slate-700
		cardBackground: 'rgb(100 116 139)', // bg-slate-500
		textColor: 'rgb(100 116 139)', // text-slate-500
		icon: faSheetPlastic
	}
};

export default typeColors;
