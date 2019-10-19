<?php

namespace App\Http\Controllers\Api;

use App\Models\Payments;
use Illuminate\Http\Requests\PaymentsFormRequest;
use App\Http\Controllers\API\BaseController;

class PaymentsController extends BaseController
{

    public function index()
    {
        $payments = Payments::getAll();
        return $this->response($payments, 'Payments');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $payments = Payments::search($id);
        return $this->response($payments, 'Payments');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PaymentsFormRequest $request)
    {
        $validated = $request->validated();
        $response = Payments::insert($validated);
        return $this->message($response);
    }
/**
 * 
 * @param type $date
 * @param type $name
 * @param type $surname
 * @param type $account
 * @return json response
 */
    public function exist($date = '', $name = '', $surname = '', $account = '')
    {
        $data['date'] = $date;
        $data['name'] = $name;
        $data['surname'] = $surname;
        $data['account'] = $account;
        $payments = Payments::checkIfDataExist($data);
        return $this->response($payments, 'Payments exist');
    }

}
