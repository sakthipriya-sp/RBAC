import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

  // Method to close the dialog without deleting (No)
  onNoClick(): void {
    this.dialogRef.close(false); // Pass false to indicate No action
  }

  // Method to close the dialog and confirm action (Yes)
  onYesClick(): void {
    this.dialogRef.close(true); // Pass true to indicate Yes action
  }
}
