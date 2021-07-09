// ----- Tampilkan Semua Pokemon ------- //

async function getPokemonList() {
    
    // $('#pokemon-list').html('');

    
        
        for (let i = 1; i <= 30; i++) {
        //    console.log(i);
            
           const response = await $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/'+ i +'/',
                type: 'GET',
                dataType: 'json'

                
                // async: false,
                // success: function (result) {
                    // console.log('success', data);
                    // let hasil = result.results;
        
                        // console.log(response);
    
                        // $('#pokemon-list').append(`
                        // <div class="col-sm-4 mb-3">
                        //     <div class="card" style="width: 20rem;">
                        //         <img src="`+ result.sprites.other['official-artwork']['front_default'] +`" class="card-img-top" alt="...">
                        //         <div class="card-body">
                        //             <h5 class="card-title text-capitalize">`+ result.name +`</h5>
                        //             <h6 class="card-subtitle mb-2 text-muted text-capitalize">`+ result.types[0].type.name +`</h6>
                        //             <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal">See Detail</a>
                        //         </div>
                        //     </div>
                        // </div>
                        // `);
              
                        // $.each(hasil, function(i, result){
                        //     $('#pokemon-list').append(`
                        //     <div class="col-md-4">
                        //         <div class="card">
                        //             <img src="" class="card-img-top" alt="...">
                        //             <div class="card-body">
                        //                 <h5 class="card-title text-capitalize">`+ result.name +`</h5>
                        //                 <h6 class="card-subtitle mb-2 text-muted text-capitalize"></h6>
                        //                 <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal">See Detail</a>
                        //             </div>
                        //         </div>
                        //     </div>
                        //     `);
                        // });
    
                // }
            });
        }

    
    
}

console.log(getPokemonList());

// ------ Search Pokemon -------- //

// function searchPokemon () {

//     $('#pokemon-list').html('');

//     $.ajax({
//         url: 'https://pokeapi.co/api/v2/pokemon/'+ $('#search-input').val() +'/',
//         type: 'GET',
//         dataType: 'json',
//         success: function (result) {
//             // console.log('success', data);

//                 // console.log(result.sprites.other['official-artwork']['front_default']);

//                     $('#pokemon-list').append(`
//                     <div class="col-md-4">
//                         <div class="card">
//                             <img src="`+ result.sprites.other['official-artwork']['front_default'] +`" class="card-img-top" alt="...">
//                             <div class="card-body">
//                                 <h5 class="card-title text-capitalize">`+ result.name +`</h5>
//                                 <h6 class="card-subtitle mb-2 text-muted text-capitalize">`+ result.types[0].type.name +`</h6>
//                                 <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal">See Detail</a>
//                                 <button type="button" class="close" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     `);
                    
//                     $('#search-input').val(''); // ini cara supaya yang tadi di ketikan di search hilang
//                     $('#pagination').css('display', 'none'); // ini cara supaya pagination hilang
//                     $('.close').on('click', function(){
//                         $('#pokemon-list').html('');
//                     })
//                     $('.close').on('click', function(){
//                         tampilSemuaPokemon();
//                     })
//                     $('.close').on('click', function(){
//                         $('#pagination').css('display', 'block');
//                     })
                    
            
//         }
//     });

// }

// $('#search-button').on('click', function(){
//     searchPokemon();
// });

// $('#search-input').on('keyup', function (e) {
//     if(e.keyCode === 13) {
//         searchPokemon();
//     }
// });

// $('#allPokemon').on('click', function(){
//     tampilSemuaPokemon();
// });


// // ----- Pagination ----- //

// $('.page-item').on('click', function(){
//     // const cek = $(this).text();
//     // console.log(cek);

//     if($(this).text() == 1) {
//         $('.page-item').removeClass('disabled');
//         $('#prev').addClass('disabled');
//         $('.page-item').removeClass('active');
        
//         $(this).addClass('active');
//     } else if($(this).text() == 5) {
//         $('.page-item').removeClass('disabled');
//         $('#next').addClass('disabled');
//         $('.page-item').removeClass('active');
        
//         $(this).addClass('active');
//     } else {
//         $('.page-item').removeClass('active');
//         $(this).addClass('active');
//         $('.page-item').removeClass('disabled');
//     }
    
// });


