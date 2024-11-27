import { Component } from '@angular/core';

// Define types for better type safety
type Permissions = 'Create' | 'Read' | 'Update' | 'Delete';
type Roles = 'Admin' | 'Editor' | 'Viewer';

@Component({
  selector: 'app-role-permission-matrix',
  templateUrl: './role-permission-matrix.component.html',
  styleUrls: ['./role-permission-matrix.component.css']
})
export class RolePermissionMatrixComponent {
  // Define the roles and permissions
  roles: Roles[] = ['Admin', 'Editor', 'Viewer'];
  permissions: Permissions[] = ['Create', 'Read', 'Update', 'Delete'];

  // Explicitly define the rolePermissionMatrix object with correct types
  rolePermissionMatrix: { [role in Roles]: { [permission in Permissions]: boolean } } = {
    Admin: { Create: true, Read: true, Update: true, Delete: true },
    Editor: { Create: false, Read: true, Update: true, Delete: false },
    Viewer: { Create: false, Read: true, Update: false, Delete: false }
  };

  // Toggle permission for a given role
  togglePermission(role: Roles, permission: Permissions): void {
    // Safely toggle the permission by accessing the matrix with correct types
    this.rolePermissionMatrix[role][permission] = !this.rolePermissionMatrix[role][permission];
  }
}
