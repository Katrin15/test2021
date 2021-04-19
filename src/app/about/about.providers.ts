import {InjectionToken} from '@angular/core';
import { of } from 'rxjs';

export const COLLEGE_ABOUT$ = new InjectionToken('About college');
export const COLLEGE_DATA = {
    id: 1,
    name: 'college name',
    photo: '/picture.png',
    about: '<p>about college <a href="">college 22</a></p>',
    media_type: 1,
    vimeo_video_id: 1,
};
export const COLLEGE_DATA_PROVIDER = { provide: COLLEGE_ABOUT$, useValue: of(COLLEGE_DATA) }
