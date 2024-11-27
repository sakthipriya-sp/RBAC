import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  user = { name: '', email: '', role: '' }; // Initialize the user object for data binding

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { roles: string[], user?: any } // Expect roles and optionally a user object
  ) {
    // If the data contains an existing user, pre-fill the form
    if (data?.user) {
      this.user = { ...data.user }; // Pre-fill the form with the user's current data
    }
  }

  /**
   * Closes the dialog without saving.
   */
  onCancel(): void {
    this.dialogRef.close();
  }

  /**
   * Closes the dialog and passes the user data back to the parent component.
   */
  onSave(): void {
    if (this.user.name.trim() && this.user.email.trim() && this.user.role.trim()) {
      this.dialogRef.close(this.user); // Return the user data to the parent component
    } else {
      alert('Please fill out all fields!'); // Simple validation alert
    }
  }
}
