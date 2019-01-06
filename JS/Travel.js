//Ajax-宣告-使用非同步
var xhr = new XMLHttpRequest();

xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97','true');
xhr.send(null);


//確認跨站讀取到JSON 才會執行function
xhr.onload = function(){

    var str = JSON.parse(xhr.responseText);
    var data = str.result.records;
    console.log(data);
    var len = data.length;

    var selectArea = document.querySelector('#selectArea');
    var showList = document.querySelector('#showList');
    var areaTitle = document.querySelector('#areaTitle');

    var area1 = document.querySelector('#area1');
    var area2 = document.querySelector('#area2');
    var area3 = document.querySelector('#area3');
    var area4 = document.querySelector('#area4');

    selectArea.addEventListener('change',updateList);
    area1.addEventListener('click',updateList);
    area2.addEventListener('click',updateList);
    area3.addEventListener('click',updateList);
    area4.addEventListener('click',updateList);


    function updateList(e){
        var str = '';
        var select = e.target.value;
        console.log(select);
        for(var i=0;i<len;i++){
            if(select == data[i].Zone){
                str += '<div class="col-lg-4 col-md-6 col-10 mt-5"><div class="Attractions-block"><img class="Attractions-img" src="'+data[i].Picture1+'" alt=""><div class="Attractions-title">'+data[i].Name+'</div><div class="Attractions-area">'+data[i].Zone+'</div></div><div class="Attractions-content"><div class="Attractions-text"><img class="img-clock" src="picture/icons_clock.png" alt="">'+data[i].Opentime+'</div><div class="Attractions-text"><img class="img-pin" src="picture/icons_pin.png" alt="">'+data[i].Add+'</div><div class="Attractions-text"><img class="img-phone" src="picture/icons_phone.png" alt="">'+data[i].Tel+'</div><div class="Attractions-free"><img class="img-free" src="picture/icons_tag.png" alt="">'+data[i].Ticketinfo+'</div></div></div>';
            }
        }
        showList.innerHTML = str;
        areaTitle.innerHTML = '<div class="col-8 title3">'+select+'</div>';
        console.log(str);
    } 
    
}
