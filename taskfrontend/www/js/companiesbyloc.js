
$("#countries").on("click", function()
{
    var countries = document.getElementById("countries"),country = $("#countries option:selected").text();
                        countries.innerHTML="";
    //alert($("#countries option:selected").text());
    $.getJSON('http://codeit.pro/frontTestTask/company/getList', function(data) 
    {
        var arrCompByCountry = [];
        $.each(data.list, function(key, val) 
               {
                                if (val.location.name==country)
                                { 
                                //создание двумерного массива компаний в формате [Название, процент]
                                    //alert(val.name);
                                    arrCompByCountry.push(val.name);
                                    $('#countries').append('<option>' + val.name + '</option>');

                                }
                });
    });
                            /*
                    $('#countries').append('<option>' + val.name + '</option>');*/

});