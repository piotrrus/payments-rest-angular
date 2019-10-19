<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\ValidationMessages;

class AuthorsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'      => 'required|alpha|max:10|min:3'
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required'   => 'Proszę wprowadzić nazwę',
            'name.alpha'      => 'Proszę wprowadzić tylko litery',
            'name.max'        => 'Przekroczono dopuszczalną ilość znaków',
            'name.min'        => 'Wprowadź minimum 3 znaki'
        ];
    }
}
