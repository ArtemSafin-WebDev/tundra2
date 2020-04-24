var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);

wow.init();



$('html').on('click', function(){
    $('.point__in').fadeOut(250);
    $('.point').removeClass('point--disabled');
});

$('.point').on('click', function(){
    var $this = $(this);

    $('.point').not($this).removeClass('point--disabled');
    $('.point__in').not($this.parent()).fadeOut(250);

    $(this).find('.point__in').fadeToggle(250);
    $this.closest('.points').find('.point').toggleClass('point--disabled');

    return false;
});

$('.point__in').on('click', function(){
    $(this).fadeOut(250);
    $('.point').removeClass('point--disabled');

    return false;
});





$('.scroll-link').on('click',function (e) {
    // e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
     'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
     window.location.hash = target;
    });
});

jQuery(function($){
    $("#phone_1").mask("+7(999) 999-9999");
    $("#phone_2").mask("+7(999) 999-9999");
    $("#phone_3").mask("+7(999) 999-9999");
    $("#phone_4").mask("+7(999) 999-9999");
    $("#phone_5").mask("+7(999) 999-9999");
    $("#phone_6").mask("+7(999) 999-9999");
    $("#phone_7").mask("+7(999) 999-9999");
    $("#phone_8").mask("+7(999) 999-9999");
    $("#phone_9").mask("+7(999) 999-9999");
    $("#phone_10").mask("+7(999) 999-9999");
});



$('.slider__tabs-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider__tabs-items',
    dots: true,
    focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
});

// $('.char__items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px',
//     arrows: false,
//     settings: "unslick",
//     responsive: [
//         {
//           breakpoint: 1025,
//           settings: {
//             arrows: false,
//             centerMode: false,
//             slidesToShow: 1
//           }
//         }
//       ]
//   // adaptiveHeight: true,
// });

