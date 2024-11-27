import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this for form handling

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Needed for mat-checkbox
import { MatFormFieldModule } from '@angular/material/form-field'; // Needed for forms
import { MatInputModule } from '@angular/material/input'; // Needed for inputs
import { MatSelectModule } from '@angular/material/select'; // Needed for mat-select and mat-option

// App Modules and Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { PermissionManagementComponent } from './components/permission-management/permission-management.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TableComponent } from './components/shared/table/table.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
import { RolePermissionMatrixComponent } from './components/shared/role-permission-matrix/role-permission-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    RoleManagementComponent,
    PermissionManagementComponent,
    NavbarComponent,
    TableComponent,
    ModalComponent,
    ConfirmationDialogComponent,
    RolePermissionMatrixComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // Material Modules
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule, // For mat-checkbox
    MatFormFieldModule, // For forms
    MatInputModule,     // For inputs
    MatSelectModule,    // For mat-select and mat-option
  ],
  exports: [NavbarComponent, TableComponent, ModalComponent], // Make them reusable
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
