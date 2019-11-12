import { NgModule } from '@angular/core';
import { AuthGuard } from './auth';
import { LoginGuard } from './login';
import { SessionExpGuard, SessionExpService } from './session-exp';
import { TimeOutComponent } from './session-exp';

@NgModule({
      declarations: [
            TimeOutComponent
      ],
      providers: [
            AuthGuard,
            LoginGuard,
            SessionExpGuard,
            SessionExpService
      ],
      exports: [
            TimeOutComponent
      ]
})

export class GuardModules { }
