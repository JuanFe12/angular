import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/Item'; 

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html'
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description:''
  }

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }

}
