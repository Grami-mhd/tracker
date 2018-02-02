import {NgModule} from "@angular/core";
import {
    MatButtonModule, MatPaginatorModule, MatInputModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatSidenavModule, MatListModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatRadioModule
} from "@angular/material";
/**
 * Created by GRAMI on 08/12/2017.
 */
@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatPaginatorModule,
        MatRadioModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatPaginatorModule,
        MatRadioModule
    ]
})
export class MaterialModule{}