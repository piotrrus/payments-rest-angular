# payments-rest-angular
This is an alternative version of OOP Php Payments.

Rest Api has been written in Laravel v.6. Front part has been designed in Angular v.7

Fields are validated.

There's no saving data at the moment.
And no authorization.

Some Postman examples:

http://localhost/laravel/payments/api/payments/exist?

{
    "error": "Error validation data",
    "validation": {
        "payment_date": [
            "The payment date field is required."
        ],
        "amount": [
            "The amount field is required."
        ]
    }
}

payment_date=zxcxc

{
    "error": "Error validation data",
    "validation": {
        "payment_date": [
            "The payment date is not a valid date."
        ]
    }
}

account=821140200400006502320000

{
    "error": "Error validation data",
    "validation": {
        "account": [
            "The account must be 26 digits."
        ]
    }
}

