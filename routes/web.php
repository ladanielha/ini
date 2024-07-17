
<?php

use App\Http\Controllers\TransactionsController;
use App\Http\Controllers\OrderHistoryController;
use App\Http\Controllers\OrderTransactionController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MakananFrontController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WisataController;
use App\Http\Controllers\WisataFrontController;
use App\Http\Controllers\NilaialtController;
use App\Http\Controllers\NilaimakananahpController;
use App\Http\Controllers\NilaimakanansawController;
use App\Http\Controllers\NilaiwisatasawController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\BuyerController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\KotaController;
use App\Http\Controllers\KotanameController;
use App\Http\Controllers\MeetUsController;
use App\Http\Controllers\MakananController;
use App\Http\Controllers\MenudbController;
use App\Http\Controllers\RestorandbController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);
Route::get('/wisata', [HomeController::class, 'wisata'])->name('list.wisata');
Route::get('/erick', [HomeController::class, 'erick'])->name('erick');
//rekomendasi wisata ahp
Route::get('/rekomendasiwisata', [HomeController::class, 'formrekowisata'])->name('formreko.wisata');
Route::post('/hitungbobot', [HomeController::class, 'hitungbobot'])->name('hitungbobot');
Route::get('/hasilrekomendasiwisata', [HomeController::class, 'hasilrekomendasi'])->name('hasilrekomendasiwahp');
//rekomendasi wisata saw
Route::get('/rekomendasiwisatasaw', [WisataFrontController::class, 'formrekowisatasaw'])->name('formreko.wisatasaw');
Route::post('/hitungbobotwisatasaw', [WisataFrontController::class, 'wisataSAW'])->name('hasilrekomendasiwsaw');
//rekomendasi makanan ahp
Route::get('/rekomendasimakanan', [MakananFrontController::class, 'formrekomakanan'])->name('formreko.makanan');
Route::post('/hitungbobotmakanan', [MakananFrontController::class, 'hitungbobot'])->name('hitungahpmakanan');
Route::get('/hasilrekomendasimakanan', [MakananFrontController::class, 'hasilrekomendasi'])->name('hasilrekomendasimahp');
//rekomendasi makanan saw
Route::get('/rekomendasimakanansaw', [MakananFrontController::class, 'formrekomakanansaw'])->name('formreko.makanansaw');
Route::post('/hitungbobotmakanansaw', [MakananFrontController::class, 'SAW'])->name('hasilrekomendasimsaw');
//staticinfo
Route::get('/aboutus', [AboutController::class, 'about'])->name('aboutus');
Route::get('/meetus', [MeetUsController::class, 'meetus'])->name('meetus');
//jenisdaging
Route::get('/jenisdaging', [MeetUsController::class, 'jenisdaging'])->name('jenisdaging');
//search
Route::get('/searchtempat', [KotanameController::class, 'tempat'])->name('searchtempat');
Route::get('/searchmakanan', [KotanameController::class, 'makanan'])->name('searchmakanan');
//data wisata&makanan
Route::get('/daftarwisata/{namakota}', [WisataFrontController::class, 'wisatakota'])->name('daftarwisata.kota');    
Route::get('/daftarmakanan/{namakota}', [MakananFrontController::class, 'makanankota'])->name('daftarmakanan.kota');    
Route::get('/daftarwisata/detail/{wisata_id}', [WisataController::class, 'detail'])->name('detail.wisata');
Route::get('/daftarmakanan/detail/{makanan_id}', [MakananController::class, 'detail'])->name('detail.makanan');



Route::get('/guest', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/adminhome', function () {
    return Inertia::render('Admin/Home');
})->middleware(['CheckRole:Admin', 'verified'])->name('admin');


/* Route::get('/dashboard', function () {
    return Inertia::render('Client/Home');
})->middleware(['CheckRole:User', 'verified'])->name('user');
 */

Route::middleware('CheckRole:User')->group(function () {
    Route::get('/userhome', [HomeController::class, 'index'])->name('user');;
     // Route for creating an order transaction
     Route::post('/create-order', [OrderTransactionController::class, 'createOrderTransaction'])->name('create.order');

     // Route for confirming an order
     Route::post('/confirm-order', [OrderTransactionController::class, 'confirmOrder'])->name('confirm.order');
 
     //Order History
     Route::get('/order-history', [OrderHistoryController::class, 'orderHistory'])->name('orderHistory');
 
    //HAL STORE
    Route::get('/store', [BuyerController::class, 'index'])->name('store');
    Route::get('/menu/resto/{store_id}', [RestorandbController::class, 'detail'])->name('detail.resto');
    Route::get('/menu/detail/{menu_id}/', [MenudbController::class, 'detail'])->name('detail.menu');
    Route::get('/cart', [CartController::class, 'detail'])->name('mycart');
    Route::post('/storecart', [CartController::class, 'store'])->name('store.cart');
    Route::post('/deletecart', [CartController::class, 'destroy'])->name('delete.cart');

});

