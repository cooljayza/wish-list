import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService } from './../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {
 
  @Input() wish!: WishItem;

  constructor(private events: EventService){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  get cssClasses(){
    return this.wish.isComplete ? ['strikeout', 'text-muted']: [];
  }

  removeWish(){
    this.events.emit('removeWish', this.wish);
  }
  
  toggleFullfilled = () => {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
