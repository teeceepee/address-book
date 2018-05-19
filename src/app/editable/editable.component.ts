import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css'],
  host: {
    class: 'editable-wrapper',
  }
})
export class EditableComponent implements OnInit, OnChanges {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  @Input() touched: boolean;

  readonly = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // Reset `readonly` when updated to untouched
    const touchedChange = changes['touched'];
    if (touchedChange) {
      if (touchedChange.previousValue && !touchedChange.currentValue) {
        this.readonly = true;
      }
    }
  }

  onInput(event) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }

  onDoubleClick() {
    this.readonly = !this.readonly;
  }

  canEdit() {
    return this.touched && !this.readonly;
  }
}
