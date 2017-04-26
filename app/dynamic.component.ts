import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic.component.html',
    // providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
    // @Input() questions: QuestionBase<any>[] = [];
    // form: FormGroup;
    payLoad = '';
    constructor() { }
    ngOnInit() {
        // this.form = this.qcs.toFormGroup(this.questions);
    }
    onSubmit() {
        // this.payLoad = JSON.stringify(this.form.value);
    }
}