import {Component, EventEmitter, Output} from '@angular/core';
import {ReadingStrategies} from "../../../Parsers/Strategies";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-converter-input',
    standalone: true,
    imports: [
        KeyValuePipe,
        NgForOf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './converter-input.component.html',
    styleUrl: './converter-input.component.css'
})
export class ConverterInputComponent {
    protected readonly readingStrategies = ReadingStrategies;
    readingStrategy = this.readingStrategies.Json;

    @Output() ParsingAttemptCompleted = new EventEmitter<Object | SyntaxError>();

    onInputChanged(event: Event) {
        console.log(this.readingStrategy)
        this.ParsingAttemptCompleted.emit(this.readingStrategy.read((event.target as HTMLInputElement).value));
    }
}
