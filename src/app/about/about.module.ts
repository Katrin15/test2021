import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CollegeComponent } from './college/college.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        CollegeComponent, 
        PageNotFoundComponent
    ],
    imports: [
        CommonModule, 
        AboutRoutingModule, 
        TranslateModule
    ]
})
export class AboutModule {
}
