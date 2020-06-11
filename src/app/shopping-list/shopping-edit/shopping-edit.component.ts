import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form', {static: false}) slForm: NgForm;
  editSubscribe: Subscription;
  editMode = false;
  editNumberIndex: number;
  editedItem: Ingredients;

  constructor(private shpListService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscribe = this.shpListService.shoppingEdited.subscribe((index: number) => {
      this.editMode = true;
      this.editNumberIndex = index;
      this.editedItem = this.shpListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngdient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.shpListService.updateIngredient(this.editNumberIndex, newIngdient);
    } else {
      this.shpListService.addIngredient(newIngdient);
    }
    this.editMode = false;
    form.reset();
 }

 onReset() {
   this.slForm.reset();
   this.editMode = false;
 }

 onDelete() {
   this.onReset();
   this.shpListService.deleteIngredient(this.editNumberIndex);
 }

 ngOnDestroy() {
   this.editSubscribe.unsubscribe();
 }
}
