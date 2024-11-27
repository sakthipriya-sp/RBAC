import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-role-permission-matrix',
  templateUrl: './role-permission-matrix.component.html',
  styleUrls: ['./role-permission-matrix.component.css'],
})
export class RolePermissionMatrixComponent {
  newRole: string = '';  // Variable to store the new role name
  roles: string[] = ['Admin', 'Editor', 'Viewer'];  // Existing roles
  permissions: string[] = ['Create', 'Read', 'Update', 'Delete'];  // Permissions to be checked
  rolePermissionMatrix: { [key: string]: { [key: string]: boolean } } = {
    Admin: { Create: true, Read: true, Update: true, Delete: true },
    Editor: { Create: true, Read: true, Update: false, Delete: false },
    Viewer: { Create: false, Read: true, Update: false, Delete: false },
  };

  // Method to add a new role
  addRole() {
    if (this.newRole && !this.roles.includes(this.newRole)) {
      this.roles.push(this.newRole); // Add new role to roles array
      // Add default permissions for the new role
      this.rolePermissionMatrix[this.newRole] = {
        Create: false,
        Read: false,
        Update: false,
        Delete: false,
      };
      this.newRole = ''; // Clear input field after adding role
    } else {
      alert('Role already exists or is invalid!'); // Show error if role is empty or duplicate
    }
  }

  // Method to toggle permissions for a role
  togglePermission(role: string, permission: string) {
    this.rolePermissionMatrix[role][permission] = !this.rolePermissionMatrix[role][permission];
  }
}
