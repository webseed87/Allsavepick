

$('.serachnext').click(function () {
    $('#savepickWrap .allsave').hide();
    $('#savepickWrap .saveChat').addClass('active');

    setTimeout(function () { $('.saveChat .msg:first-child').addClass('up'); }, 100);
    setTimeout(function () { $('.saveChat .msg:nth-child(2)').addClass('up'); }, 200);
    setTimeout(function () { $('.saveChat .msg:last-child').addClass('up'); }, 400);
    
});

$(function () {
    $('.question1').hide();
    $('.choice1').hide();
    $('.question2').hide();
    $('.choice2').hide();
    $('.question3').hide();
    $('.choice3').hide();
    $('.question4').hide();
    $('.choice4').hide();
    $('.question5').hide();
    $('.choice5').hide();
    $('.question6').hide();
    $('.choice6').hide();
    $('.question7').hide();
    $('.choice7').hide();


    $("input[name=quiz1]:radio").click(function () {
        if ($('input[name=quiz1]:checked').val() == "수능") {
            $('.question1').hide(0).delay(200).show(0);
            $('.choice1').hide(0).delay(400).show(0);
    
        } else if ($('input[name=quiz1]:checked').val() == "고시") {
            $('.question1').hide();
            $('.choice1').hide();
            $('.question2').hide();
            $('.choice2').hide();
            $('.question3').show();
            $('.choice3').show();

        }
    });

    $("input[name=quiz2]:radio").click(function () {
        if ($('input[name=quiz2]:checked').val() == "고등학교재학생") {
            $('.question2').hide(0).delay(200).show(0);
            $('.choice2').hide(0).delay(400).show(0);
    
        } else if ($('input[name=quiz2]:checked').val() == "N수/검정고시생") {
            $('.question2').hide();
            $('.choice2').hide();
            $('.question3').hide(0).delay(200).show(0);
            $('.choice3').hide(0).delay(400).show(0);

        }
    });

    $("input[name=quiz3]:radio").click(function () {
        $('.question3').show();
            $('.choice3').show();
                 $("#saveformwarp").scrollTop($("#saveformwarp")[0].scrollHeight);
    });
    $("input[name=quiz4]:radio").click(function () {
        $('.question4').show();
            $('.choice4').show();
            $("#saveformwarp").scrollTop($("#saveformwarp")[0].scrollHeight);
    
    });
    $("input[name=quiz5]:radio").click(function () {
        $('.question5').show();
            $('.choice5').show();
            $("#saveformwarp").scrollTop($("#saveformwarp")[0].scrollHeight);
    
    });
    $("input[name=quiz6]:radio").click(function () {
        $('.question6').show();
            $('.choice6').show();
            $("#saveformwarp").scrollTop($("#saveformwarp")[0].scrollHeight);
    
    });
    $("input[name=quiz7]:radio").click(function () {
        $('.question7').show();
            $('.choice7').show();
            $("#saveformwarp").scrollTop($("#saveformwarp")[0].scrollHeight);
    
    });



    $("input[name=quiz9]:radio").click(function () {
        if ($('input[name=quiz9]:checked').val() == "네,맞아요!") {
            $('#savepickWrap .condition').hide();
    $('#savepickWrap .sale').addClass('active');
    
        } else if ($('input[name=quiz9]:checked').val() == "다시답변할래요!") {
            $('#savepickWrap .condition').hide();
            $('#savepickWrap .saveChat').show();
        }
    });


});

$('.conform').click(function () {
    $('#savepickWrap .saveChat').hide();
    $('#savepickWrap .condition').show();
    $('#savepickWrap .condition').addClass('active');

    setTimeout(function () { $('.condition .msg:first-child').addClass('up'); }, 100);
    setTimeout(function () { $('.condition .msg:nth-child(2)').addClass('up'); }, 200);
    setTimeout(function () { $('.condition .msg:last-child').addClass('up'); }, 400);
    
});



$(".more1").click(function(){
  $(".save1").toggle();
});
$(".more2").click(function(){
  $(".save2").toggle();
});
$(".more3").click(function(){
  $(".save3").toggle();
});
$(".more4").click(function(){
  $(".save4").toggle();
});
$(".more5").click(function(){
  $(".save5").toggle();
});
$(".more6").click(function(){
  $(".save6").toggle();
});

$(".more7").click(function(){
  $(".save7").toggle();
});

