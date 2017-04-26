import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item.service";
import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";

import { NativeScriptAnimationsModule } from 'nativescript-angular/animations';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from "./dynamic.component";
// import { DynamicFormQuestionComponent } from "./dynamic-form-question.component";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
         DynamicFormComponent,
        // DynamicFormQuestionComponent
    ],
    providers: [
        ItemService,

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
