<?php

    namespace App\Http\Controllers;

    
    use Illuminate\Http\Request;
    use App\Http\Resources\KotaCollection;
    use App\Models\Places;
    use App\Models\Kota;
    use Inertia\Inertia;



    class KotaController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            $kotas = new KotaCollection(Kota::paginate(20));
            return Inertia::render('Admin/Kota/index', [
                'kota' => $kotas
            ]);
        }

        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create()
        {
            return Inertia::render('Admin/Kota/create');
        }

        /**
         * Store a newly created resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */

        public function store(Request $request)
        {
            //set validation
            $request->validate([
                'namakota' => 'required',
                'gambar' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            if ($request->hasFile('gambar')) {
                $gambar = $request->file('gambar');
                $gambarName = time() . '.' . $gambar->getClientOriginalExtension();
                $gambar->move(public_path('uploads'), $gambarName);
            }

            //create kota
            $kota = new Kota([
                'namakota' => $request->input('namakota'),  
                'gambar' => $gambarName, 
                
            ]);

            $kota->save();
            //redirect
            return redirect()->route('admin.kota')->with('message', 'Data Kota Berhasil Disimpan!');
        }


        /**
         * Display the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function detail($id)
        {
            $place = Places::find($id);
            return Inertia::render('Client/Wisatadetail', [
                'places' => $place
            ]);
        }

        /**
         * Show the form for editing the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function edit(Kota $kota, Request $request)
        {

            //dd($request);
            return Inertia::render('Admin/Kota/edit', [
                'kota' => $kota->find($request->kota_id)
            ]);
        }

        /**
         * Update the specified resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request)
        {

            $datakota = Kota::find($request->kota_id);
            //dd($datakota);
            $request->validate([
                'namakota' => 'required',
                'gambar' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            if ($request->hasFile('gambar')) {
                $gambar = $request->file('gambar');
                $gambarName = time() . '.' . $gambar->getClientOriginalExtension();
                $gambar->move(public_path('uploads'), $gambarName);
        
                // Remove the old image if it exists
                if ($datakota->gambar) {
                    $oldImagePath = public_path('uploads') . '/' . $datakota->gambar;
                    if (file_exists($oldImagePath)) {
                        unlink($oldImagePath);
                    }
                }
            } else {
                // jika tidak ada image maka tutup 
               $url = $datakota->gambar;
               $imageName = pathinfo($url, PATHINFO_BASENAME);
               $gambarName =$imageName;
            }
    
            //update post
            Kota::where('kota_id', $request->kota_id)->update([
                'namakota'     => $request->namakota,
                'gambar'   => $gambarName,
            ]);

            //redirect
            return redirect()->route('admin.kota')->with('message', 'Data Berhasil Diupdate!');
        }

        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy(Request $request)
        {
            $kota = Kota::find($request->kota_id);
            $kota->delete();
            return redirect()->route('admin.kota')->with('message', 'Data Berhasil Dihapus!');
        }
    }
