import {Component} from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn
} from "@angular/forms";
import {JsonReadingStrategy, JsonWritingStrategy} from "../../Parsers/Json/JsonStrategy";
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
        this.converterForm = new FormGroup({
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

    defaultStrategy = Strategies.Json
    converterForm: FormGroup
    strategies = Strategies


    output = ""
    reader: Reader = new Reader(new JsonReadingStrategy())
    writer: Writer = new Writer(new JsonWritingStrategy())

    convert() {
        return this.writer.parse(this.reader.read(this.converterForm.value.input))
    }

    inputValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const input = control.get('input')?.value
        if (!input) {
            return {input: 'input is null'}
        }
        if (!this.reader.isValid(input)) {
            return {input: 'input is not valid'}
        }
        return null
    }
    protected readonly getReadStrategy = getReadStrategy;
}
