import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Staff, STAFFS } from './staff';

function columnToString(col) {
  return (col || '').toString();
}

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  staffs: Staff[] = STAFFS;

  constructor() { }

  getStaffs(): Observable<Staff[]> {
    return of(this.staffs);
  }

  getSortedStaffs(column: string): Staff[] {
    return [...this.staffs].sort((a, b) => {
      return columnToString(a[column]).localeCompare(columnToString(b[column]));
    });
  }

  add(staff: Staff) {
    this.staffs.push(staff);
  }

  update() {
    const touchedStaffs = this.staffs.filter(staff => staff.touched);

    this.displayTouched(touchedStaffs);


    let nextId = this.currentId() + 1;

    touchedStaffs.forEach(staff => {
      staff.touched = false;

      if (!staff.id) {
        staff.id = nextId;
        nextId += 1;
      }
    });
  }

  checkAll(checked: boolean) {
    this.staffs.forEach(staff => staff.selected = checked);
  }

  anySelected(): boolean {
    for (const staff of this.staffs) {
      if (staff.selected) {
        return true;
      }
    }

    return false;
  }

  deleteSelected() {
    this.staffs = this.staffs.filter(staff => !staff.selected);
  }

  currentId() {
    return Math.max.apply(Math, this.staffs.map(staff => staff.id || 0) );
  }

  displayTouched(staffs) {
    const array = staffs.map(staff => {
      const s = {...staff};
      delete s.selected;
      delete s.touched;

      return s;
    });

    alert(JSON.stringify(array));
  }
}
