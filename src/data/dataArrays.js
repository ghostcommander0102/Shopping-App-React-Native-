export const categories = [
	{
		id: 3,
		name: 'Cookies',
		children:[
			{
				id: 5,
				name: 'Cookies',
				phone: "4512456789"
			}
		]
	},
	{
		id: 1,
		name: 'Mexican Food',
		children:[
			{
				id: 6,
				name: 'Cookies',
				phone: "4512456789"
			}
		]
	},
	{
		id: 2,
		name: 'Italian Food',
		children:[
			{
				id: 7,
				name: 'Cookies',
				phone: "4512456789"
			}
		]
	},
	{
		id: 4,
		name: 'Smoothies',
		children:[
			{
				id: 8,
				name: 'Cookies',
				phone: "4512456789"
			}
		]
	},
	{
		id: 0,
		name: 'Pizza',
		children:[
			{
				id: 9,
				name: 'Cookies',
				phone: "4512456789"
			}
		]
	},
];

export const recipes = [
	{
		recipeId: 122,
		subcategoryId: 5,
		title: 'Oatmeal Cookies',
		photo_url: require('../../assets/img/4.jpg'),
		photosArray: [
			require('../../assets/img/4.jpg'),
			require("../../assets/img/3.jpg"),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg')
		],
		date: "2021/8/11",
		price: "$300",
		location: "Los Angels, CA",
		time: '15',
		ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
		description:
			'-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
	},
	{
		recipeId: 3,
		subcategoryId: 6,
		title: 'Triple Berry Smoothie',
		photo_url: require('../../assets/img/3.jpg'),
		photosArray: [
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg')
		],
		date: "2021/8/11",
		price: "$300",
		location: "Los Angels, CA",
		time: '10',
		ingredients: [
			[59, '1'],
			[60, '1/2 lbs'],
			[61, '1/2 liters'],
		],
		description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
	},
	{
		recipeId: 2,
		subcategoryId: 7,
		title: 'Vegan Cookies',
		photo_url: require('../../assets/img/3.jpg'),
		photosArray: [
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg')
		],
		time: '30',
		date: "2021/8/11",
		price: "$300",
		location: "Los Angels, CA",
		ingredients: [
			[0, '2 quarts'],
			[16, '1'],
			[12, '1 cup'],
			[18, '1 cup'],
			[19, '1 teaspoon'],
			[1, '2 teaspoons'],
			[4, '1/4 teaspoons'],
			[7, '1/8 teaspoons'],
			[20, '1/2 teaspoons'],
			[21, '4']
		],
		description:
			'-- Beat the egg and then combine it with water in a bowl. Stir. Combine the flour, salt, MSG, pepper, onion powder and garlic powder in a gallon size zip lock bag. Pound each of the breast filets until about 1/4-inch thick. Then cut into bite sized pieces. Coat each piece with the flour mixture by shaking in the zip lock bag. Remove and coat in the egg mixture. Then coat in the flour mixture again. Shake to coat. Deep fry at 375 degrees for 10-12 minutes, until browned and crispy.'
	},
	{
		recipeId: 3,
		subcategoryId: 8,
		title: 'Pumpkin Spice Cookies',
		photo_url:
		require('../../assets/img/3.jpg'),
		photosArray: [
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg')
		],
		date: "2021/8/11",
		price: "$300",
		location: "Los Angels, CA",
		time: '45',
		ingredients: [
			[0, '2 tablespoons'],
			[22, '1/2'],
			[23, '2 tablespoons'],
			[7, '2 cloves'],
			[3, '1 teaspoon'],
			[24, '1 tablespoon'],
			[25, '1 lb'],
			[1, '2 teaspoons'],
			[4, '2 teaspoons'],
			[26, '15 oz'],
			[27, '8'],
			[28, '2'],
			[29, '1 cup']
		],
		description:
			'-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
	},
	{
		recipeId: 1,
		subcategoryId: 9,
		title: 'Brownies',
		photo_url: require('../../assets/img/3.jpg'),
		photosArray: [
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg')
		],
		date: "2021/8/11",
		price: "$300",
		location: "Los Angels, CA",
		time: '30',
		ingredients: [
			[1, '2 tablespoons'],
			[3, '1 tablespoon'],
			[4, '1 teaspoon'],
			[5, '1/2 teaspoons'],
			[6, '1/2 teaspoons'],
			[7, '1/2 teaspoons'],
			[8, '1/2 teaspoons'],
			[9, '1/2 teaspoons'],
			[10, '1/2 teaspoons'],
			[11, '1/2 teaspoons'],
			[12, '1/2 cups'],
			[13, '1 tablespoon'],
			[14, '1 tablespoon'],
			[15, '2 breasts, 2 thighs, 2 drumsticks, 2 wings'],
			[16, '1'],
			[17, '2 quarts']
		],
		description:
			'-- Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n -- Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.'
	},
	{
		recipeId: 4,
		subcategoryId: 1,
		title: 'Perfect Fish Tacos',
		photo_url: require('../../assets/img/1.jpg'),
		photosArray: [
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg'),
			require('../../assets/img/3.jpg')
		],
		date: "2021/8/11",
		price: "$300",
		location: "Los Angels, CA",
		time: '35',
		ingredients: [
			[30, 'jucie of 1 '],
			[24, '2 teaspoons'],
			[0, '3 tablespoons'],
			[3, '1 teaspoon'],
			[31, '1/2 teaspoons'],
			[32, '1/2 teaspoons'],
			[4, '2 teaspoons'],
			[33, '1/2 lb'],
			[27, '8'],
			[14, '2 teasponns'],
			[34, '1']
		],
		description:
			'-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. '
	}
];

export const ingredients = [
	{
		ingredientId: 0,
		name: 'Oil',
		photo_url: require('../../assets/img/3.jpg')
	},
	{
		ingredientId: 1,
		name: 'Salt',
		photo_url: require('../../assets/img/3.jpg')
	},
	{
		ingredientId: 2,
		name: 'Russet potatoes',
		photo_url: require('../../assets/img/3.jpg')
	},
	{
		ingredientId: 3,
		name: 'Paprika',
		photo_url: require('../../assets/img/3.jpg')
	}
];
