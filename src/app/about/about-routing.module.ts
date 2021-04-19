import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CollegeComponent } from "./college/college.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: CollegeComponent,
  },
  { 
    path: "notfound", 
    component: PageNotFoundComponent 
  },
  { 
    path: "**", 
    redirectTo: "/notfound" 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
