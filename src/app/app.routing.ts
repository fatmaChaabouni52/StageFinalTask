import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const AppRoutes: any = [
    { path: '', component: AppComponent },
    { path: "page2", component: DashboardComponent }
];
 
export const AppComponents: any = [
    AppComponent,
    DashboardComponent
];