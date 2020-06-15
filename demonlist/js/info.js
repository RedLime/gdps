var moreinfo_html = `<center><strong style="font-size: 30px">< RedLime GDPS 데몬리스트 안내 페이지 ></strong></center><br><br>` +


`<center><strong style="font-size: 23px">< QnA ></strong></center>`+

`<div>`+
` - <strong>Q. 기록을 등재하고 싶은데 조건이 있나요?</strong><br>` +
` - A. 기록을 등재하기 위해서는 기록의 퍼센트가 각 맵의 등재 기준 퍼센트를 넘어야 합니다. 또한 비밀길이나, 비인가 프로그램(Bypass 제외), 맵 너프 등을 사용한 기록은 등재 되지 않습니다.<br>` +
`</div><br>`+
`<div>`+

` - <strong>Q. 시간이 지났는데 기록이 등재되지 않아요.</strong><br>` +
` - A. 기록 등재 신청이 거절되었다는 의미입니다. FPS Bypass가 240을 넘었거나, 영상이 비정상적이거나 클리어 어템부분이 영상에 모두 포함되어 않는 등 문제가 있는것으로 보입니다. 만약 문제를 찾지 못했다면 기록 등재 신청을 다시 보내주세요.<br>` +
`</div><br>`+
`<div>`+

` - <strong>Q. 기록 등재는 어디서 신청하나요?</strong><br>` +
` - A. 오른쪽 메뉴의 기록 등재 신청창에서 가능합니다.<br>` +
`</div><br>`+
`<div>`+

`<center><strong style="font-size: 23px">< RedLime GDPS 데몬리스트 유저포인트(UP) ></strong></center><br>` +
` - RedLime GDPS 데몬리스트에서는 Pointercrate와는 다른 유저 점수 시스템인 <strong>유저포인트(UP)</strong>를 사용합니다.<br>` +
`또한 Bypass 기록은 모두 144hz와 동일하게 여겨져, 적절하게 Bypass를 사용한 유저에게도 점수가 동일하게 책정됩니다.<br><br>` +
`　점수 추가 지급 -> (Mobile: 2.0배, 60hz: 1.5배, 75hz: 1.25배, 144hz~(Bypass): 1.0배)<br><br>` +
` - <strong>기록이 100%가 아니라면, 해당 기록의 UP는 위 식에서 나온 값의 66%만 적용됩니다.</strong><br>` +

`<br><hr width="80%"><br>`+

`<center><strong style="font-size: 23px">< 유저포인트 트로피 ></strong></center><br>` +
` 유저 포인트는 순위에 따라서 인게임처럼 트로피(일종의 티어)가 붙습니다.<br><br>` +
` <strong>각각의 트로피 조건 : </strong><br>` +
` <img src="./img/top1_trophy.png" width="18px"> Top 1 트로피 : UP 1위 <br>` +
` <img src="./img/gold_trophy.png" width="18px"> Gold 트로피 : UP 500 이상 <br>` +
` <img src="./img/silver_trophy.png" width="18px"> Silver 트로피 : UP 400 이상 <br>` +
` <img src="./img/cooper_trophy.png" width="18px"> Bronze 트로피 : UP 250 이상 <br>` +
` <img src="./img/green_trophy.png" width="18px"> Green 트로피 : UP 100 이상 <br>` +
` <img src="./img/aqua_trophy.png" width="18px"> Aqua 트로피 : UP 50 이상 <br>` +
` <img src="./img/pink_trophy.png" width="18px"> Pink 트로피 : UP 10 이상 <br>` +
` <img src="./img/red_trophy.png" width="18px"> Red 트로피 : UP 리스트 등재 <br>` +

`<br><hr width="80%"><br>`+

`<center><strong style="font-size: 23px">< 운영진 ></strong></center><br>` +
` ㆍRedLime - 리스트 운영, 총괄, 업데이트 작업<br>` +

`<br><br><br><br><br>`;


var record_length = 0;
for (var i = 0 ; i < list.length ; i ++) {
    record_length = record_length + list[i].vids.length;
}


var home_html = `<center><strong style="font-size: 30px;">Welcome to RedLime GDPS Demonlist!</strong></center>` +
`<br>` +
`<strong><center style="font-size: 26px;">RedLime GDPS 데몬리스트에 오신 것을 환영합니다!</strong></center>` +
`<div style="line-height: 35px"><strong>RedLime GDPS 데몬리스트은 RedLime GDPS의 데몬과 기록들을 어려운 순위대로 나열한 리스트입니다.<br>` +
`각 데몬맵마다 유저의 기록이 있으며 맵의 순위도 쉽게 찾아볼 수 있습니다.</strong><br>` +
`현재 RedLime GDPS 데몬리스트에는 <strong>${list.length}개</strong>의 맵에 총 <strong>${record_length}개</strong>의 기록이 등재되어 있으며, <strong>${userData.length}명</strong>이 현재 등재되어 있습니다.<br><br>` +
`또한 누가 리스트 데몬을 많이 깼는지 수치상으로 나타내는 <strong>유저포인트(UP)</strong>가 존재합니다.<br><br>` +
`<strong>상단의 사이드바(<img src="img/sidebar.png" width="17px">)를 통해서 순위와 데몬들을 확인할 수 있습니다.</strong><br><br>` +
`<strong>오른쪽 메뉴에 유저포인트 랭킹 메뉴가 존재합니다.</strong>` +
`<br><br><br>` +
`<strong>관련 링크들 : </strong>` +
`<ul><li><strong><a href="https://gmdkoreaforum.com/">GD 한국포럼</a></strong></li>` +
`</ul></div>`