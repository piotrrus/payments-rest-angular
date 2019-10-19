<?php

namespace App\Models;

use Request;

Abstract Class Crud
{

    public function getList();

    public function search(int $id);

    public function insert(Request $request);

    public function save(Request $request, Model $model);

    public function update(int $id, Request $request);
}
