import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { UtilityModule } from "app/utility.module";
import { SkyhookDndModule } from "angular-skyhook";
import { RouterModule } from "@angular/router";
import { SkyhookMultiBackendModule } from "angular-skyhook-multi-backend";
import { SkyhookSortableModule } from "angular-skyhook-card-list";

import { ListComponent } from "./list.component";
import { MathFormComponent } from "./math-form.component";
import { PrintoutComponent } from './printout.component';
import { ContainerComponent } from "./container.component";

@NgModule({
    declarations: [
        ContainerComponent,
        ListComponent,
        MathFormComponent,
        PrintoutComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UtilityModule,
        SkyhookDndModule,
        SkyhookMultiBackendModule,
        SkyhookSortableModule,
        RouterModule.forChild([
            { path: "", component: ContainerComponent }
        ])
    ]
})
export class QuizModule { }