$(".more8").click(function(){
  $(".save8").toggle();
});
$(".more9").click(function(){
  $(".save9").toggle();
});
$(".more10").click(function(){
  $(".save10").toggle();
});
$(".more11").click(function(){
  $(".save11").toggle();
});

	data_1_1 = new Option("강남센터", "강남센터");
	data_1_2 = new Option("대치센터 1관", "대치센터 1관");
	data_1_3 = new Option("대치센터 3관", "대치센터 3관");
	data_1_4 = new Option("강동센터", "강동센터");
	data_1_5 = new Option("강동센터 2관", "강동센터 2관");
	data_1_6 = new Option("송파센터", "송파센터");
	data_1_7 = new Option("신림센터", "신림센터");
	data_1_8 = new Option("노량진센터 1관", "노량진센터 1관");
	data_1_9 = new Option("노량진센터 2관", "노량진센터 2관");
	data_1_10 = new Option("목동센터 1관", "목동센터 1관");
	data_1_11 = new Option("목동센터 3관", "목동센터 3관");
	data_1_11 = new Option("목동센터 2관", "목동센터 2관");
	data_1_12 = new Option("마포신촌센터", "마포신촌센터");
    data_1_13 = new Option("목동 양천구청점", "목동 양천구청점");
    data_1_14 = new Option("광명센터", "광명센터");
    data_1_15 = new Option("노원 중계센터 1관", "노원 중계센터 1관");
    data_1_16 = new Option("노원 중계센터 2관", "노원 중계센터 2관");
    data_1_17 = new Option("노원 중계센터 3관", "노원 중계센터 3관");
    data_1_18 = new Option("성북센터", "성북센터");
    data_1_19 = new Option("송파센터", "송파센터");
    data_1_20 = new Option("신림센터", "신림센터");
    data_1_21 = new Option("은평서대문센터", "은평서대문센터");
    data_1_22 = new Option("강동 길동점", "강동 길동점");
    data_1_23 = new Option("목동 양천구청점", "목동 양천구청점");
    data_1_24 = new Option("강동 길동점", "강동 길동점");



	data_2_1 = new Option("광명센터", "광명센터");
	data_2_2 = new Option("구리남양주센터", "구리남양주센터");
	data_2_3 = new Option("김포센터", "김포센터");
	data_2_4 = new Option("동탄센터", "동탄센터");
	data_2_5 = new Option("부천센터 1관", "부천센터 1관");
	data_2_6 = new Option("부천센터 2관", "부천센터 2관");
	data_2_7 = new Option("분당 수내센터", "분당 수내센터");
	data_2_8 = new Option("분당 이매센터", "분당 이매센터");
    data_2_9 = new Option("분당 정자센터 1관", "분당 정자센터 1관");
    data_2_10 = new Option("분당 정자센터 2관", "분당 정자센터 2관");
    data_2_11 = new Option("산본센터", "산본센터");
    data_2_12 = new Option("수원 영통센터", "수원 영통센터");
    data_2_13 = new Option("수원 정자센터", "수원 정자센터");
    data_2_14 = new Option("안산센터", "안산센터");
    data_2_15 = new Option("안양 평촌센터", "안양 평촌센터");
    data_2_16 = new Option("용인 수지센터 1관", "용인 수지센터 1관");
    data_2_17 = new Option("용인 수지센터 2관", "용인 수지센터 2관");
    data_2_18 = new Option("의정부센터", "의정부센터");
    data_2_19 = new Option("인천 논현센터", "인천 논현센터");
    data_2_20 = new Option("인천 부평센터", "인천 부평센터");
    data_2_21 = new Option("인천 연수송도센터 1관", "인천 연수송도센터 1관");
    data_2_22 = new Option("인천 청라센터", "인천 청라센터");
    data_2_23 = new Option("일산 백마센터", "일산 백마센터");
    data_2_24 = new Option("일산 주엽센터", "일산 주엽센터");
    data_2_25 = new Option("일산 화정센터", "일산 화정센터");
    data_2_26 = new Option("파주센터", "파주센터");
    data_2_27 = new Option("평택센터", "평택센터");
    data_2_28 = new Option("구리 수택점", "구리 수택점");
    data_2_29 = new Option("부천 중동점", "부천 중동점");
    data_2_30 = new Option("수원 영통점","수원 영통점");
    data_2_31 = new Option("용인 수지구청점","용인 수지구청점");


	data_3_1 = new Option("대전 둔산센터 1관","대전 둔산센터 1관");
	data_3_2 = new Option("대전 둔산센터 2관","대전 둔산센터 2관");
	data_3_3 = new Option("대전 유성센터","대전 유성센터");
	data_3_4 = new Option("세종센터","세종센터");
    data_3_5 = new Option("천안센터 1관","천안센터 1관");
    data_3_6 = new Option("천안센터 2관","천안센터 2관");
    data_3_7 = new Option("청주센터","청주센터");
    data_3_8 = new Option("전주 중화산점","전주 중화산점");
    data_3_9 = new Option("천안 불당점","천안 불당점");

	data_4_1 = new Option("김해센터", "김해센터");
	data_4_2 = new Option("대구 동성로센터", "대구 동성로센터");
	data_4_3 = new Option("대구 상인센터", "대구 상인센터");
	data_4_4 = new Option("대구 수성구센터 1관", "대구 수성구센터 1관");
	data_4_5 = new Option("대구 수성구센터 2관", "대구 수성구센터 2관");
	data_4_6 = new Option("대구 수성구센터 3관", "대구 수성구센터 3관");
	data_4_7 = new Option("대구 수성구센터 4관", "대구 수성구센터 4관");
	data_4_8 = new Option("대구 수성구센터 5관", "대구 수성구센터 5관");
	data_4_9 = new Option("대구 시지센터", "대구 시지센터");
	data_4_10 = new Option("대구 월성센터", "대구 월성센터");
	data_4_11 = new Option("마산센터", "마산센터");
    data_4_12 = new Option("부산 경성대센터", "부산 경성대센터");
    data_4_13 = new Option("부산 사직센터", "부산 사직센터");
    data_4_14 = new Option("부산 서면센터", "부산 서면센터");
    data_4_15 = new Option("부산 센텀센터 1관", "부산 센텀센터 1관");
    data_4_16 = new Option("부산 센텀센터 2관", "부산 센텀센터 2관");
    data_4_17 = new Option("부산 화명센터", "부산 화명센터");
    data_4_18 = new Option("부산대센터 1관", "부산대센터 1관");
    data_4_19 = new Option("부산대센터 2관", "부산대센터 2관");
    data_4_20 = new Option("양산센터", "양산센터");
    data_4_21 = new Option("울산 옥동센터 1관", "울산 옥동센터 1관");
    data_4_22 = new Option("울산 옥동센터 2관", "울산 옥동센터 2관");
    data_4_23 = new Option("진주센터", "진주센터");
    data_4_24 = new Option("창원 상남센터 1관", "창원 상남센터 1관");
    data_4_25 = new Option("창원 상남센터 2관", "창원 상남센터 2관");
    data_4_26 = new Option("창원 상남센터 3관", "창원 상남센터 3관");
    data_4_27 = new Option("포항센터", "포항센터");
    data_4_28 = new Option("대구 동성로점", "대구 동성로점");
    data_4_29 = new Option("울산 옥동점", "울산 옥동점");
    data_4_30 = new Option("창원 상남점", "창원 상남점");

	data_5_1 = new Option("광주 봉선센터", "광주 봉선센터");
	data_5_2 = new Option("광주 수완센터", "광주 수완센터");
	data_5_3 = new Option("광주 충장로센터 1관", "광주 충장로센터 1관");
	data_5_4 = new Option("광주 충장로센터 2관", "광주 충장로센터 2관");
	data_5_5 = new Option("원주센터", "원주센터");
	data_5_6 = new Option("전주 송천센터", "전주 송천센터");
	data_5_7 = new Option("전주 전북대센터 1관", "전주 전북대센터 1관");
	data_5_8 = new Option("전주 전북대센터 2관", "전주 전북대센터 2관");
	data_5_9 = new Option("전주 중화산센터", "전주 중화산센터");
	data_5_10 = new Option("제주센터 1관", "제주센터 1관");
	data_5_11 = new Option("제주센터 2관", "제주센터 2관");
    data_5_12 = new Option("춘천센터", "춘천센터");


	
	displaywhenempty = "-선택없음-"
	valuewhenempty = ""
	displaywhennotempty = "- 항목선택↓  -"
	valuewhennotempty = ""

	function change(currentbox) {
		numb = currentbox.id.split("_");
		currentbox = numb[1];
		i = parseInt(currentbox) + 1
	
		while ((eval("typeof(document.getElementById(\"combo_" + i + "\"))!='undefined'")) &&
			(document.getElementById("combo_" + i) != null)) {
			son = document.getElementById("combo_" + i);
			for (m = son.options.length - 1; m > 0; m--) son.options[m] = null;
			son.options[0] = new Option(displaywhenempty, valuewhenempty)
			i = i + 1
		}

		stringa = 'data'
		i = 0
		while ((eval("typeof(document.getElementById(\"combo_" + i + "\"))!='undefined'")) &&
			(document.getElementById("combo_" + i) != null)) {
			eval("stringa=stringa+'_'+document.getElementById(\"combo_" + i + "\").selectedIndex")
			if (i == currentbox) break;
			i = i + 1
		}

		following = parseInt(currentbox) + 1
		if ((eval("typeof(document.getElementById(\"combo_" + following + "\"))!='undefined'")) &&
			(document.getElementById("combo_" + following) != null)) {
			son = document.getElementById("combo_" + following);
			stringa = stringa + "_"
			i = 0
			while ((eval("typeof(" + stringa + i + ")!='undefined'")) || (i == 0)) {
		
				if ((i == 0) && eval("typeof(" + stringa + "0)=='undefined'"))
					if (eval("typeof(" + stringa + "1)=='undefined'"))
						eval("son.options[0]=new Option(displaywhenempty,valuewhenempty)")
					else
						eval("son.options[0]=new Option(displaywhennotempty,valuewhennotempty)")
				else
					eval("son.options[" + i + "]=new Option(" + stringa + i + ".text," + stringa + i + ".value)")
				i = i + 1
			}

			i = 1
			combostatus = ''
			cstatus = stringa.split("_")
			while (cstatus[i] != null) {
				combostatus = combostatus + cstatus[i]
				i = i + 1
			}
			return combostatus;
		}
	}

