import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-mark',
  templateUrl: './order-mark.component.html',
  styleUrls: ['./order-mark.component.css']
})
export class OrderMarkComponent implements OnInit {
  @Input() column: string;
  @Input() orderBy: string;

  constructor() { }

  ngOnInit() {
  }

}
