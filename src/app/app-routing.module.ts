import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { PermissionManagementComponent } from './components/permission-management/permission-management.component';

const routes: Routes = [
  { path: 'users', component: UserManagementComponent },
  { path: 'roles', component: RoleManagementComponent },
  { path: 'permissions', component: PermissionManagementComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
