<?php

namespace App\Http\Controllers\Api;

use App\Models\Banks;

use App\Http\Controllers\API\BaseController;
use App\Http\Resources\BanksResource;

class BanksController extends BaseController
{

    /**
     * 
     * @return json response
     */
    public function index()
    {

        $banks = Banks::getAll();
        return $this->response($banks, 'Banks');
        // return new BanksResource(Banks::getAll());
    }

    /**
     * 
     * @param int $id
     * @return json response
     */
    public function show(int $id)
    {
        $banks = Banks::search($id);
        return $this->response($banks, 'Banks');
    }

}
