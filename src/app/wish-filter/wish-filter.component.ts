import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';


const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  listFilter: any = '0';
  @Input() filter: any 
  @Output() filterChange = new EventEmitter<any>();


  ngOnInit() {
    this.updateFilter('0')
  }

  updateFilter(value: any){
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
