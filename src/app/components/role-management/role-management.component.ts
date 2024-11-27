import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent {
  roleForm: FormGroup;
  permissions: string[] = ['Create', 'Read', 'Update', 'Delete']; // Example permissions

  constructor(private fb: FormBuilder) {
    // Initialize the form group
    this.roleForm = this.fb.group({
      name: ['', Validators.required], // Role name field
      permissions: this.fb.array(
        this.permissions.map(() => this.fb.control(false)) // Initialize each permission as unchecked
      )
    });
  }

  // Getter to access permissions as FormArray
  get permissionsArray(): FormArray {
    return this.roleForm.get('permissions') as FormArray;
  }

  // On form submit, we'll handle the role creation logic
  onSubmit() {
    if (this.roleForm.valid) {
      const roleData = this.roleForm.value;
      console.log('Role Data:', roleData); // Handle role creation logic here
      // Reset form or do any other actions after submitting
    } else {
      console.log('Form is invalid');
    }
  }
}
