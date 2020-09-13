# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
pizza_menu = Menu.create(category: "pizza")
salad_menu = Menu.create(category: "salad")
pasta_menu = Menu.create(category: "pasta")
sides_menu = Menu.create(category: "sides")
drinks_menu = Menu.create(category: "drinks")



pizza_menu.items.build(name: "Spinach and Feta", description: "Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.", image_url: "spinach_feta.jpg", price: 15.99)
pizza_menu.items.build(name: "Six Cheese", description: "Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella and sprinkled with oregano.", image_url: "wisconsin_six.jpg", price: 15.99)
pizza_menu.items.build(name: "Southern BBQ Chicken", description: "Grilled chicken breast, honey BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella", image_url: "memphis_chicken.jpg", price: 15.99)
pizza_menu.items.build(name: "Ultimate Pepperoni", description: "Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella then sprinkled with oregano.", image_url: "ultimate_pepperoni.jpg", price: 15.99)
pizza_menu.items.build(name: "Buffalo Chicken", description: "Grilled chicken breast, fresh onions, provolone, American cheese, cheddar, cheese made with 100% real mozzarella and drizzled with a hot buffalo sauce.", image_url: "buff_chicken.jpg", price: 15.99)
pizza_menu.items.build(name: "Chicken Bacon & Ranch", description: "Grilled chicken breast, ranch, smoked bacon, diced tomatoes, provolone and cheese made with 100% real mozzarella.", image_url: "cali_chicken_ranch.jpg", price: 15.99)
pizza_menu.items.build(name: "Supremely Supreme", description: "Pepperoni, Italian sausage, fresh green peppers, fresh mushrooms, fresh onions and cheese made with 100% real mozzarella.", image_url: "delux.jpg", price: 15.99)
pizza_menu.items.build(name: "Hawaiian Lulu", description: "Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.", image_url: "spinach_feta.jpg", price: 15.99)
pizza_menu.items.build(name: "Pacific Veggie", description: "Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, feta, provolone, cheese made with 100% real mozzarella and sprinkled with a garlic herb seasoning.", image_url: "spinach_feta.jpg", price: 15.99)
pizza_menu.items.build(name: "Cheezborger", description: "American cheese, ketchup-mustard sauce, beef, fresh onions, and diced tomatoes, topped with shredded provolone and cheddar cheeses.​​", image_url: "cheezeburger.jpg", price: 15.99)
pizza_menu.items.build(name: "Build Your Own", description: "Add your own topping choices.", image_url: "spinach_feta.jpg", price: 12.99)

salad_menu.items.build(name: "Garden Salad", description: "A crisp and colorful combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.", image_url: "garden_salad.jpg", price: 7.99)
salad_menu.items.build(name: "Chicken Caesar", description: "The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.", image_url: "caesar_salad.jpg", price: 7.99)

pasta_menu.items.build(name: "Chicken Alfredo", description: "Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection.", image_url: "alfredo_pasta.jpg", price: 6.99)
pasta_menu.items.build(name: "Italian Sausage Marinara", description: "Penne pasta baked in a zesty tomato basil marinara sauce with Italian sausage, a blend of Italian seasonings and provolone cheese.", image_url: "sausage_marinara_pasta.jpg", price: 6.99)
pasta_menu.items.build(name: "Chicken Carbonara", description: "Taste the delectable blend of flavorful grilled chicken breast, smoked bacon, fresh onions, and fresh mushrooms mixed with penne pasta. Baked to perfection with rich Alfredo sauce.", image_url: "chicken_carbonara_pasta.jpg", price: 6.99)
pasta_menu.items.build(name: "Pasta Primivera", description: "Fresh baby spinach, diced tomatoes, fresh mushrooms and fresh onions, mixed with penne pasta and baked with a creamy Alfredo sauce.", image_url: "pasta_primivera.jpg", price: 6.99)
pasta_menu.items.build(name: "Build Your Own Pasta", description: "Choose a sauce and up to 3 ingredients from more than a dozen meat or vegetable toppings.", image_url: "byo_pasta.jpg", price: 6.99)

sides_menu.items.build(name: "Parmesan Bread Twists", description: "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.", image_url: "parmesan_bread_twists.jpg", price: 5.99)
sides_menu.items.build(name: "Garlic Bread Twists", description: "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.", image_url: "garlic_bread_twists.jpg", price: 5.99)
sides_menu.items.build(name: "Stuffed Cheesy Bread", description: "Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.", image_url: "stuffed_cheesy_bread.jpg", price: 5.99)
sides_menu.items.build(name: "Stuffed Cheesy Bread (Spinach & Feta)", description: "Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.", image_url: "stuffed_cheesy_bread_feta_spinach.jpg", price: 5.99)
sides_menu.items.build(name: "Stuffed Cheesy Bread (Bacon & Jalepeno)", description: "Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.", image_url: "stuffed_cheesy_bread_jal.jpg", price: 5.99)
sides_menu.items.build(name: "Paremesan Bread Bites", description: "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.", image_url: "parmesan_bites.jpg", price: 5.99)
sides_menu.items.build(name: "Cinnamon Bread Twists", description: "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.", image_url: "cinnamon_bread_twists.jpg", price: 5.99)

drinks_menu.items.build(name: "Fanta Orange", description: "2 liter bottle", image_url: "fanta.jpg", price: 2.99)
drinks_menu.items.build(name: "Coca Cola", description: "2 liter bottle", image_url: "coke.jpg", price: 2.99)
drinks_menu.items.build(name: "Diet Coke", description: "2 liter bottle", image_url: "diet_coke.jpg", price: 2.99)
drinks_menu.items.build(name: "Sprite", description: "2 liter bottle", image_url: "sprite.jpg", price: 2.99)
drinks_menu.items.build(name: "Dasani Water", description: "20oz. bottle", image_url: "water.jpg", price: 1.99)