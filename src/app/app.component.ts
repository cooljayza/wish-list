import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from './../shared/services/EventService';
import { WishService } from './wish.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule,
     WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  items: WishItem[] = [];


  constructor(private events: EventService, private wishService: WishService){
    this.events.listen('removeWish', (wish: any)=> {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any)=>{
      //this.items = data;
    })
  }

  listFilter: any = '0';
  title = 'my wishlist';
  filter: any ;

  addWishToItems(wish: WishItem){
    this.items.push(wish);
  }
}
