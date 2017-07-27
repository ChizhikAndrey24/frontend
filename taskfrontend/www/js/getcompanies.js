
var arrcountries = [],
    arrpercent = [];
$(function()
{
    //получение данных в формате JSON
    $.getJSON('http://codeit.pro/frontTestTask/company/getList', function(data) 
    {
        $.each(data.list, function(key, val) 
        {
            //динамическое создание блока со списком компаний
            $('#listcomp').append('<option>' + val.name + '</option>');
            arrcountries.push(val.location.name);
            
        });
                    //alert(arrcountries);
        i = arrcountries.length, uniquecountries = [];
        arrcountries.sort();

        while(i--){
            if(uniquecountries.join('').search(arrcountries[i]) == '-1') {
                uniquecountries.push(arrcountries[i]);
            }
        }

        //alert(uniquecountries);
        //динамическое создание блока с общим количеством компаний 
        var count=data.list.length,
            percent;
        $('#total').append('<span id="spantotal">' + count + '</span>');
    
            for (var i=0;i<uniquecountries.length;i++)
            {
                percent=0;
                //alert(uniquecountries[i]);
                $('#countries').append('<option>' + uniquecountries[i] + '</option>');
                for (var j=0;j<arrcountries.length;j++)
                    {
                        if (uniquecountries[i]==arrcountries[j])
                            percent++;
                    }
                    percent = (percent/100)*count;
                        arrpercent.push(percent);
            }
        

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Country');
        data.addColumn('number', 'Percent');
          for (var i=0;i<uniquecountries.length;i++)
          {
            data.addRows([ [uniquecountries[i], arrpercent[i]] ]);
          }

        // Set chart options
        var options = {'title':'Copmpanies by location',
                       'width':300,
                       'height':300,
                          'float': "left"};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('compbyloc'));
        chart.draw(data, options);
          
      }
            //alert (arrpercent);
    
        });
});
