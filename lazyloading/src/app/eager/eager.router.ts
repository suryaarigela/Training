import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './eager.component';




const routes:Routes=[
    { path: '', component: EagerComponent }
];

export const eagerrouting= RouterModule.forChild(routes);

