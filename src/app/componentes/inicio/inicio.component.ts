import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/Item';


declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(items => {
      //console.log(items);
      this.items = items;
    });
  }

  deleteItem(event, item: Item){
    this.clearState();
    this.itemsService.deleteItem(item);
  }

  editItem(event, item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item){
    this.itemsService.updateItem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
 
  }