$(document).ready(function(){

if($('#dealers_map').length) {

    var gmarkers = [];
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });
 
    var dealers = [
        // ["Москва","Дилер1","Москва г., Воздвиженка ул., 4/7/2","+7 (495) 640-23-30","btz@brtz.ru",37.610296,55.753083],
        // ["Казань","Дилер2","Казань г., Николая Ершова ул., 1А Водка Бар","+7 (495) 640-23-30","btz@brtz.ru",49.149506,55.7939],
        // ["Казань","Дилер3","Казань г., Чистопольская ул., 33в","+7 (495) 640-23-30","btz@brtz.ru",49.122215,55.819848],
        // ["Екатеринбург","Дилер4","Екатеринбург г., Хохрякова ул., 74/4","+7 (495) 640-23-30","btz@brtz.ru",60.59451,56.826567],
        // ["Санкт-Петербург","Дилер5","Санкт-Петербург г., Саперный пер., 15А",,"+7 (495) 640-23-30","btz@brtz.ru",30.359921,59.94079],
        // ["Волга","Дилер6","Волгоград г., Советская ул., 13","+7 (495) 640-23-30","btz@brtz.ru",44.517936,48.705266],
        // ["Ростов-на-Дону","Дилер7","Ростов-на-Дону г., Зорге ул., 64б","+7 (495) 640-23-30","btz@brtz.ru",39.630059,47.227996],
        // ["Сочи","Дилер8","Сочи г., Агава Приморская ул., 3а литер А","+7 (495) 640-23-30","btz@brtz.ru",39.723062,43.585525],
        // ["Алматы","ТОО «ТехноАгроСервис»","Республика Казахстан, г. Алматы","+7 (495) 640-23-30","btz@brtz.ru",76,8512485,43,2220146],
        // ["Волжский","ООО «АГРОПРОМОБЕСПЕЧЕНИЕ»","Волгоградская область, г.Волжский","+7 (495) 640-23-30","btz@brtz.ru",44,7707294,48,8176494]
        ["ТОО «ТехноАгроСервис»","Алматы",76,8512485,43,2220146],
        ["ООО «Русагро»","Москва",55.755826,37.6172999],
        ["ООО «АГРОПРОМОБЕСПЕЧЕНИЕ»","Волгоградская область, г.Волжский",48.8176494,44.7707294],
        ["ООО «Ригель АВ-Белгород»","Белгород",50.5997134,36.5982621],
        ["ООО «Бизон-Трейд»","Ростов-на-Дону",47.2357137,39.701505],
        ["ГУСП «Башсельхозтехника»","Республика Башкортостан, Уфимский район, ст. Уршак",54.564611,55.9250559],
        ["ООО «Торгово-выставочный комплекс «ЮЖНЫЙ»","Ростовская область, Аксайский район, хутор Ленина",47.1068444,39.8518544],
        ["ООО «Агроцентр»","Оренбург",51.7666482,55.1004538],
        ["ООО ТД «КРЫМ АГРО»","Республика Крым, Симферополь",44.952117,34.102417],
        ["ООО «СЕЛЬСКИЙ ИНЖЕНЕР»","Ставропольский край, г.Невинномысск",44.638015,41.9504639],
        ["ООО «Воронежкомплект»","Воронеж",51.6754966,39.2088823],
        ["АО «БМЗ»","Оренбургская обл., г. Бузулук",52.7732825,52.2613248],
        ["ООО «ЧЕЛЯБАГРОСНАБ»","Челябинск",55.1644419,61.4368432],
        ["ООО «Агромаркет»","Иваново",57.0050671,40.9766453],
        ["ООО «Техносфера»","Свердловская область, г.Арамиль",56.6964517,60.8330254],
        ["ООО фирма «Интерпартнeр»","Ижевск",56.8618601,53.2324284],
        ["ООО «Агрегатор»","Свердловская область, г. Арамиль",56.6964517,60.8330254],
        ["ПАО «Гагаринскремтехпред»","Тюмень",57.1612975,65.5250172],
        ["ЗАО «Благовещенскагротесхснаб»","Амурская область, г. Благовещенск",50.2727763,127.5404017],
        ["ООО «КИРОВЕЦ»","Красноярский край, г. Назарово",56.0131955,90.402565],
        ["ООО «БАТС»","Белгород",50.5997134,36.5982621],
        ["ООО «АгроцентрТехника»","Барнаул",53.3547792,83.7697833],
        ["ООО «ПолеТех»","Краснодарский край, г. Усть-Лабинск",45.2159241,39.6906891],
        ["ООО «Волгоградагроснаб»","Волгоград",48.708048,44.5133035],
        ["ЗАО «Облагроснаб»","Иркутск",52.2869741,104.3050183],
        ["ООО «Агро-Сервис»","Еврейская автономная область, г. Биробиджан",48.7803574,132.9130744],
        ["ООО «Арктик Моторс»","Якутск",62.0354523,129.6754745],
        ["ООО «Дальневосточный Автоцентр»","Владивосток",43.1198091,131.8869243],
        ["ООО «ПрофМаш-ДВ»","Владивосток",43.1198091,131.8869243],
        ["ООО Торговый Дом «ПодшипникМаш» Самара","Самара",53.2415041,50.2212463],
        ["ООО «АгроСтроительная Компания»","Пенза",53.2272903,45],
        ["ООО «МИГ»","Саратовская обл., г. Аркадак",51.9348861,43.5027751],
        ["ООО «ТИМЕР»","Ульяновск",54.3181598,48.3837915],
        ["ЗАО «Ярославский аграрно-промышленный центр»","Ярославская обл., Ярославский район, пос. Лесная поляна",57.686667,39.894167],
        ["ООО ТД «Агрогруппа»","Орел",52.9668468,36.0624898],
        ["ООО «Э.П.Ф.»","Тамбов",52.723598,41.4423062],
        ["ООО «Техагроснаб»","Пермь",58.0296813,56.2667916],
        ["ООО «Центрагроснаб»","Пермь",58.0296813,56.2667916],
        ["ООО «АгроСельМашТорг»","Казань",55.8304307,49.0660806],
        ["ОАО «Чувашагрокомплект»","Чебоксары",56.1167663,47.262782],
        ["ООО «Агромашснаб»","Чебоксары",56.1167663,47.262782],
        ["АО «Нижегородагроснаб»","Нижний Новгород",56.2965039,43.936059],
        ["ООО «БРЭНТ»","Тула",54.204836,37.6184915],
        ["АО «Шекснинская сельхозтехника»","Вологодская область, Шекснинский район, п. Подгорный",59.2632994,38.5847154],
        ["ООО «СОДРУЖЕСТВО»","Саранск",54.2000477,45.1745115],
        ["ООО «Авторемстрой»","Москва",55.755826,37.6172999],
        ["ООО «Лидер-СТ»","Смоленск",54.7903112,32.0503663],
        ["ООО «Саратовский лизинговый центр»","Саратов",51.5923654,45.9608031],
        ["ООО «СпецТрансАвто»","Сыктывкар",61.6478508,50.8339029],
        ["АО «Б-Истокское РТПС»","Свердловская обл., п.Большой Исток",56.7177494,60.7825984],
        ["ООО ТД «Сельхозтехника»","Челябинская обл., г.Копейск",55.1339695,61.6457637],
        ["ООО «Саха-Техресурс»","Якутск, село Хатассы",61.906513,129.626625],
        ["ООО «АП ГОМСЕЛЬМАШ»","Ставропольский край, Невинномысск",44.638015,41.9504639],
        ["ООО ТД «Агромастер Сибирь»","Новосибирск",55.0083526,82.9357327],
        ["ООО «ТехПроСервис»","Иркутск",52.2869741,104.3050183],
        ["ООО «Машины и Механизмы»","Чита",52.0515032,113.4711906],
        ["ООО «Агроклимат»","Челябинск",55.1644419,61.4368432]
    ];

    function initialize() {
        var isDraggable = $(document).width() > 767 ? true : false;
        var myLatlng = new google.maps.LatLng(55.759359,37.666006);
        var mapOptions = {
            scrollwheel: false,
            zoom: 6,
            center: myLatlng,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
            draggable: isDraggable,
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }]
        };

    
        // List markers
        function addMarker(marker) {
            // var city = marker[0];
            var title = marker[0];
            var addr = marker[1];
            var tel = '+7 (495) 640-23-30';
            var email = 'btz@brtz.ru';
            var lat = marker[3];
            var long = marker[2];

            var pos = new google.maps.LatLng(long, lat);

            var content = '<h4>' + title + '</h4>' + 
                          '<p>' + addr + '</p>' +
                          '<p>' + tel + '</p>' +
                          '<p>' + email + '</p>' +
                          '<a href="#" class="diller-btn btn btn-orange" data-toggle="modal" data-target="#diller" data-address="'+ addr +'">Связаться с нами</a>';
                          

            marker = new google.maps.Marker({
                title: title,
                addr: addr,
                position: pos,
                // category: city,
                lat: lat,
                long: long,
                map: map,
                icon: {
                    url: 'images/ico-marker-o.png',
                    scaledSize: new google.maps.Size(24, 34),
                },
            });

            google.maps.event.addListener(marker, 'click', (function (marker, content) {
                google.maps.event.addListenerOnce(infowindow,'domready',function(){
                    $('.diller-btn').on('click', function(e){
                        e.preventDefault();
                        

                        $('#diller .diller-info').val('');

                        var info = $(this).attr('data-address');



                        $('#diller .diller-info').val(info);
                    });
                });

                return function () {
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                    map.panTo(this.getPosition());
                    map.setZoom(13);
                }
            })(marker, content));

            gmarkers.push(marker);
        }

        var map = new google.maps.Map(document.getElementById('dealers_map'), mapOptions);

        for(i = 0; i < dealers.length; i++) {
            addMarker(dealers[i]);
        }

        // Find nearby
        function find_nearby(lat1, lon1) {    
            var pi = Math.PI;
            var R = 6371;
            var distances = [];
            var closest = -1;

            for(i=0; i<gmarkers.length; i++) {  
                var lat2 = gmarkers[i].position.lat();
                var lon2 = gmarkers[i].position.lng();

                var chLat = lat2-lat1;
                var chLon = lon2-lon1;

                var dLat = chLat*(pi/180);
                var dLon = chLon*(pi/180);

                var rLat1 = lat1*(pi/180);
                var rLat2 = lat2*(pi/180);

                var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(rLat1) * Math.cos(rLat2); 
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                var d = R * c;

                distances[i] = d;

                if(closest == -1 || d < distances[closest]) {
                    closest = i;
                }
            }

            google.maps.event.trigger(gmarkers[closest], 'click');

            console.log(gmarkers[closest]);
        }

        $('.dealers__search form').on('submit', function(e){
            e.preventDefault();

            $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDqn5NAKRtVRkdRH_smQ5LC5F41j0L1UBc&address='+encodeURIComponent($('.dealers__search-inp').val()), null, function (data) {
                if(data.results.length > 0) {
                    find_nearby(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                } else {
                    console.log(3);
                }
            });
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);


    }


    // Autocomplete input
    $('.dealers__search-inp').kladr({
        type: $.kladr.type.city,
        parents: 0,
        verify: 0,
    });

});

