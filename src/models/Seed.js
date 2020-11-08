import { Drink } from "./Drink";

export async function Seed() {
  const bubbleTeas = [
    {
      name: "Boba Milk Tea",
      price: 4.5,
      category: "Milk Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/coffee_boba_coffee_iced.jpg",
    },
    {
      name: "Lychee Milk Tea",
      price: 4.5,
      category: "Milk Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/milk_tea_lychee-1.jpg",
    },
    {
      name: "Jasmine Green Milk Tea",
      price: 4.5,
      category: "Milk Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/milk_tea_jasmine-1.jpg",
    },
    {
      name: "Taro Milk Tea",
      price: 4.5,
      category: "Milk Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/milk_tea_taro-1.jpg",
    },
    {
      name: "Brown Sugar Milk Tea",
      price: 5,
      category: "Milk Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/milk_tea_tiger_sugar_milk.jpg",
    },
    {
      name: "Thai Milk Tea",
      price: 4.5,
      category: "Milk Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/milk_tea_thai_tea-1.jpg",
    },
    {
      name: "Matcha Milk Tea",
      price: 5.5,
      category: "Milk Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/milk_tea_matcha-1.jpg",
    },
    {
      name: "Strawberry Matcha Milk Tea",
      price: 5.5,
      category: "Milk Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/milk_tea_strawberry_matcha-1.jpg",
    },
    {
      name: "Mixed Fruit Iced Tea",
      price: 5,
      category: "Fresh Fruit Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/iced_fruit_tea_mixed_fruit_iced_tea-1.jpg",
    },
    {
      name: "Grapefruit Iced Tea",
      price: 5,
      category: "Fresh Fruit Tea",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/iced_fruit_tea_grapefruit.jpg",
    },
    {
      name: "Cheese Foam Black Tea",
      price: 5,
      category: "Cheese Foam",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/cheese_foam_top_cheese_foam_black_tea-1.jpg",
    },
    {
      name: "Cheese Foam Jasmine Matcha",
      price: 5.5,
      category: "Cheese Foam",
      imageUrl:
        "https://itsbobatime.com/wp-content/uploads/2019/04/cheese_foam_top_cheese_foam_jasmine_matcha-1.jpg",
    },
  ];

  let drinks = await Drink.list();

  if (drinks.length <= 0) {
    drinks = await Promise.all(
      bubbleTeas.map(async (tea) =>
        Drink.create({
          name: tea.name,
          price: tea.price,
          category: tea.category,
          imageUrl: tea.imageUrl,
        })
      )
    );
  }
}
