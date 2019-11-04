<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('banks', 'Api\BanksController@index');

Route::get('payments', 'Api\PaymentsController@index');
Route::get('payments/exist/date/{date?}/name/{name?}/account/{account?}', 'Api\PaymentsController@exist');
Route::get('payments/exist/date/{date?}/name/{name?}/surname/{surname}/amount/{amount}/account/{account?}', 'Api\PaymentsController@exist');
Route::get('payments/exist/date/{date?}/name/{name?}/surname/{surname}/account/{account?}', 'Api\PaymentsController@exist');
