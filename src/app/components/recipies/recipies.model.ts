//En ts-fil med en class
//typa classen
//export exportera = filerna pratar med varandra
export class Recipies {
  constructor(
    public food: string,
    public veggie: boolean,
    public ingredients: string[]
  ) {
    //Knyter ihop det
    this.food = food;
    this.veggie = veggie;
    this.ingredients = ingredients;
  }
//   addFood(a: string, b: string[]) {
//     return b.push(a);
//   }
}
