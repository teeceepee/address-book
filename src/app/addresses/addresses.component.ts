import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  staffs: Staff[];
  allSelected: boolean;

  constructor(public staffService: StaffService) { }

  ngOnInit() {
    this.getStaffs();
  }

  getStaffs(): void {
    this.staffService.getStaffs()
      .subscribe(staffs => this.staffs = staffs);
  }

  valueChange(staff) {
    staff.touched = true;
  }

  onAdd() {
    const newStaff = new Staff();
    newStaff.touched = true;
    this.staffService.add(newStaff);
  }

  onUpdate() {
    this.staffService.update();
  }

  onCheckAll() {
    this.allSelected = !this.allSelected;
    this.staffService.checkAll(this.allSelected);
  }

  onDelete() {
    this.staffService.deleteSelected();
    this.getStaffs();
    this.allSelected = false;
  }

  canDelete(): boolean {
    return this.staffService.anySelected();
  }
}
