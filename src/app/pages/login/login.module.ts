import { NgModule } from '@angular/core';
import { routing } from './login.routing';
import { RootSharedModule } from '../../acore/sharedModules';
import { CoreLoginComponent } from './core-login/core-login.component';
import { LoginService } from './login.service';
import { SecurityCheckComponent } from './security-check/security-check.component';
import { ComponentModule } from '../../acore/components';
import { DesktopModule } from '../desktop/desktop.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
      declarations: [
            CoreLoginComponent,
            SecurityCheckComponent
      ],
      providers: [
            LoginService
      ],
      imports: [
            ReactiveFormsModule,
            ComponentModule,
            RootSharedModule,
            routing

      ]
})

export class LoginModule { }

