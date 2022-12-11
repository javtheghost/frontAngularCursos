import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ReactiveFormsModule} from '@angular/forms'

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     //ngmaterial
     MatTableModule,
     MatFormFieldModule,
     MatInputModule,
     MatIconModule,
     MatDialogModule,
     MatCardModule,
     ReactiveFormsModule,
     MatToolbarModule,
  ],
  exports: [
     //ngmaterial
     MatTableModule,
     MatFormFieldModule,
     MatInputModule,
     MatIconModule,
     MatTooltipModule,
     MatDialogModule,
     MatButtonModule,
     MatCardModule,
     MatToolbarModule,
     ReactiveFormsModule,
  ]
})
export class SharedModule { }
