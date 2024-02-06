import {Component, EventEmitter, Output} from '@angular/core';
import {ReadingStrategies} from "../../../Parsers/Strategies";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReadingStrategy} from "../../../Parsers/Reader";

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
    selectedStrategy: ReadingStrategy = this.readingStrategies.Json;
    @Output() inputTextChanged = new EventEmitter<string>();
    @Output() readingStrategyChanged = new EventEmitter<ReadingStrategy>();

    onInputTextChanged(inputText: string) {
        this.inputTextChanged.emit(inputText);
    }

    onReadingStrategyChanged(readingStrategy: ReadingStrategy) {
        this.readingStrategyChanged.emit(readingStrategy);
    }
}
