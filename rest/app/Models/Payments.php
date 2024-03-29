<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Payments extends Model
{

    protected $table   = 'payment_operations2';
    protected $guarded = ['id', 'imported_at'];

    public static function insert($request)
    {
        $model = new Payments();
        self::saveIt($request, $model);
    }

    /**
     * 
     * @param \App\Models\Request $request
     * @param Model $model
     * @return boolean
     * null if OK, true if not
     */
    private static function saveIt(Request $request, Model $model)
    {
        $input = array_filter($request->all());
        $model->name = $input['name'];
        $model->surname = $input['surname'];
        $model->account = $input['account'];
        $model->amount = $input['amount'];
        $model->payment_date = $input['payment_date'];
        $model->payment_purpose = $input['payment_purpose'];
        $model->save();
    }

    /**
     *
     * @param type $data - validated request
     * @return type
     */
    public static function checkIfDataExist($data)
    {
        $resp = DB::table('payment_operations2')
            ->select(DB::raw('count(id) as amount'))
            ->where('payment_date', $data['payment_date'])
            ->where('name', $data['name'])
            ->where('surname', $data['surname'])
            ->where('account', $data['account'])
            ->get();
        return $resp;
    }

}
