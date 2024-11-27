import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any[] = []; // Array of objects to populate the table
  @Input() displayedColumns: string[] = []; // Column keys
  @Input() columnLabels: { [key: string]: string } = {}; // Mapping of column keys to display labels

  @Output() edit = new EventEmitter<any>(); // Emits event for editing a row
  @Output() delete = new EventEmitter<number>(); // Emits event for deleting a row (by ID)

  // Emit event for editing a row
  onEdit(row: any) {
    this.edit.emit(row);
  }

  // Emit event for deleting a row
  onDelete(id: number) {
    this.delete.emit(id);  // Emitting the delete event with the row ID
  }
}
