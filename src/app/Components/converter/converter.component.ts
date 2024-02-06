import {Component, computed, signal} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {ConverterInputComponent} from "./converter-input/converter-input.component";
import {ReadingStrategies, WritingStrategies} from "../../Parsers/Strategies";
import {ReadingStrategy} from "../../Parsers/Reader";
import {WritingStrategy} from "../../Parsers/Writer";

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
    inputText = signal("");
    readingStrategy = signal(ReadingStrategies.Json);
    writingStrategy = signal(WritingStrategies.Json);
    readObject = computed(() => {
        return this.readingStrategy().read(this.inputText())
    })


    onInputTextChanged($event: string) {
        this.inputText.set($event)
    }

    onReadingStrategyChanged($event: ReadingStrategy) {
        this.readingStrategy.set($event)
    }

    onWritingStrategyChanged($event: WritingStrategy) {
        this.writingStrategy.set($event)
    }
}
