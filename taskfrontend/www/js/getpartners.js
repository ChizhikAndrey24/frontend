$("#listcomp").on("click", function()
{
    //Очистка блока и создание заглавного подблока блока 
    var partners = document.getElementById("partners"),
        blocklabel = document.createElement("div"),
        spansortname = document.createElement("span"),
        spansortnameRev = document.createElement("span"),
        spansortper = document.createElement("span"),
        spansortperRev = document.createElement("span"),
        arrpartners =  [];
    partners.innerHTML="";
    blocklabel.setAttribute("class","label");
    blocklabel.innerHTML="Partners";
    
    spansortname.setAttribute("id","sortname");
    spansortnameRev.setAttribute("id","sortnameRev");
    spansortper.setAttribute("id","sortper");
    spansortperRev.setAttribute("id","sortperRev");
    
    spansortname.innerHTML="By name: &#8593;";
    spansortnameRev.innerHTML="&#8595;";
    spansortper.innerHTML="By percent: &#8593;";
    spansortperRev.innerHTML="&#8595;";
    
    blocklabel.appendChild(spansortname);
    blocklabel.appendChild(spansortnameRev);
    blocklabel.appendChild(spansortper);
    blocklabel.appendChild(spansortperRev);
    partners.appendChild(blocklabel);
    partners.style.display="block"; 
    //получение данных в формате JSON
    $.getJSON('http://codeit.pro/frontTestTask/company/getList', function(data) 
    {
        $.each(data.list, function(key, val) 
               {
                    //Проверка на совпадение выбранной записи
                    if (val.name==$("#listcomp option:selected").text())
                        { 
                            for (var key1 in data.list[key].partners)
                            {   
                                //создание двумерного массива компаний в формате [Название, процент]
                                var arr = new Array();
                                arr[0]=val.partners[key1].name;
                                arr[1]=val.partners[key1].value;
                                arrpartners.push(arr);
                                //arrpartners.value.push(val.partners[key1].value);
                                //динамическое создание блока партнеров
                                /**/
                            }
                        }
                });
        //for( var i =0;i<arrpartners.length;i++ )
        //for( var j =0;j<arr.length;j++ )
        
    // Функции сортировки по компании
    function sName(a, b) 
    {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else return 0;
    }

    // Функции сортировки по проценту 
    function sValue(a, b) 
    {
        if (a[1] > b[1]) return 1;
        else if (a[1] < b[1]) return -1; else return 0;
    }

// Сортировка
//arrpartners.sort(sValue);
//arrpartners.reverse();
//arrpartners.sort(sValue);
        $("#sortname").on("click", function()
        {
            var blocklabel = document.createElement("div"),
                spansortname = document.createElement("span"),
                spansortnameRev = document.createElement("span"),
                spansortper = document.createElement("span"),
                spansortperRev = document.createElement("span");
            
            partners.innerHTML="";
            blocklabel.setAttribute("class","label");
            blocklabel.innerHTML="Partners";

            spansortname.setAttribute("id","sortname");
            spansortnameRev.setAttribute("id","sortnameRev");
            spansortper.setAttribute("id","sortper");
            spansortperRev.setAttribute("id","sortperRev");

            spansortname.innerHTML="By name: &#8593;";
            spansortnameRev.innerHTML="&#8595;";
            spansortper.innerHTML="By percent: &#8593;";
            spansortperRev.innerHTML="&#8595;";

            blocklabel.appendChild(spansortname);
            blocklabel.appendChild(spansortnameRev);
            blocklabel.appendChild(spansortper);
            blocklabel.appendChild(spansortperRev);
            partners.appendChild(blocklabel);
            arrpartners.sort(sName);
            for (var i=0; i<arrpartners.length;i++)
                {
                        partners = document.getElementById("partners");
                        var blockpartner = document.createElement("div");
                        blockpartner.setAttribute("class","partner");
                                blockpartner.innerHTML=arrpartners[i][0]+"<br/>"+arrpartners[i][1];
                                partners.appendChild(blockpartner);
                }
        });
        
        $("#sortnameRev").on("click", function()
        {
            var partners = document.getElementById("partners"),
                blocklabel = document.createElement("div"),
                spansortname = document.createElement("span"),
                spansortnameRev = document.createElement("span"),
                spansortper = document.createElement("span"),
                spansortperRev = document.createElement("span");
            
            partners.innerHTML="";
            blocklabel.setAttribute("class","label");
            blocklabel.innerHTML="Partners";

            spansortname.setAttribute("id","sortname");
            spansortnameRev.setAttribute("id","sortnameRev");
            spansortper.setAttribute("id","sortper");
            spansortperRev.setAttribute("id","sortperRev");

            spansortname.innerHTML="By name: &#8593;";
            spansortnameRev.innerHTML="&#8595;";
            spansortper.innerHTML="By percent: &#8593;";
            spansortperRev.innerHTML="&#8595;";

            blocklabel.appendChild(spansortname);
            blocklabel.appendChild(spansortnameRev);
            blocklabel.appendChild(spansortper);
            blocklabel.appendChild(spansortperRev);
            partners.appendChild(blocklabel);
            arrpartners.sort(sName);
            arrpartners.reverse();
            for (var i=0; i<arrpartners.length;i++)
                {
                                var blockpartner = document.createElement("div");
                                blockpartner.setAttribute("class","partner");
                                blockpartner.innerHTML=arrpartners[i][0]+"<br/>"+arrpartners[i][1];
                                partners.appendChild(blockpartner);
                }
        });
        $("#sortper").on("click", function()
        {
            var blocklabel = document.createElement("div"),
                spansortname = document.createElement("span"),
                spansortnameRev = document.createElement("span"),
                spansortper = document.createElement("span"),
                spansortperRev = document.createElement("span");
            
            partners.innerHTML="";
            blocklabel.setAttribute("class","label");
            blocklabel.innerHTML="Partners";

            spansortname.setAttribute("id","sortname");
            spansortnameRev.setAttribute("id","sortnameRev");
            spansortper.setAttribute("id","sortper");
            spansortperRev.setAttribute("id","sortperRev");

            spansortname.innerHTML="By name: &#8593;";
            spansortnameRev.innerHTML="&#8595;";
            spansortper.innerHTML="By percent: &#8593;";
            spansortperRev.innerHTML="&#8595;";

            blocklabel.appendChild(spansortname);
            blocklabel.appendChild(spansortnameRev);
            blocklabel.appendChild(spansortper);
            blocklabel.appendChild(spansortperRev);
            partners.appendChild(blocklabel);
            arrpartners.sort(sValue);
            for (var i=0; i<arrpartners.length;i++)
                {
                                var blockpartner = document.createElement("div");
                                blockpartner.setAttribute("class","partner");
                                blockpartner.innerHTML=arrpartners[i][0]+"<br/>"+arrpartners[i][1];
                                partners.appendChild(blockpartner);
                }
        });
        $("#sortperRev").on("click", function()
        {
            var blocklabel = document.createElement("div"),
                spansortname = document.createElement("span"),
                spansortnameRev = document.createElement("span"),
                spansortper = document.createElement("span"),
                spansortperRev = document.createElement("span");
            
            partners.innerHTML="";
            blocklabel.setAttribute("class","label");
            blocklabel.innerHTML="Partners";

            spansortname.setAttribute("id","sortname");
            spansortnameRev.setAttribute("id","sortnameRev");
            spansortper.setAttribute("id","sortper");
            spansortperRev.setAttribute("id","sortperRev");

            spansortname.innerHTML="By name: &#8593;";
            spansortnameRev.innerHTML="&#8595;";
            spansortper.innerHTML="By percent: &#8593;";
            spansortperRev.innerHTML="&#8595;";

            blocklabel.appendChild(spansortname);
            blocklabel.appendChild(spansortnameRev);
            blocklabel.appendChild(spansortper);
            blocklabel.appendChild(spansortperRev);
            partners.appendChild(blocklabel);
            arrpartners.sort(sValue);
            arrpartners.reverse();
            for (var i=0; i<arrpartners.length;i++)
                {
                                var blockpartner = document.createElement("div");
                                blockpartner.setAttribute("class","partner");
                                blockpartner.innerHTML=arrpartners[i][0]+"<br/>"+arrpartners[i][1];
                                partners.appendChild(blockpartner);
                }
        });
    });
});