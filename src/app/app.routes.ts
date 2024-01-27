import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: "", component: TodosComponent},
    {path: "about", component: AboutComponent}
];
