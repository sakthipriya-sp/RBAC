import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navLinks = [
    { path: '/user-management', label: 'Users' },
    { path: '/role-management', label: 'Roles' },
    { path: '/permission-management', label: 'Permissions' },
  ];

  constructor() {}
}
