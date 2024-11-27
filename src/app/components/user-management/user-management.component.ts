import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from '../shared/modal/modal.component';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users = new MatTableDataSource<User>([]); // Initialize table data source with User type
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'actions'];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.loadUsers(); // Load users from local storage on init
  }

  // Open the Add User modal dialog
  openAddUserModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { roles: ['Admin', 'Editor', 'Viewer'] }, // Example roles for the new user
    });

    dialogRef.afterClosed().subscribe((result: Partial<User>) => {
      if (result) {
        this.addUser(result);
      }
    });
  }

  // Add a new user
  addUser(newUser: Partial<User>) {
    const currentUsers = this.users.data;
    const newId = currentUsers.length > 0
      ? Math.max(...currentUsers.map((user) => user.id)) + 1
      : 1;

    const updatedUsers: User[] = [...currentUsers, { id: newId, ...newUser } as User];
    this.users.data = updatedUsers;

    // Save the updated user list to localStorage
    this.saveUsers(updatedUsers);
  }

  // Open the delete confirmation dialog
  openDeleteDialog(userId: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(userId);
      }
    });
  }

  // Delete a user
  deleteUser(userId: number) {
    const updatedUsers = this.users.data.filter((user) => user.id !== userId);
    this.users.data = updatedUsers;
    this.saveUsers(updatedUsers);
  }

  // Open the edit user modal dialog
  editUser(user: User) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { user, roles: ['Admin', 'Editor', 'Viewer'] },
    });

    dialogRef.afterClosed().subscribe((updatedUser: Partial<User>) => {
      if (updatedUser) {
        this.updateUser(user.id, updatedUser);
      }
    });
  }

  // Update the user's details
  private updateUser(userId: number, updatedUser: Partial<User>) {
    const updatedUsers = this.users.data.map((user) =>
      user.id === userId ? { ...user, ...updatedUser } : user
    );
    this.users.data = updatedUsers;
    this.saveUsers(updatedUsers);
  }

  // Save the users data to localStorage
  private saveUsers(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Load users from localStorage or set default users
  private loadUsers() {
    const storedUsers = localStorage.getItem('users');
    const initialUsers: User[] = [
      { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
      { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Viewer' },
    ];

    this.users.data = storedUsers ? JSON.parse(storedUsers) : initialUsers;

    // Save initial users if no users exist in localStorage
    if (!storedUsers) {
      this.saveUsers(this.users.data);
    }
  }
}
