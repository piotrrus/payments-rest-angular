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

Route::get('authors', 'Api\AuthorsController@index');
Route::get('authors/show/{id}', 'Api\AuthorsController@show');
Route::get('authors/store', 'Api\AuthorsController@store');
Route::get('authors/update/{id}', 'Api\AuthorsController@update');

Route::get('banks', 'Api\BanksController@index');
Route::get('books', 'Api\BooksController@index');
Route::get('books/show/{id}', 'Api\BooksController@show');
Route::get('books/title/{title}', 'Api\BooksController@title');
Route::get('books/author/{author}', 'Api\BooksController@author');

Route::get('books/option/rented', 'Api\BooksController@rented');
Route::get('books/option/forrent', 'Api\BooksController@forrent');

Route::get('books/store', 'Api\BooksController@store');
Route::get('books/update/{id}', 'Api\BooksController@update');

Route::get('readers', 'Api\ReadersController@index');
Route::get('readers/show/{id}', 'Api\ReadersController@show');
Route::get('readers/update/{id}', 'Api\ReadersController@update');
Route::get('readers/store', 'Api\ReadersController@store');

Route::get('payments', 'Api\PaymentsController@index');
//Route::get('payments/exist', 'Api\PaymentsController@exist');
Route::get('payments/exist/date/{date?}/name/{name?}/account/{account?}', 'Api\PaymentsController@exist');
Route::get('payments/exist/date/{date?}/name/{name?}/surname/{surname}/amount/{amount}/account/{account?}', 'Api\PaymentsController@exist');

Route::get('payments/exist/date/{date?}/name/{name?}/surname/{surname}/account/{account?}', 'Api\PaymentsController@exist');

Route::get('rentals', 'Api\RentalsController@index');
Route::get('rentals/show/{id}', 'Api\RentalsController@show');
Route::get('rentals/update/{id}', 'Api\RentalsController@update');
