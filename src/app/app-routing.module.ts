import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
{
  path: 'consulta',
  component: ConsultaComponent
},
{
  path: 'cadastro',
  component: CadastroComponent,
  canActivate: [AuthGuard]
},
{
  path: 'contato/:idcontato',
  component: EdicaoComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'pipes',
  component: PipesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
