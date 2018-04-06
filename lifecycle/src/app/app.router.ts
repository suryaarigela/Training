import { Routes ,RouterModule} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SettingComponent } from "./setting/setting.component";
const route:Routes=[
    {
        path:'home',
        component:HomeComponent
    },
    {path:'profile',
    component:ProfileComponent
},
{
    path:'',
    redirectTo:'profile',
    pathMatch:"full"
},
{
    path:'setting',
    component:SettingComponent
}
];

export const myRoute=RouterModule.forRoot(route);