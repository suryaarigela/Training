import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
const route:Routes=[
    {
        path:'home',
        component:HomeComponent
    },{
        path:'demo/:id',
        component:DemoComponent
    },
    {
        path:'',
        redirectTo:'demo',
        pathMatch:'full'
    }
];

export const myRoutes=RouterModule.forRoot(route);