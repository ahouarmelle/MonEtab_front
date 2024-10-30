import { Routes } from '@angular/router';
import { ConnexionComponent } from './presentations/composantes/dashboard/connexion/connexion.component';
import { DashbComponent } from './presentations/composantes/dashboard/dashb/dashb.component';
import { IndexComponent as IndexStudent } from './presentations/composantes/students/index/index.component';
import { EditComponent as EditStudent } from './presentations/composantes/students/edit/edit.component';
import { AddComponent as AddStudent } from './presentations/composantes/students/add/add.component';
import { AddComponent as AddTeacher } from './presentations/composantes/teachers/add/add.component';
import { EditComponent as EditTeacher} from './presentations/composantes/teachers/edit/edit.component';
import { IndexComponent as IndexTeacher } from './presentations/composantes/teachers/index/index.component';
import { IndexComponent } from './presentations/composantes/users/index/index.component';
import { EditComponent } from './presentations/composantes/users/edit/edit.component';
import { AddComponent } from './presentations/composantes/users/add/add.component';

export const routes: Routes = [
  {path: 'login',component: ConnexionComponent},
  {path: '',component: DashbComponent},
  {path: 'students/index',component: IndexStudent},
  {path: 'students/edit',component: EditStudent},
  {path: 'students/add',component: AddStudent},
  {path: 'teachers/add',component: AddTeacher },
  {path: 'teachers/edit',component: EditTeacher},
  {path: 'teachers/index',component: IndexTeacher},
  {path: 'users/index',component: IndexComponent},
  {path: 'users/edit',component: EditComponent},
  {path: 'users/add',component: AddComponent}
];
