import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";

import { DataFormComponent } from "./data-form.component";
import { DynamicFormComponent } from "./dynamic.component";
// import { DataFormComponent } from "./item/dynamic-form-question.component";

const routes: Routes = [
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "form/:id", component: DataFormComponent },
    { path: "dynamic/:id", component: DynamicFormComponent },
    { path: "", redirectTo: "/items", pathMatch: "full" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }