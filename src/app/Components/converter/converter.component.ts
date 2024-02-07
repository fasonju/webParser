import {Component, computed, signal} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {ConverterInputComponent} from "./converter-input/converter-input.component";
import {ReadingStrategies, WritingStrategies} from "../../Parsers/Strategies";
import {ReadingStrategy} from "../../Parsers/Reader";
import {WritingStrategy} from "../../Parsers/Writer";
import {ConverterOutputComponent} from "./converter-output/converter-output.component";

@Component({
    selector: 'app-converter',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgForOf,
        KeyValuePipe,
        ConverterInputComponent,
        ConverterOutputComponent
    ],
    templateUrl: './converter.component.html',
    styleUrl: './converter.component.css'
})
export class ConverterComponent {
    inputText = signal<string>("");
    readingStrategy = signal<ReadingStrategy>(ReadingStrategies.Json);
    writingStrategy = signal<WritingStrategy>(WritingStrategies.Json);
    readObject = computed<Object | SyntaxError>(() => {
        return this.computeInputObject();
    })
    outputText = computed<string>(() => {
        return this.computeOutputString();
    })

    private computeOutputString() {
        switch (this.readObject()) {
            case SyntaxError:
                return "Invalid input"
            default:
                try {
                    return this.writingStrategy().parse(this.readObject())
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        return "Invalid input"
                    } else {
                        return "Unknown error"
                    }
                }
        }
    }

    private computeInputObject() {
        try {
            return this.readingStrategy().read(this.inputText())
        } catch (e) {
            if (e instanceof SyntaxError) {
                return e;
            }
        }
        return Error("Unknown error")
    }

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
