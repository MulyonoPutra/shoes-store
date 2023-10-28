import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { SearchDirective } from 'src/app/shared/directives/search.directive';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MaterialModule,
		ComponentsModule,
		FormsModule,
		ReactiveFormsModule,
		SearchDirective,
	],
})
export class HomeModule {}
