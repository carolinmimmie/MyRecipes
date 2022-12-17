import { Component } from '@angular/core';
import { Recipies } from '../recipies/recipies.model';//impoteras automatiskt

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  //vi har tillgång till klassen i recipe.model
  //skapa en tom array som vi fyller med 
    x: Recipies[] = [
    new Recipies('Pannkakor', true, ['Ägg', 'Mjölk', 'Mjöl', 'Socker']),
    new Recipies('Taco', false, ['Tacoskal', 'Nötfärs', 'Gräddfil', 'Rödlök']),
    new Recipies('Falafel', true, ['Kikärtor', 'Gräddfil', 'Sallad', 'Socker']),
  ];
  addFood(arr: [], item: object) {
    const updatedArray = [item, ...arr];
    console.log(updatedArray);
    return updatedArray;
  }
}

