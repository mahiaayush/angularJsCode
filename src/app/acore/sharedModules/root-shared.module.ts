import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
      imports: [
            FormsModule,
            RouterModule,
            CommonModule
      ],
      exports: [
            FormsModule,
            RouterModule,
            CommonModule
      ]
})

export class RootSharedModule { }
