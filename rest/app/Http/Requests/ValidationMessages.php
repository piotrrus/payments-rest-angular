<?php

namespace App\Http\Requests;

class ValidationMessages
{
    const MESSAGES = [
        'MIN_LENGTH'   => 'Wprowadź minimum',
        'MAX_LENGTH'   => 'Przekroczono dopuszczalną liczbę znaków',
        'LETTERS_ONLY' => 'Proszę wprowadzić tylko litery',
        'NUMBER_ONLY'  => 'Proszę wprowadzić wartość liczbową',
        'REQUIRED'     => 'To pole jest wymagane',
        'CHOOSE_MSG'   => 'Proszę wybrać',
        'INSERT_MSG'   => 'Proszę wprowadzić'
    ];

    public function getMsg($msgName)
    {
        return self::MESSAGES[$msgName];
    }

}
