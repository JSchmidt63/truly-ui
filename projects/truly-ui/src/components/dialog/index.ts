import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogService } from './dialog.service';
import { IdGeneratorService } from '../core/helper/idgenerator.service';
import { NameGeneratorService } from '../core/helper/namegenerator.service';
import { TabIndexService } from '../form/services/tabIndex.service';

import { TlDialogAlert } from './dialog-alert/dialog-alert';
import { TlDialogConfirmation } from './dialog-confirmation/dialog-confirmation';
import { TlDialogError } from './dialog-error/dialog-error';
import { TlDialogInfo } from './dialog-info/dialog-info';

import { ButtonModule } from '../button/index';
import { ModalModule } from '../modal/index';

@NgModule( {
    imports: [
        CommonModule,
        ModalModule,
        ButtonModule
    ],
    declarations: [
        TlDialogInfo,
        TlDialogAlert,
        TlDialogError,
        TlDialogConfirmation
    ],
    exports: [
        TlDialogInfo,
        TlDialogAlert,
        TlDialogError,
        TlDialogConfirmation
    ],
    entryComponents: [
        TlDialogInfo,
        TlDialogAlert,
        TlDialogError,
        TlDialogConfirmation
    ],
    providers: [
        DialogService,
        TabIndexService,
        IdGeneratorService,
        NameGeneratorService
    ]
} )
export class DialogModule {

}
