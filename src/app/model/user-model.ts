import { Injectable } from '@angular/core';

import { UserVO } from '../vo/user-vo';


@Injectable({
    providedIn: 'root'
  })
export class UserModel {
    user!: UserVO;
}