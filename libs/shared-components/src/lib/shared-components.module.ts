import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PetListComponent],
  exports: [PetListComponent]
})
export class SharedComponentsModule {}
