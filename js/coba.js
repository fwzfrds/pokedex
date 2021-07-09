// ----- Tampilkan Semua Pokemon ------- //

function tampilSemuaPokemon () {

    for (let i = 1; i <= 100; i++) {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/'+ i +'/',
            type: 'GET',
            dataType: 'json',
            async: false,
            success: function (result) {
                    $('#pokemon-list').fadeIn("1000").append(`
                    <div class="col-sm-3 mb-4 `+ result.types[0].type.name +` pokecard">
                        <div class="card" style="width: 16rem;">
                            <img src="`+ result.sprites.other['official-artwork']['front_default'] +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-capitalize">`+ result.name +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted text-capitalize">`+ result.types[0].type.name +`</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
            }, async: false
        });
    }

}

tampilSemuaPokemon();


// ----- Filter kategori -----

$('.nav-link').click(function(){
    const value = $(this).attr('data-filter');

    if(value == "all"){
        loadAll();
    } else {
        $('.pokecard').not('.'+value).fadeOut('1000');
        
        $('.pokecard').filter('.'+value).fadeIn('1000');
    };
});

$('.nav-link').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});


// ------ Search Pokemon -------- //

function searchPokemon () {

    $('.pokecard').fadeOut('1000');
    // $('#pokemon-list').hide('1000');

    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/'+ $('#search-input').val() +'/',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            // console.log('success', data);

                // console.log(result.sprites.other['official-artwork']['front_default']);

                    $('#pokemon-list').fadeIn('1000').append(`
                    <div class="col-md-4 poke-search">
                        <div class="card">
                            <img src="`+ result.sprites.other['official-artwork']['front_default'] +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-capitalize">`+ result.name +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted text-capitalize">`+ result.types[0].type.name +`</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal">See Detail</a>
                                <button type="button" class="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    `);
                    
                    $('#search-input').val(''); // ini cara supaya yang tadi di ketikan di search hilang
                    $('.halaman').hide(); // ini cara supaya pagination hilang
                    $('.close').on('click', function(){
                        $('.poke-search').fadeOut('1000');
                        loadAll();
                    });
        }
    });

}

$('#search-button').on('click', function(){
    searchPokemon();
});

$('#search-input').on('keyup', function (e) {
    if(e.keyCode === 13) {
        searchPokemon();
    }
});


// ----- Pagination ----- //

function getPageList (totalPages, page, maxLength){
    function range(start, end){
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength){
        return range(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth){
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 - rightWidth){
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));

}

var numberOfItems = $("#pokemon-list .pokecard").length;
var limitPerPage = 12; // how many card items visible per a page
var totalPages = Math.ceil(numberOfItems / limitPerPage);
var paginationSize = 5; // how many page elements visible in the pagination
var currentPage;

function loadAll (){


    console.log(numberOfItems);

    function showPage(whichPage){
        if(whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $("#pokemon-list .pokecard").fadeOut("1000").slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).fadeIn("1000");

        $(".halaman li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-isi").addClass(item ? "current-page" : "dots").toggleClass("aktif", item === currentPage).append($("<a>").addClass("page-linklink").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage == 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
        return true;

    }

    $(".halaman").append(
        $("<li>").addClass("page-isi").addClass("previous-page").append($("<a>").addClass("page-linklink").attr({href: "javascript:void(0)"}).text("Prev")),
        $("<li>").addClass("page-isi").addClass("next-page").append($("<a>").addClass("page-linklink").attr({href: "javascript:void(0)"}).text("Next"))
    );

    $("#pokemon-list").show("1000");
    showPage(1);

    $(document).on("click", ".halaman li.current-page:not(.active)", function(){
        return showPage(+$(this).text());
    });

    if($(this).text() == 1){
        $(".previous-page").addClass("disable");
    }
    

    $(".next-page").on("click", function(){
        return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function(){
        return showPage(currentPage - 1);
    });

}

loadAll();








