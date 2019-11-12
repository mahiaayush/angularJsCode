import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { SessionObject, ProjectUtils } from '../../utility';
import { TopMenuNavigationData } from '../../../pages/desktop/top-menu/top-menu.navigation.data';

@Injectable()
export class LoginGuard implements CanActivate {

      constructor(
            private router: Router
      ) { }

      authUser(): Promise<boolean> {
            const sessionOj: SessionObject = ProjectUtils.getSessionObject();
            return new Promise((resolve, reject) => {
                  if (ProjectUtils.isEmpty(ProjectUtils.getUserDetailStatus(sessionOj))) {
                        resolve(true);
                  } else {
                        resolve(false);
                        this.router.navigate(TopMenuNavigationData.dashboard);

                  }
            });
      }

      canActivate(): Promise<boolean> {
            return this.authUser();
      }



}
