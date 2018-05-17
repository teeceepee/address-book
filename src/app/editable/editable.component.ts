import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css'],
  host: {
    class: 'editable-wrapper',
  }
})
export class EditableComponent implements OnInit {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  readonly = true;

  constructor() { }

  ngOnInit() {
  }

  onInput(event) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }

  onDoubleClick() {
    this.readonly = !this.readonly;
  }
}
