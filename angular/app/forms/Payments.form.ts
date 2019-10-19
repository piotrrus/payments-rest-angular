import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from './Base.form';
import { textValidator } from '../validators/custom-text.validator';

// import { PatternsLibraryService } from '../services/pattern-library.service';

export class PaymentForm extends Base {

    private _form: FormGroup;
    // private patterns: PatternsLibraryService;

    constructor(
        public fb: FormBuilder,
    ) {
        super(fb);
        this.createForm();
    }
// Validators.pattern(this.patterns['CASH_REGEXP'])
// Validators.pattern('/^[0-9]*$/u')
    createForm(): FormGroup {
        this.form = this.fb.group({
            name: ['', [Validators.required, textValidator, Validators.maxLength(30)]],
            surname: ['', [Validators.required, textValidator, Validators.maxLength(30)]],
            account: ['', [Validators.required, , Validators.maxLength(26)]],

            amount: ['', [Validators.required, Validators.maxLength(26)]],
            paymentDate: ['', [Validators.required, Validators.maxLength(12)]],
            paymentPurpose: ['', [Validators.required, Validators.maxLength(255)]],
            exist:['']
        });

        return this.form;
    }
    get exist() {
        return this.form.get('exist');
    }

    get name() {
        return this.form.get('name');
    }

    get surname() {
        return this.form.get('surname');
    }

    get account() {
        return this.form.get('account');
    }

    get amount() {
        return this.form.get('amount');
    }

    get paymentDate() {
        return this.form.get('paymentDate');
    }

    get paymentPurpose() {
        return this.form.get('paymentPurpose');
    }
    get form(): FormGroup {
        return this._form;
    }

    set form(value: FormGroup) {
        this._form = value;
    }

}
