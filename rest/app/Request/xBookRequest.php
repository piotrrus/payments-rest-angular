<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\ValidationMessages;

class BookRequest extends FormRequest
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
            'title'     => 'required|alpha|max:50|min:2',
            'id_author' => 'number'
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
            'title.required'   => 'Proszę wprowadzić tytuł',
            'title.alpha'      => 'Proszę wprowadzić tylko litery',
            'title.max'        => 'Przekroczono dopuszczalną ilość znaków',
            'title.min'        => 'Wprowadź minimum 3 znaki',
			'id_author.number' => 'Proszę wprowadzić tylko liczby',
        ];
    }
}
