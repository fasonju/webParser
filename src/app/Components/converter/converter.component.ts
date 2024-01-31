import {Component} from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn
} from "@angular/forms";
import {Reader, ReadingStrategy} from "../../Parsers/Reader";
import {Writer, WritingStrategy} from "../../Parsers/Writer";
import {getReadStrategy, getWriteStrategy, Strategies} from "../../Parsers/Strategies";
import {KeyValuePipe, NgForOf} from "@angular/common";

@Component({
    selector: 'app-converter',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgForOf,
        KeyValuePipe
    ],
    templateUrl: './converter.component.html',
    styleUrl: './converter.component.css'
})
export class ConverterComponent {
    constructor() {
        this.converterForm = this.createForm();
        this.reader = new Reader(getReadStrategy(this.defaultStrategy))
        this.writer = new Writer(getWriteStrategy(this.defaultStrategy))
    }

    private createForm() {
        return new FormGroup({
            inputType: new FormControl<ReadingStrategy>(
                getReadStrategy(this.defaultStrategy),
                {nonNullable: true}),
            input: new FormControl<string>('', {
                nonNullable: true,
                validators: [this.inputValidator]
            },),
            outputType: new FormControl<WritingStrategy>(
                getWriteStrategy(this.defaultStrategy),
                {nonNullable: true}),
        })
    }

    protected readonly getReadStrategy = getReadStrategy;
    protected readonly getWriteStrategy = getWriteStrategy;
    defaultStrategy = Strategies.Json
    converterForm: FormGroup
    strategies = Strategies
    output = ""
    reader: Reader
    writer: Writer

    onReadStrategyChange() {
        const readStrategy = this.converterForm.value.inputType
        this.reader.setStrategy(readStrategy)

    }

    onWriteStrategyChange() {
        const strategy = this.converterForm.value.outputType
        this.writer.setStrategy(strategy)
    }

    convert() {
        this.output = this.writer.parse(this.reader.read(this.converterForm.value.input))
    }

    inputValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const input = control.value

        if (input === '') {
            return {input: 'input is empty'}
        }

        if (!this.reader.isValid(input)) {
            return {input: 'input is not valid'}
        }
        return null
    }
}
