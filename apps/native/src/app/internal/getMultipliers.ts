import allTypes from '../../data/allTypes';

export default function getMultipliers(types: string[]) {
	type Multipliers = {
		defense: {
			[key: string]: number;
		};
		attack: {
			[key: string]: number;
		};
	};
	var multipliers: Multipliers = {
		defense: {},
		attack: {}
	};
	types.forEach((type) => {
		var damage_relations = allTypes[type];
		var no_damage_to = damage_relations.attack.zero;
		var no_damage_from = damage_relations.defense.zero;
		var half_damage_to = damage_relations.attack.half;
		var half_damage_from = damage_relations.defense.half;
		var double_damage_to = damage_relations.attack.double;
		var double_damage_from = damage_relations.defense.double;
		no_damage_to.forEach((type) => {
			if (multipliers.attack.hasOwnProperty(type)) {
				multipliers.attack[type] = multipliers.attack[type] * 0;
			} else {
				multipliers.attack[type] = 0;
			}
		});
		no_damage_from.forEach((type) => {
			if (multipliers.defense.hasOwnProperty(type)) {
				multipliers.defense[type] = multipliers.defense[type] * 0;
			} else {
				multipliers.defense[type] = 0;
			}
		});
		half_damage_to.forEach((type) => {
			if (multipliers.attack.hasOwnProperty(type)) {
				multipliers.attack[type] = multipliers.attack[type] * 0.5;
			} else {
				multipliers.attack[type] = 0.5;
			}
		});
		half_damage_from.forEach((type) => {
			if (multipliers.defense.hasOwnProperty(type)) {
				multipliers.defense[type] = multipliers.defense[type] * 0.5;
			} else {
				multipliers.defense[type] = 0.5;
			}
		});
		double_damage_to.forEach((type) => {
			if (multipliers.attack.hasOwnProperty(type)) {
				multipliers.attack[type] = multipliers.attack[type] * 2;
			} else {
				multipliers.attack[type] = 2;
			}
		});
		double_damage_from.forEach((type) => {
			if (multipliers.defense.hasOwnProperty(type)) {
				multipliers.defense[type] = multipliers.defense[type] * 2;
			} else {
				multipliers.defense[type] = 2;
			}
		});
	});
	return multipliers;
}
