import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./pages/client/client.component";
import { ClientsComponent } from "./pages/clients/clients.component";

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
  {
    path: ':id',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
