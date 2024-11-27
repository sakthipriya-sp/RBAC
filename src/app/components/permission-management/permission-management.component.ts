import { Component } from '@angular/core';

@Component({
  selector: 'app-permission-management',
  templateUrl: './permission-management.component.html',
  styleUrls: ['./permission-management.component.css']
})
export class PermissionManagementComponent {
  roles = [
    { name: 'Admin', permissions: ['read', 'write', 'delete'] },
    { name: 'Editor', permissions: ['read', 'write'] },
    { name: 'Viewer', permissions: ['read'] },
  ];

  permissions = ['read', 'write', 'delete'];

  displayedColumns: string[] = ['role', ...this.permissions];

  togglePermission(role: any, permission: string) {
    const index = role.permissions.indexOf(permission);
    if (index === -1) {
      // If permission is not already in the list, add it
      role.permissions.push(permission);
    } else {
      // If permission is already in the list, remove it
      role.permissions.splice(index, 1);
    }
  }
  
}
