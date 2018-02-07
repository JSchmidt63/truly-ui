import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HighlightJsModule} from 'ngx-highlight-js';

import {DatePickerDemoRoutingModule} from './datepickerdemo-routing.module';
import {DatePickerDemoComponent} from './datepickerdemo.component';
import { ShowcaseCardModule } from '../../shared/components/showcase-card/showcase-card.module';
import { ShowcaseTablePropertiesModule } from '../../shared/components/showcase-table-properties/showcase-table-properties.module';
import { ShowcaseTableEventsModule } from '../../shared/components/showcase-table-events/showcase-table-events.module';
import { DatePickerModule } from '../../../components/datepicker/index';

@NgModule({
  declarations: [
    DatePickerDemoComponent
  ],
  imports: [
    DatePickerModule,
    HighlightJsModule,
    ShowcaseCardModule,
    ShowcaseTablePropertiesModule,
    DatePickerDemoRoutingModule,
    ShowcaseTableEventsModule,
    CommonModule
  ],
  exports: [
    DatePickerDemoComponent
  ]
})
export class DatePickerDemoModule {}
