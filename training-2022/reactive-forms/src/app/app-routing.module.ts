import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';
import {SecondChildrenComponent} from './components/second-children/second-children.component';


const routes: Routes = [
    {path: '', component: WrapperComponent},
    {path: 'wrapper', component: WrapperComponent},
    {
        path: 'first',
        // component:  <=== nu  e nevoie
        children: [
            {path: '', component: FirstComponent},
            {path: 'first-children', component: SecondChildrenComponent},
            {path: 'first-children/:id', component: SecondChildrenComponent}
        ]
    },
    {
        path: 'second',
        children: [
            {path: '', component: SecondComponent},
            {path: 'someChildrenPath', component: SecondChildrenComponent},
            {path: '**', redirectTo: ''}
        ]
    },
    {path: '**', redirectTo: 'wrapper'}
];

@NgModule ( {
    imports: [RouterModule.forRoot ( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule {
}
