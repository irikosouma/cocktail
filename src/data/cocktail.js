const cocktail = [
    {
        id: 1,
        name: "A1",
        category: "Cocktail",
        info: "Alcoholic",
        glass: "Cocktail glass",
        instructions: "Pour All Ingredients Into A Cocktail Shaker, Mix And Serve Over Ice Into A Chilled Glass.",
        ingredients: "Gin Grand Marnier Lemon Juice Grenadine",
        images: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
    },
    {
        id: 2,
        name: "ABC",
        category: "Shot",
        info: "Alcoholic",
        glass: "Shot Glass",
        instructions: "Layered In A Shot Glass.",
        ingredients: "Amaretto Baileys Irish Cream Cognac",
        images: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg"
    },
    {
        id: 3,
        name: "Ace",
        category: "Cocktail",
        info: "Alcoholic",
        glass: "Martini Glass",
        instructions: "Shake All The Ingredients In A Cocktail Shaker And Ice Then Strain In A Cold Glass.",
        ingredients: "Gin Grenadine Heavy Cream Milk Egg White",
        images: "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg"
    },
    {
        id: 4,
        name: "Adam",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Cocktail Glass",
        instructions: "In A Shaker Half-Filled With Ice Cubes, Combine All Of The Ingredients. Shake Well. Strain Into A Cocktail Glass.",
        ingredients: "Dark Rum Lemon Juice Grenadine",
        images: "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg"
    },
    {
        id: 5,
        name: "AT&T",
        category: " Ordinary Drink",
        info: "Alcoholic",
        glass: "Highball Glass",
        instructions: "Pour Vodka And Gin Over Ice, Add Tonic And Stir",
        ingredients: "Absolut Vodka Gin Tonic Water",
        images: "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg"
    },
    {
        id: 6,
        name: "ACID",
        category: "Shot",
        info: "Alcoholic",
        glass: "Shot Glass",
        instructions: "Poor In The 151 First Followed By The 101 Served With A Coke Or Dr Pepper Chaser.",
        ingredients: "151 Proof Rum Wild Turkey",
        images: "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg"
    },
    {
        id: 7,
        name: "A. J.",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Cocktail Glass",
        instructions: "Shake Ingredients With Ice, Strain Into A Cocktail Glass, And Serve.",
        ingredients: "Applejack Grapefruit Juice",
        images: "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg"
    },
    {
        id: 8,
        name: "Karsk",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Highball Glass",
        instructions: "Put A Copper Coin In A Coffe-Cup And Fill Up With Coffee Until You No Longer See The Coin, Then Add Alcohol Until You See The Coin. Norwegian Speciality.",
        ingredients: "Coffee Grain Alcohol",
        images: "https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg"
    },
    {
        id: 9,
        name: "Melya",
        category: " Coffee / Tea",
        info: "Non Alcoholic",
        glass: "Coffee Mug",
        instructions: "Brew Espresso. In A Coffee Mug, Place 1 Teaspoon Of Unsweetened Powdered Cocoa, Then Cover A Teaspoon With Honey And Drizzle It Into The Cup. Stir While The Coffee Brews, This Is The Fun Part. The Cocoa Seems To Coat The Honey Without Mixing, So You Get A Dusty, Sticky Mass That Looks As Though It Will Never Mix. Then All At Once, Presto! It Looks Like Dark Chocolate Sauce. Pour Hot Espresso Over The Honey, Stirring To Dissolve. Serve With Cream.",
        ingredients: "Espresso Honey Cocoa Powder",
        images: "https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg"
    },
    {
        id: 10,
        name: "Affair",
        category: "Ordinary Drink",
        info: " Alcoholic",
        glass: "Highball Glass",
        instructions: "Pour Schnapps, Orange Juice, And Cranberry Juice Over Ice In A Highball Glass. Top With Club Soda And Serve.",
        ingredients: "Strawberry Schnapps Orange Juice Cranberry Juice Club Soda",
        images: 'https://www.thecocktaildb.com/images/media/drink/h5za6y1582477994.jpg'
    },
    {
        id: 11,
        name: "Boxcar",
        category: "Ordinary Drink",
        info: " Alcoholic",
        glass: "Whiskey Sour Glass",
        instructions: "In A Shaker Half-Filled With Ice Cubes, Combine All Of The Ingredients. Shake Well. Strain Into A Sour Glass.",
        ingredients: "Gin Triple Sec Lemon Juice Grenadine Egg White",
        images: "https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg"
    },
    {
        id: 12,
        name: "Orgasm",
        category: "Ordinary Drink",
        info: " Alcoholic",
        glass: "Cocktail Glass",
        instructions: "Shake All Ingredients With Ice, Strain Into A Chilled Cocktail Glass, And Serve.",
        ingredients: " Creme De Cacao Amaretto Triple Sec Vodka Light Cream",
        images: "https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg"
    },
    {
        id: 13,
        name: "Apello",
        category: "Other/Unknown",
        info: " Non Alcoholic",
        glass: "Collins Glass",
        instructions: "Stirr. Grnish With Maraschino Cherry.",
        ingredients: "Orange Juice Grapefruit Juice Apple Juice Maraschino Cherry",
        images: "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg"
    },
    {
        id: 14,
        name: "Avalon",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Highball Glass",
        instructions: "Fill A Tall Glass With Ice. Layer The Finlandia Vodka, Lemon And Apple Juices, Pisang Ambon, And Top Up With Lemonade. Stir Slightly And Garnish With A Spiralled Cucumber Skin And A Red Cherry. The Cucumber Provides Zest And Looks Attractive. This Drink, Created By Timo Haimi, Took First Prize In The 1991 Finlandia Vodka Long Drink Competition.",
        ingredients: " Vodka Pisang Ambon Apple Juice Lemon Juice Lemonade",
        images: "https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg"
    },
    {
        id: 15,
        name: "Casino",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Cocktail Glass",
        instructions: "Pour All Ingredients Into Shaker With Ice Cubes. Shake Well. Strain Into Chilled Cocktail Glass. Garnish With A Lemon Twist And A Maraschino Cherry. Serve Without A Straw.",
        ingredients: "Gin Maraschino Liqueur Lemon Juice Orange Bitters Cherry",
        images: "https://www.thecocktaildb.com/images/media/drink/1mvjxg1504348579.jpg"
    },
    {
        id: 16,
        name: "Radler",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Highball Glass",
        instructions: "Pour Beer Into Large Mug, Slowly Add The 7-Up (Or Sprite).",
        ingredients: " Beer 7-Up",
        images: "https://www.thecocktaildb.com/images/media/drink/xz8igv1504888995.jpg"
    },
    {
        id: 17,
        name: "Mimosa",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Champagne Flute",
        instructions: "Ensure Both Ingredients Are Well Chilled, Then Mix Into The Glass. Serve Cold.",
        ingredients: "Champagne Orange Juice",
        images: "https://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg"
    },
    {
        id: 18,
        name: "Paloma",
        category: "Cocktail",
        info: "Alcoholic",
        glass: "Collins Glass",
        instructions: "Stir Together And Serve Over Ice.",
        ingredients: "Grape Soda Tequila",
        images: "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg"
    },
    {
        id: 19,
        name: "Abilene",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Highball Glass",
        instructions: "Pour All Of The Ingredients Into A Highball Glass Almost Filled With Ice Cubes. Stir Well.",
        ingredients: "Dark Rum Peach Nectar Orange Juice",
        images: "https://www.thecocktaildb.com/images/media/drink/smb2oe1582479072.jpg"
    },
    {
        id: 20,
        name: "Almeria",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Cocktail Glass",
        instructions: "In A Shaker Half-Filled With Ice Cubes, Combine All Of The Ingredients. Shake Well. Strain Into A Cocktail Glass.",
        ingredients: "Dark Rum Kahlua Egg White",
        images: "https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg"
    },
    {
        id: 21,
        name: "Mai Tai",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Collins Glass",
        instructions: "Shake All Ingredients With Ice. Strain Into Glass. Garnish And Serve With Straw.",
        ingredients: "Light Rum Orgeat Syrup Triple Sec Sweet And Sour Cherry",
        images: "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg"
    },
    {
        id: 22,
        name: "Martini",
        category: "Cocktail",
        info: "Alcoholic",
        glass: "Cocktail Glass",
        instructions: "Straight: Pour All Ingredients Into Mixing Glass With Ice Cubes. Stir Well. Strain In Chilled Martini Cocktail Glass. Squeeze Oil From Lemon Peel Onto The Drink, Or Garnish With Olive.",
        ingredients: "Gin Dry Vermouth Olive",
        images: "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg"
    },
    {
        id: 23,
        name: "Sazerac",
        category: "Cocktail",
        info: "Alcoholic",
        glass: "Old-Fashioned Glass",
        instructions: "Rinse A Chilled Old-Fashioned Glass With The Absinthe, Add Crushed Ice, And Set It Aside. Stir The Remaining Ingredients Over Ice And Set It Aside. Discard The Ice And Any Excess Absinthe From The Prepared Glass, And Strain The Drink Into The Glass. Add The Lemon Peel For Garnish.",
        ingredients: "Ricard Sugar Peychaud Bitters Water Bourbon",
        images: "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg"
    },
    {
        id: 24,
        name: "Sidecar",
        category: "Cocktail",
        info: "Alcoholic",
        glass: "Cocktail Glass",
        instructions: "Pour All Ingredients Into Cocktail Shaker Filled With Ice. Shake Well And Strain Into Cocktail Glass.",
        ingredients: "Cognac Cointreau Lemon Juice",
        images: "https://www.thecocktaildb.com/images/media/drink/x72sik1606854964.jpg"
    },
    {
        id: 25,
        name: "Veteran",
        category: "Ordinary Drink",
        info: "Alcoholic",
        glass: "Old-Fashioned Glass",
        instructions: "Pour The Rum And Cherry Brandy Into An Old-Fashioned Glass Almost Filled With Ice Cubes. Stir Well.",
        ingredients: " Dark Rum Cherry Brandy",
        images: "https://www.thecocktaildb.com/images/media/drink/iwml9t1492976255.jpg"
    },

]
export default cocktail