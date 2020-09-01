var moreinfo_html = `<center><strong style="font-size: 30px">< RedLime GDPS 데몬리스트 안내 페이지 ></strong></center><br><br>` +


`<center><strong style="font-size: 23px">< QnA ></strong></center>`+

`<div>`+
` - <strong>Q. I want to register a record, are there any conditions?</strong><br>` +
` - A. In order to be listed, the percentage of records must exceed the percent of each level listed. In addition, no records are registered using secret ways, unauthorized programs (except Bypass), level nerf (or easy mode), etc.<br>` +
`</div><br>`+
`<div>`+

` - <strong>Q. How long does it take for a record to be listed?</strong><br>` +
` - A. The record will be processed within 72 hours, no matter how long.<br>` +
`</div><br>`+
`<div>`+

` - <strong>Q. Where do I apply for record registration? (Where do I apply for user ranking listing / updates?)</strong><br>` +
` - A. You can do this from the record registration application window on the right.<br>` +
`</div><br>`+
`<div>`+

`<br><hr width="80%"><br>`+

`<center><strong style="font-size: 23px">< User Point Trophy ></strong></center><br>` +
` <strong>각각의 트로피 조건 : </strong><br>` +
` <img src="./img/top1_trophy.png" width="18px"> Top 1 Trophy : UP Top 1 <br>` +
` <img src="./img/gold_trophy.png" width="18px"> Gold Trophy : UP 30 or over <br>` +
` <img src="./img/silver_trophy.png" width="18px"> Silver Trophy : UP 20 or over <br>` +
` <img src="./img/cooper_trophy.png" width="18px"> Bronze Trophy : UP 10 or over <br>` +
` <img src="./img/green_trophy.png" width="18px"> Green Trophy : UP 5 or over <br>` +
` <img src="./img/red_trophy.png" width="18px"> Red Trophy : record registred <br>` +

`<br><br><br><br><br>`;


var record_length = 0;
for (var i = 0 ; i < list.length ; i ++) {
    record_length = record_length + list[i].vids.length;
}


var home_html = `<center><strong style="font-size: 30px;">Welcome to RedLime GDPS Demonlist!</strong></center>` +
`<br>` +
`<div style="line-height: 35px"><strong>The RedLime GDPS Demonlist is a difficult ranking list of the demons and records of RedLime GDPS.<br>` +
`You can find the each level has a user's record and level's rank</strong><br>` +
`Now RedLime GDPS having a <strong>${list.length}</strong> Levels, <strong>${record_length}</strong> Records, <strong>${userData.length}</strong> People Registered.<br><br>`;