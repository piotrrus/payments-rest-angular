<?php

namespace App\Models;

use DB;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Interfaces\CrudInterface;

class Banks extends Model implements CrudInterface
{

    protected $table = 'banks';
	
	protected $fillable = [
        'name',
        'currency_id'
    ];
	
	
	/*public function FileTypes()
    {
		return $this->belongsTo('App\Models\FileTypes', 'bank_id', 'id')
		   ->select(array('id', 'name'));
	}*/
	
    /**
     * 
     * @return Collection with banks status 
     * 
     */
    public static function getAll()
    {

		//return Banks::all();
		        return DB::table('bank_files_types as bft')
                        ->select('b.id as bank_id', 'b.name as bank', 'f.name as file_type', 'bft.id as bank_file_type_id')
                        ->leftJoin('banks as b', 'bft.bank_id', '=', 'b.id')
						->leftJoin('files_types as f', 'bft.file_type_id', '=', 'f.id')
						->get();

    }

    /**
     * shows choosen book data
     * @param int $id
     * @return type
     */
    public static function search(int $id)
    {
        return Banks::find($id);
    }
    
	public static function updateIt(int $id, array $request){
		
    }
	
    public static function insert(array $request){
		
    }
    /*private static function getDBTable()
    {
        return DB::table('books')
                        ->select('books.id', 'title', 'id_author', 'name')
                        ->leftJoin('authors', 'books.id_author', '=', 'authors.id');
    }*/

  

}