Route::middleware('CheckRole:Store')->group(function () {
    Route::get('/storehome', [HomeController::class, 'index'])->name('seller');;
});

Route::post('/order/transaction', [OrderTransactionController::class, 'createOrderTransaction'])
    ->name('order.transaction.create');



Route::middleware('CheckRole:Admin')->group(function () {
    //profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    //crud kota
    Route::get('/listkota', [KotaController::class, 'index'])->name('admin.kota');
    Route::get('/createkota', [KotaController::class, 'create'])->name('create.kota');
    Route::post('/storekota', [KotaController::class, 'store'])->name('store.kota');
    Route::get('/kota/edit', [KotaController::class, 'edit'])->name('edit.kota');
    Route::post('/kota/update', [KotaController::class, 'update'])->name('update.wisata');
    Route::post('/kota/delete', [KotaController::class, 'destroy'])->name('delete.kota');
    //crud data tempat wisata
    Route::get('/listwisata', [WisataController::class, 'index'])->name('admin.wisata');
    Route::get('/createwisata', [WisataController::class, 'create'])->name('create.wisata');
    Route::post('/storewisata', [WisataController::class, 'store'])->name('store.wisata');
    Route::get('/wisata/edit/', [WisataController::class, 'edit'])->name('edit.wisata');
    Route::post('/wisata/update', [WisataController::class, 'update'])->name('update.wisata');
    Route::post('/wisata/delete', [WisataController::class, 'destroy'])->name('delete.wisata');
    //crud bobot nilai wisata AHP
    Route::get('/listnilaialt', [nilaialtController::class,'index'])->name('admin.nilaialt');
     Route::get('/nilaialt/edit/', [nilaialtController::class, 'edit'])->name('edit.nilaialt');
     Route::post('/nilaialt/update', [nilaialtController::class, 'update'])->name('update.nilaialt');
     Route::post('/nilaialt/delete', [nilaialtController::class, 'destroy'])->name('delete.nilaialt');
    //crud bobot nilai wisata saw
    Route::get('/listnilaiwisatasaw', [nilaiwisatasawController::class,'index'])->name('admin.nilaiwisatasaw');
    Route::get('/nilaiwisatasaw/edit/', [nilaiwisatasawController::class, 'edit'])->name('edit.nilaiwisatasaw');
    Route::post('/nilaiwisatasaw/update', [nilaiwisatasawController::class, 'update'])->name('update.nilaiwisatasaw');
    Route::post('/nilaiwisatasaw/delete', [nilaiwisatasawController::class, 'destroy'])->name('delete.nilaiwisatasaw');
     //crud data makanan
    Route::get('/listmakanan', [MakananController::class, 'index'])->name('admin.makanan');
    Route::get('/createmakanan', [MakananController::class, 'create'])->name('create.makanan');
    Route::post('/storemakanan', [MakananController::class, 'store'])->name('store.makanan');
    Route::get('/makanan/edit', [MakananController::class, 'edit'])->name('edit.makanan');
    Route::post('/makanan/update', [MakananController::class, 'update'])->name('update.makanan');
    Route::post('/makanan/delete', [MakananController::class, 'destroy'])->name('delete.makanan');
    //crud nilai  makanan ahp
    Route::get('/listnilaimakananahp', [NilaimakananahpController::class, 'index'])->name('admin.nilaimakananahp');
    Route::get('/nilaimakananahp/edit', [NilaimakananahpController::class, 'edit'])->name('edit.nilaimakananahp');
    Route::post('/nilaimakananahp/update', [NilaimakananahpController::class, 'update'])->name('update.nilaimakananahp');
    Route::get('/nilaimakananahp/delete', [NilaimakananahpController::class, 'destroy'])->name('delete.nilaimakananahp');
    //crud nilai  makanan saw
    Route::get('/listnilaimakanansaw', [NilaimakanansawController::class, 'index'])->name('admin.nilaimakanansaw');
    Route::get('/nilaimakanansaw/edit', [NilaimakanansawController::class, 'edit'])->name('edit.nilaimakanansaw');
    Route::post('/nilaimakanansaw/update', [NilaimakanansawController::class, 'update'])->name('update.nilaimakanansaw');
    Route::get('/nilaimakanansaw/delete', [NilaimakanansawController::class, 'destroy'])->name('delete.nilaimakanansaw');
     //crud nilai  Cart
     Route::get('/admincart', [CartController::class, 'index'])->name('admin.cart');
     //All Transactions
    Route::get('/transactions', [TransactionsController::class, 'transactions'])->name('transactions');
    
});

require __DIR__ . '/auth.php';
