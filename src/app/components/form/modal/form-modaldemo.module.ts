import { CommonModule  } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HighlightJsModule } from 'ngx-highlight-js';
import { HighlightModule } from 'ngx-highlightjs';

import { FormModalDemoRoutingModule } from './form-modaldemo-routing.module';
import { FormModaldemoComponent } from './form-modaldemo.component';
import { ButtonModule } from '../../../../../projects/truly-ui/src/components/button/index';
import { RadioButtonModule } from '../../../../../projects/truly-ui/src/components/radiobutton/index';
import { DatatableModule } from '../../../../../projects/truly-ui/src/components/datatable/index';
import { DropDownListModule } from '../../../../../projects/truly-ui/src/components/dropdownlist/index';
import { InputModule } from '../../../../../projects/truly-ui/src/components/input/index';
import { DumpDataService } from '../../../shared/services/dumpdata';
import { ShowcaseTableEventsModule } from '../../../shared/components/showcase-table-events/showcase-table-events.module';
import { ShowcaseTablePropertiesModule } from '../../../shared/components/showcase-table-properties/showcase-table-properties.module';
import { ShowcaseCardModule } from '../../../shared/components/showcase-card/showcase-card.module';
import { MiscModule } from '../../../../../projects/truly-ui/src/components/misc/index';
import { MultiSelectModule } from '../../../../../projects/truly-ui/src/components/multiselect/index';
import { TooltipModule } from '../../../../../projects/truly-ui/src/components/tooltip/index';
import { ModalToolbarModule } from '../../../../../projects/truly-ui/src/components/modal/addons/modal-toolbar/index';
import { PanelGroupModule } from '../../../../../projects/truly-ui/src/components/panelgroup/index';
import { DatePickerModule } from '../../../../../projects/truly-ui/src/components/datepicker/index';
import { ValidatorsModule } from '../../../../../projects/truly-ui/src/components/validators/index';
import { CheckBoxModule } from '../../../../../projects/truly-ui/src/components/checkbox/index';
import { FormModule } from '../../../../../projects/truly-ui/src/components/form/index';
import { TabControlModule } from '../../../../../projects/truly-ui/src/components/tabcontrol/index';
import { DialogModule } from '../../../../../projects/truly-ui/src/components/dialog/index';
import { AutoCompleteModule } from '../../../../../projects/truly-ui/src/components/autocomplete/index';
import { MultiViewModule } from '../../../../../projects/truly-ui/src/components/multiview/index';
import { FormModalComponent } from './form-modal/form-modal.component';
import { FormModalService } from '../../../../../projects/truly-ui/src/components/form/modes/modal/form-modal.service';

@NgModule({
  declarations: [
    FormModaldemoComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RadioButtonModule,
    DatatableModule,
    HighlightModule.forRoot(),
    DropDownListModule,
    InputModule,
    ValidatorsModule,
    CheckBoxModule,
    FormModalDemoRoutingModule,
    FormModule,
    TabControlModule,
    DialogModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MultiViewModule,
    DatePickerModule,
    PanelGroupModule,
    ModalToolbarModule,
    HighlightJsModule,
    TooltipModule,
    MultiSelectModule,
    MiscModule,
    ShowcaseCardModule,
    ShowcaseTablePropertiesModule,
    ShowcaseTableEventsModule
  ],
  exports: [
    FormModaldemoComponent,
    FormModalComponent
  ],
  providers: [
    DumpDataService,
    FormModalService
  ],
  entryComponents: [ FormModalComponent ]
})
export class FormModalDemoModule {}
