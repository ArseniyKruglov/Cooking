import { BulbOnions, FrozenVegetables, Potato, RawMeat, Salt, SourCream, Spice } from '../Backbone/Ingredients'
import { Dish } from '../Backbone/Dish'
import { Knife, Pan } from '../Backbone/Utensils'



export class StewedMeatWithVegitables extends Dish
{
	static cook
	(
		pan: Pan,
		knife: Knife,
		bulbOnions: BulbOnions,
		rawMeat: RawMeat,
		salt: Salt,
		spice: Spice,
		potato: Potato,
		frozenVegetables: FrozenVegetables,
		sourCream: SourCream
	): Promise<Dish>
	{
		// Bulb onions
		bulbOnions.cut(knife)					// TODO: Cut into cubes
		pan.put(bulbOnions)
		pan.mix()

		// Start mixing every minute
		setInterval(() => { pan.mix() }, 60 * 1000)

		// Raw meat
		rawMeat.wash()
		rawMeat.cut(knife)
		pan.put(rawMeat)
		pan.mix()

		// Spices
		pan.put(salt)
		pan.put(spice)

		// Potato
		potato.cut(knife)					// TODO: 1 cm by 1 cm
		pan.put(potato)
		pan.put(salt)
		pan.mix()

		// Frozen vegetables
		pan.put(frozenVegetables)
		pan.mix()

		// Sour cream
		pan.put(sourCream)					// TODO: Tablespoon
		pan.mix()



		pan.lid.close()

		const cookTime: number = 30 * 60 * 1000
		return pan.fire(cookTime, 225)
	}
}