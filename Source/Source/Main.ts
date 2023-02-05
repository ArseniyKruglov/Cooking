import { BulbOnions, FrozenVegetables, Potato, RawMeat, Salt, SourCream, Spice } from './Backbone/Ingredients'
import { Knife, Pan } from './Backbone/Utensils'
import { StewedMeatWithVegitables } from './Dishes/StewedMeatWithVegitables'



(await StewedMeatWithVegitables.cook
(
	new Pan(),
	new Knife(),
	new BulbOnions(),
	new RawMeat(),
	new Salt(),
	new Spice(),
	new Potato(),
	new FrozenVegetables(),
	new SourCream()
)).eat()