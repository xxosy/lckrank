import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RankingComponent } from "./ranking/ranking.component";

const routes: Routes = [{ path: "", component: RankingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
