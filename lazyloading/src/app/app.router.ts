import { Routes, RouterModule } from "@angular/router";
import { ClassicComponentComponent } from "./classic-component/classic-component.component";
import { MyTrainingComponent } from "./my-training/my-training.component";
import { EagerComponent } from "./eager/eager.component";

const routes:Routes=[
    { path: '', redirectTo: 'training', pathMatch: 'full' },
    { path: 'classic', component: ClassicComponentComponent },
    { path: 'training', component: MyTrainingComponent },
    { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' }
    ,
    {path:'eager',component:EagerComponent}
];

export const approuting= RouterModule.forRoot(routes);