// form

// Form validate
if($('.form-special').length) {

    var formbox_1 = $('.form-special').validate({
        errorElement: 'label',

        errorPlacement: function(error, element) {},

        highlight: function (element, errorClass) { 
            $(element).parent().addClass('inp-error'); 
        }, 
        
        unhighlight: function (element, errorClass) { 
            $(element).parent().removeClass('inp-error'); 
        },
        
        rules: {
            name: {
                required: true,
            },

            phone: {
                required: true,
            },
        },

        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                data: $(form).serialize(),
                url: 'mail-special.php',
                success: function() {
                    $('#special').modal('hide');
                    $('#thanks').modal('show');

                    setTimeout(function(){
                        $('#thanks').modal('hide');
                    }, 4000)

                    // formbox_3.resetForm();
                    jQuery('.form-special')[0].reset();
                },


                error: function() {}
            });
        }

    });
}

// Form validate
if($('.form-formbox').length) {

    var formbox_2 = $('.form-formbox').validate({
        errorElement: 'label',

        errorPlacement: function(error, element) {},

        highlight: function (element, errorClass) { 
            $(element).parent().addClass('inp-error'); 
        }, 
        
        unhighlight: function (element, errorClass) { 
            $(element).parent().removeClass('inp-error'); 
        },
        
        rules: {
            name: {
                required: true,
            },

            phone: {
                required: true,
            },
        },

        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                data: $(form).serialize(),
                url: 'mail-31.php',
                success: function() {
                    $('#thanks').modal('show');

                    setTimeout(function(){
                        $('#thanks').modal('hide');
                    }, 4000)

                    // formbox_3.resetForm();
                    jQuery('.form-formbox')[0].reset();
                },


                error: function() {}
            });
        }

    });
}

