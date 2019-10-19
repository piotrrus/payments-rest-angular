<?php

namespace App\Http\Requests;

use App\Http\Requests\AbstractFormRequest;

class PaymentsFormRequest extends AbstractFormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'payment_date' => 'required|date',
            'account'      => 'required|digits:26',
            'name'         => 'required|string|min:2|max:30',
            'surname'      => 'required|string|min:2|max:30',
            'amount'       => 'required|regex:regex:/^\d*(\.\d{2})?$/'
        ];
    }

}
