import { Component, Inject, OnInit } from '@angular/core';
import { COLLEGE_ABOUT$ } from '../about.providers';
import { Observable } from 'rxjs';
import { AboutInterface } from '../about.interface';
import { default_college_translations } from '../translations';

import { COLLEGE_DATA_PROVIDER } from '../about.providers';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss'],
    providers: [COLLEGE_DATA_PROVIDER]
})
export class CollegeComponent implements OnInit {
    college?: AboutInterface;
    translations?: Object;
    defaultTranslations = default_college_translations;

    constructor( @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>, private translateService: TranslateService ) {
        translateService.addLangs(['en', 'fr', 'he']);
        this.translateService.getTranslation("fr").subscribe( 
        res => { this.translations = Object.assign({}, res); },
        err => { this.translations = Object.assign({}, this.defaultTranslations); });
    }

    ngOnInit() {
        this.getCollege();
    }

    getCollege(): void {
        this.college$.subscribe(college => {
            this.college = college;
            setTimeout(() => {
            }, 100);
        });
    }
}
