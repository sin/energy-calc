import { ADJUSTED_POWER_TABLE_LABELS } from './constants';
import { powerToEnergy, round, addLabel, transpose } from './utils';

const labels = ADJUSTED_POWER_TABLE_LABELS.slice(2);

export const createAdjustedEnergyTable = (adjustedPowerTable, hydro, reserveEnergy) => {
	let adjustedEnergyList = transpose(adjustedPowerTable)
		.slice(2)
		.map(row =>
			row.reduce((total, value, index, array) => {
				const intervalPower = (value + array[index - 1]) / 2;
				const intervalEnergy = powerToEnergy(intervalPower) / array.length;
				return index === 1 ? intervalEnergy : total + intervalEnergy;
			})
		)
		.map(round);

	const surplus = round(adjustedEnergyList[3] + (hydro - adjustedEnergyList[2] + reserveEnergy));
	adjustedEnergyList[3] = surplus;

	return {
		adjustedEnergyTable: adjustedEnergyList.map(addLabel(labels)),
		energyBalance: surplus
	};
};
