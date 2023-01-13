import { Misdemeanour } from '../types/misdemeanours.types';
import { generateMisdemeanours } from './generate_misdemeanours';

export async function getMisdemeanours(
	amount: number
): Promise<Misdemeanour[]> {
	// in the real world we might call a db here, but we have a function
	// that generates random misdemeanours so that'll do instead
	return await generateMisdemeanours(amount);
}
