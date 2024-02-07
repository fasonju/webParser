import {Component, EventEmitter, Input, Output} from '@angular/core';
import {KeyValuePipe, NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WritingStrategy} from "../../../Parsers/Writer";
import {WritingStrategies} from "../../../Parsers/Strategies";

@Component({
    selector: 'app-converter-output',
    standalone: true,
    imports: [
        KeyValuePipe,
        NgForOf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './converter-output.component.html',
    styleUrl: './converter-output.component.css'
})
export class ConverterOutputComponent {
    protected readonly writingStrategies = WritingStrategies;
    selectedStrategy = this.writingStrategies.Json;
    @Input({required: true}) outputText!: string;
    @Output() writingStrategyChanged = new EventEmitter<WritingStrategy>();

    onWritingStrategyChanged(selectedStrategy: WritingStrategy) {
        this.writingStrategyChanged.emit(selectedStrategy);
    }
}
