export default function pokedexNumber(id: number) {
	if (id < 10) {
		return id.toString().padStart(3, '0');
	}

	if (id < 100) {
		return id.toString().padStart(3, '0');
	}

	return id.toString();
}
