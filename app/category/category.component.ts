import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'checkbox',
  templateUrl: './category.component.html',
 
 // styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  filterByCategory:any
cats = [
  {
    "id": "1",
    "parent_id": 'root',
    "category": "Dress"
  },
  {
    "id": "17",
    "parent_id": "1",
    "category": "Dress 2"
  },


  {
    "id": "19",
    "parent_id": "1",
    "category": "Men"
  },
  {
    "id": "30",
    "parent_id": "19",
    "category": "Shorts 2"
  },
  {
    "id": "31",
    "parent_id": "19",
    "category": "Shorts"
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}

