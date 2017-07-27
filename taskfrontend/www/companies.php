<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> <!--подключение jquery-->
    <link href="css/style.css" rel="stylesheet" type="text/css"><!--подключение стилей-->
    <title>Компании</title>
    <script type="text/javascript">
    
        $(document).ready(function()
        { 
                partners = document.getElementById("partners");
            partners.style.display="none"; 
        });
        
        
    </script>
    
</head>
<body>
    <div id="page_preloader" class="preloader">
        <div class="loader">
        </div>
    </div>
    <!--блок с общим количеством компаний-->
    <div class="total">
        <div class="label">Total companies</div>
        <div id="total"></div>
    </div>
    <!--блок со списком компаний-->
    <div class="list">
        <div class="label">List companies</div>
        <select id="listcomp" size="17">
        </select>
    </div>
    
    <div class="clear"></div>
        <!--блок партнеров выбранной компании-->
    <div id="partners">
        <div class="label">Partners</div>
        <div id="percent"></div>
        <div id="partner"></div>
    </div>
    <div class="clear"></div>
    <div class="compbyloc" id="compbyloc">
    </div>
    <div class="listcountries">
        <div class="label">List countires</div>
        <select id="countries" size="17">
        </select>
    </div>
        <!--блок со слайдом новостей-->
    <div class="news" id="news">
            <div class="label">NEWS</div>

    </div>
    <script type="text/javascript" src="js/getcompanies.js" defer></script> <!--получение списка компаний-->
    <script type="text/javascript" src="js/getnews.js" defer></script> <!--получение информации по новостям-->
    <script type="text/javascript" src="js/showslides.js" defer></script> <!--отображение новостей в слайдере-->
    <script type="text/javascript" src="js/getpartners.js" defer></script> <!--отображение партнеров компании-->
    <script type="text/javascript" src="js/preloader.js" defer></script>
    <script type="text/javascript" src="js/companiesbyloc.js" defer></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" defer></script>
</body>
</html>