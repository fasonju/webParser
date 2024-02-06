import {Component} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {ConverterInputComponent} from "./converter-input/converter-input.component";

@Component({
    selector: 'app-converter',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgForOf,
        KeyValuePipe,
        ConverterInputComponent
    ],
    templateUrl: './converter.component.html',
    styleUrl: './converter.component.css'
})
export class ConverterComponent {

    onParsingAttemptCompleted($event: Object | SyntaxError) {
        console.log($event);
    }
}
