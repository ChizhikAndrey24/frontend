<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link href="css/style.css" rel="stylesheet" type="text/css"><!--Подключение стилей-->
    <title>Регистрация</title>
</head>
<body>
    <aside id="wrapper">
            <div class="label">Registration form</div>
            <input class="text" type="text" id="name" name="name" placeholder="ИМЯ"/><br/><br/>
            <input class="text" type="text" id="secondname" name="secondname" placeholder="ФАМИЛИЯ"><br/><br/>
            
            <input class="text" type="text" placeholder="Email" id="email" name="email"><br/><br/>
            <select id="gender">
                <option disabled="disabled" selected="selected">Ваш пол</option>
                <option name="gender" id="female">female</option>
                <option name="gender" id="male">male</option>
            </select><br/><br/>
            <input class="text" type="password" id="pass" name="pass" placeholder="password"><br/><br/>
            
            <input id="check" type="checkbox" name="checkbox">С условиями ознакомлен!<br/>
            <input class="btn" type="button" name="done" id="done" value="Отправить">
            <div id="messageShow"></div>
    </aside>
    
    <script type="text/javascript" src="js/registrationform.js"></script><!--Валидация данных формы-->
</body>
</html>