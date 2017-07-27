    $(function(){
    //получение данных в формате JSON
    $.getJSON('http://codeit.pro/frontTestTask/news/getList', function(data) {
                $.each(data.list, function(key, val) {
                            var dateadd = new Date(val.date*1000),
                                author = val.author,
                                link = val.link,
                                description = val.description.substr(0,70),
                                img = val.img,
                                block = document.createElement("div"),
                                news = document.getElementById("news");
                            //преобразование в дату формата [день].[месяц].[год]
                            date=dateadd.getDate();
                            date+="."+dateadd.getMonth();
                            date+="."+dateadd.getFullYear();
                            block.setAttribute("class","slide fade");
                            //динамическое создание блока новостей
                            block.innerHTML='<img  alt="'+img+'" class="image" src="'+img+'"></img>'+'<br/>';
                            block.innerHTML+='<a class="title" href="'+link+'">' + link + '</a>'+'<br/>';
                            block.innerHTML+='<span class="desc">' + description + '...</span>'+'<br/>';
                            block.innerHTML+='<span class="author">Author: ' + author + '</span>'+'<br/>';
                            block.innerHTML+='<span class="date">datepub: ' + date + '</span>'+'<br/>';
                            news.appendChild(block);
                });
                            //создание "id" для слайдера
                            var  blockdotes = document.createElement("div"), 
                                slides = document.getElementsByClassName("slide"),
                                 count=data.list.length;
                            for (var i=0;i<count;i++)
                            {
                                if (i==0)
                                    slides[i].style.display="block";
                                else
                                    slides[i].style.display="none";
                                blockdotes.innerHTML+='<span class="dot" onclick="currentSlide('+(i+1)+')"></span>';
                            }
                            news.appendChild(blockdotes);
    });
});