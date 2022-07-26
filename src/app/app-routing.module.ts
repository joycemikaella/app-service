import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardClientService } from './authguard-client.service';
import { AuthGuardAdmService } from './authguard-adm.service';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { ErrorsComponent } from './errors/errors.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsuarioserviceService } from './usuarioservice.service';



const routes: Routes = [
{
  path: 'consulta',
  component: ConsultaComponent,
  canActivate: [AuthguardClientService]
},
{
  path: 'cadastro',
  component: CadastroComponent,
  canActivate: [AuthGuardAdmService]
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
},
{
  path: 'errors',
  component: ErrorsComponent
},
{
  path: 'usuario',
  component: CadastroUsuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
