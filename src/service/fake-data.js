
/*

Example Request and Response
GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2


{
    "offset": 0,
    "number": 2,
    "results": [
        {
            "id": 716429,
            "calories": 584,
            "carbs": "84g",
            "fat": "20g",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "imageType": "jpg",
            "protein": "19g",
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
        },
        {
            "id": 715538,
            "calories": 521,
            "carbs": "69g",
            "fat": "10g",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "imageType": "jpg",
            "protein": "35g",
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta"
        }
    ],
    "totalResults": 86
}

The API response will give you arrays of usedIngredients, missedIngredients, and unusedIngredients for each returned recipe. This diagram shows you what they mean:

*/


/*

Example Request and Response
GET https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2


[
    {
        "calories": 210,
        "carbs": "43g",
        "fat": "3g",
        "id": 90629,
        "image": "https://spoonacular.com/recipeImages/90629-312x231.jpg",
        "imageType": "jpg",
        "protein": "1g",
        "title": "Baked Apples in White Wine"
    },
    {
        "calories": 226,
        "carbs": "33g",
        "fat": "10g",
        "id": 284420,
        "image": "https://spoonacular.com/recipeImages/284420-312x231.jpg",
        "imageType": "jpg",
        "protein": "2g",
        "title": "Chocolate Silk Pie with Marshmallow Meringue"
    }
]

*/


const data = {
    results: [
      {
        id: 487553,
        title: "Sambar – How to make Vegetable Sambar | Quick Sambar",
        readyInMinutes: 45,
        servings: 3,
        sourceUrl: "http://www.vegrecipesofindia.com/sambhar-recipe-a-method-made-easy/",
        openLicense: 0,
        image: "Sambar--How-to-make-Vegetable-Sambar---Quick-Sambar-487553.jpg"
      },
      {
        id: 722403,
        title: "Sambar (South Indian Onion Stew)",
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: "http://www.saveur.com/article/Recipes/Classic-Sambar-Onion-Stew",
        openLicense: 0,
        image: "sambar-south-indian-onion-stew-722403.jpg"
      },
      {
        id: 220438,
        title: "Sambar",
        readyInMinutes: 40,
        servings: 4,
        sourceUrl: "https://www.bbcgoodfood.com/recipes/2150644/sambar",
        openLicense: 0,
        image: "Sambar-220438.jpg"
      },
      {
        id: 569486,
        title: "Grilled Asian Chicken with Peanut Noodles and Cucumber Sambal",
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: "http://www.melskitchencafe.com/grilled-asian-chicken-with-peanut-noodles/",
        openLicense: 0,
        image: "grilled-asian-chicken-with-peanut-noodles-and-cucumber-sambal-569486.jpg"
      },
      {
        id: 564705,
        title: "Baby Potato Sambal | Baby Potatoes s",
        readyInMinutes: 25,
        servings: 2,
        sourceUrl: "http://www.ticklingpalates.com/2013/06/baby-potato-sambal-recipe-baby-potatoes.html",
        openLicense: 0,
        image: "Baby-Potato-Sambal---Baby-Potatoes-s-564705.jpg"
      },
      {
        id: 746248,
        title: "Hi-Wire Hot Vegetable Curry with Mango Salsa Sambal",
        readyInMinutes: 110,
        servings: 6,
        sourceUrl: "http://www.foodnetwork.com/recipes/hi-wire-hot-vegetable-curry-with-mango-salsa-sambal-recipe.html",
        openLicense: 0,
        image: "hi-wire-hot-vegetable-curry-with-mango-salsa-sambal-746248.jpeg"
      },
      {
        id: 606462,
        title: "Potatoes and okra in sambal sauce",
        readyInMinutes: 25,
        servings: 2,
        sourceUrl: "http://feastasia.casaveneracion.com/potatoes-okra-sambal-sauce/",
        openLicense: 0,
        image: "Potatoes-and-okra-in-sambal-sauce-606462.jpg"
      },
      {
        id: 339044,
        title: "Chicken and Potato Napoleon with Spicy Tomato Sambal Sauce",
        readyInMinutes: 50,
        servings: 4,
        sourceUrl: "http://www.foodnetwork.com/recipes/dzintra-dzenis/chicken-and-potato-napoleon-with-spicy-tomato-sambal-sauce-recipe.html",
        openLicense: 0,
        image: "chicken-and-potato-napoleon-with-spicy-tomato-sambal-sauce-339044.jpeg"
      },
      {
        id: 202320,
        title: "Spicy Sambal Chicken and Shrimp",
        readyInMinutes: 85,
        servings: 3,
        sourceUrl: "http://www.seriouseats.com/recipes/2013/07/spicy-sambal-chicken-shrimp-recipe.html",
        openLicense: 0,
        image: "Spicy-Sambal-Chicken-and-Shrimp-202320.jpg"
      },
      {
        id: 75838,
        title: "Sambal Belachan Recipe",
        readyInMinutes: 20,
        servings: 15,
        sourceUrl: "http://www.foodrepublic.com/2011/10/03/sambal-belachan-recipe",
        openLicense: 0,
        image: "sambal_belachan_recipe-75838.jpg"
      }
    ],
    baseUri: "https://spoonacular.com/recipeImages/",
    offset: 0,
    number: 10,
    totalResults: 379126,
    processingTimeMs: 1554,
    expires: 1619966625488
  }
