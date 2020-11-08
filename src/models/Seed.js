import { Drink } from "./Drink";

export async function Seed() {
  const bubbleTeas = [
    { name: "Vintage Black Milk Tea", price: 4.95, category: "BOBO MILK TEA" },
    { name: "House Milk Tea", price: 4.95, category: "BOBO MILK TEA" },
    { name: "Jasmine Green Milk tea", category: "BOBO MILK TEA" },
    {
      name: "Dongding Oolong Milk Tea",
      price: 4.95,
      category: "BOBO MILK TEA",
    },
    { name: "Brown Sugar Milk Tea", price: 5.5, category: "BOBO MILK TEA" },
    { name: "Thai Tea", price: 5.5, category: "BOBO MILK TEA" },
    { name: "Cheese Jasmine Tippy Tea", price: 4.95, category: "CHEEZO TEA" },
    { name: "Cheese King Fong Oolong", price: 4.95, category: "CHEEZO TEA" },
    { name: "Cheese Vintage Tea", price: 4.95, category: "CHEEZO TEA" },
    { name: "Cheese Peach Oolong", price: 5.5, category: "CHEEZO TEA" },
    {
      name: "Supreme Passion Fruit",
      price: 5.95,
      category: "SUPREME FRESH FRUIT TEA",
    },
    {
      name: "Supreme Orange",
      price: 5.95,
      category: "SUPREME FRESH FRUIT TEA",
    },
    {
      name: "Supreme Pineapple",
      price: 5.95,
      category: "SUPREME FRESH FRUIT TEA",
    },
    { name: "Supreme Kiwi", price: 5.95, category: "SUPREME FRESH FRUIT TEA" },
    {
      name: "Supreme Grapefruit",
      price: 6.25,
      category: "SUPREME FRESH FRUIT TEA",
    },
    {
      name: "Supreme Very Peach",
      price: 6.25,
      category: "SUPREME FRESH FRUIT TEA",
    },
    {
      name: "Supreme Lemon Burst",
      price: 6.25,
      category: "SUPREME FRESH FRUIT TEA",
    },
    {
      name: "Supreme Cheese Strawberry",
      price: 5.95,
      category: "SUPREME CHEESE FRUIT TEA",
    },
    {
      name: "Supreme Cheese Mango",
      price: 5.95,
      category: "SUPREME CHEESE FRUIT TEA",
    },
    {
      name: "Supreme Cheese Kiwi",
      price: 6.25,
      category: "SUPREME CHEESE FRUIT TEA",
    },
    {
      name: "Supreme Cheese Mix Berry",
      price: 6.25,
      category: "SUPREME CHEESE FRUIT TEA",
    },
    {
      name: "Supreme Cheese Very Peach",
      price: 6.25,
      category: "SUPREME CHEESE FRUIT TEA",
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
        })
      )
    );
  }
}