// Form validate
if($('.form-243').length) {

    var formbox_243 = $('.form-243').validate({
        errorElement: 'label',

        errorPlacement: function(error, element) {},

        highlight: function (element, errorClass) { 
            $(element).parent().addClass('inp-error'); 
        }, 
        
        unhighlight: function (element, errorClass) { 
            $(element).parent().removeClass('inp-error'); 
        },
        
        rules: {
            name: {
                required: true,
            },

            phone: {
                required: true,
            },
        },

        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                data: $(form).serialize(),
                url: 'mail-243.php',
                success: function() {
                    $('#info-243').modal('hide');
                    $('#thanks').modal('show');

                    setTimeout(function(){
                        $('#thanks').modal('hide');
                    }, 4000)

                    // formbox_3.resetForm();
                    jQuery('.form-243')[0].reset();
                },


                error: function() {}
            });
        }
    });
}

// Form validate
if($('.form-244').length) {

    var formbox_244 = $('.form-244').validate({
        errorElement: 'label',

        errorPlacement: function(error, element) {},

        highlight: function (element, errorClass) { 
            $(element).parent().addClass('inp-error'); 
        }, 
        
        unhighlight: function (element, errorClass) { 
            $(element).parent().removeClass('inp-error'); 
        },
        
        rules: {
            name: {
                required: true,
            },

            phone: {
                required: true,
            },
        },

        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                data: $(form).serialize(),
                url: 'mail-244.php',
                success: function() {
                    $('#info-244').modal('hide');
                    $('#thanks').modal('show');

                    setTimeout(function(){
                        $('#thanks').modal('hide');
                    }, 4000)

                    // formbox_3.resetForm();
                    jQuery('.form-244')[0].reset();
                },


                error: function() {}
            });
        }
    });
}

// Form validate
if($('.form-246').length) {

    var formbox_244 = $('.form-246').validate({
        errorElement: 'label',

        errorPlacement: function(error, element) {},

        highlight: function (element, errorClass) { 
            $(element).parent().addClass('inp-error'); 
        }, 
        
        unhighlight: function (element, errorClass) { 
            $(element).parent().removeClass('inp-error'); 
        },
        
        rules: {
            name: {
                required: true,
            },

            phone: {
                required: true,
            },
        },

        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                data: $(form).serialize(),
                url: 'mail-246.php',
                success: function() {
                    $('#info-246').modal('hide');
                    $('#thanks').modal('show');

                    setTimeout(function(){
                        $('#thanks').modal('hide');
                    }, 4000)

                    // formbox_3.resetForm();
                    jQuery('.form-246')[0].reset();
                },


                error: function() {}
            });
        }
    });
}

// Form validate
if($('.form-150').length) {

    var formbox_244 = $('.form-150').validate({
        errorElement: 'label',

        errorPlacement: function(error, element) {},

        highlight: function (element, errorClass) { 
            $(element).parent().addClass('inp-error'); 
        }, 
        
        unhighlight: function (element, errorClass) { 
            $(element).parent().removeClass('inp-error'); 
        },
        
        rules: {
            name: {
                required: true,
            },

            phone: {
                required: true,
            },
        },

        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                data: $(form).serialize(),
                url: 'mail-150.php',
                success: function() {
                    $('#info-150').modal('hide');
                    $('#thanks').modal('show');

                    setTimeout(function(){
                        $('#thanks').modal('hide');
                    }, 4000)

                    // formbox_3.resetForm();
                    jQuery('.form-150')[0].reset();
                },


                error: function() {}
            });
        }
    });
}

// Form validate
if($('.form-181').length) {

    var formbox_244 = $('.form-181').validate({
        errorElement: 'label',

        errorPlacement: function(error, element) {},

        highlight: function (element, errorClass) { 
            $(element).parent().addClass('inp-error'); 
        }, 
        
        unhighlight: function (element, errorClass) { 
            $(element).parent().removeClass('inp-error'); 
        },
        
        rules: {
            name: {
                required: true,
            },

            phone: {
                required: true,
            },
        },

        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                data: $(form).serialize(),
                url: 'mail-181.php',
                success: function() {
                    $('#info-181').modal('hide');
                    $('#thanks').modal('show');

                    setTimeout(function(){
                        $('#thanks').modal('hide');
                    }, 4000)

                    // formbox_3.resetForm();
                    jQuery('.form-181')[0].reset();
                },


                error: function() {}
            });
        }
    });
}

// Burger menu
$('.burger-btn').on('click', function(){
    $(this).toggleClass('burger-btn--active').promise().done(function(){
        $('.overlay_menu').fadeToggle(300, function(){
            $('body').toggleClass('overlay_menu--open');
        });
    });     
});

$('.overlay_menu__nav ul li').on('click', function(){
    $('.burger-btn').removeClass('burger-btn--active');

    $('.overlay_menu').fadeOut(300);

    $('body').removeClass('overlay_menu--open');
});



// Form validate
if($('.form-diller').length) {

    var formbox_diller = $('.form-diller').validate({
        errorElement: 'label',

        errorPlacement: function(error, element) {},

        highlight: function (element, errorClass) { 
            $(element).parent().addClass('inp-error'); 
        }, 
        
        unhighlight: function (element, errorClass) { 
            $(element).parent().removeClass('inp-error'); 
        },
        
        rules: {
            name: {
                required: true,
            },

            phone: {
                required: true,
            },
        },

        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                data: $(form).serialize(),
                url: 'mail-diller.php',
                success: function() {
                    $('#diller').modal('hide');
                    $('#thanks').modal('show');

                    setTimeout(function(){
                        $('#thanks').modal('hide');
                    }, 4000)

                    // formbox_3.resetForm();
                    jQuery('.form-diller')[0].reset();
                },


                error: function() {}
            });
        }
    });
}

$(document).ready(function() {
    
    var header = $(".top__header"); // Меню
    var scrollPrev = 0 // Предыдущее значение скролла
    
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop(); // Высота скролла в px
        var firstScrollUp = false; // Параметр начала сколла вверх
        var firstScrollDown = false; // Параметр начала сколла вниз
        
        // Если скроллим
        if ( scrolled > 0 ) {
            // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
            if ( scrolled > scrollPrev ) {
                firstScrollUp = false; // Обнуляем параметр начала скролла вверх
                // Если меню видно
                if ( scrolled < header.height() + header.offset().top ) {
                    // Если только начали скроллить вниз
                    if ( firstScrollDown === false ) {
                        var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                        header.css({
                            "top": topPosition + "px"
                        });
                        firstScrollDown = true;
                    }
                    // Позиционируем меню абсолютно
                    header.css({
                        "position": "absolute"
                    });
                // Если меню НЕ видно
                } else {
                    // Позиционируем меню фиксированно вне экрана
                    header.css({
                        "position": "fixed",
                        "top": "-" + header.height() + "px"
                    });
                }
                
            // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
            } else {
                firstScrollDown = false; // Обнуляем параметр начала скролла вниз
                // Если меню не видно
                if ( scrolled > header.offset().top ) {
                    // Если только начали скроллить вверх
                    if ( firstScrollUp === false ) {
                        var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                        header.css({
                            "top": topPosition + "px"
                        });
                        firstScrollUp = true;
                    }
                    // Позиционируем меню абсолютно
                    header.css({
                        "position": "absolute"
                    });
                } else {
                    // Убираем все стили
                    header.removeAttr("style");
                }
            }
            // Присваеваем текущее значение скролла предыдущему
            scrollPrev = scrolled;
        }   
    });         
});