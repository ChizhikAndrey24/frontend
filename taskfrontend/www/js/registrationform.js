$(document).ready(function()
{ 
    //при клике на кнопку происходит отправка данных
    $("#done").click(function()
    { 
        //проверка выбраной компании с текущей
        $('#messageShow').hide ();
        var name = $("#name").val(),
            secondname = $("#secondname").val(),
            email = $("#email").val(),
            gender = $("option[name='gender']:checked").val(),
            checkbox = $("input[name='checkbox']:checked").val(),
            pass = $("#pass").val(),
            fail = "";
        
         //Валидация введенных данных
        if (!checkbox)
            {
                fail = "Вы не ознакомлены с условиями. Ознакомьтесь и подтвердите!";
            }
        else if (name.length<3)
            {
                fail = "Имя не меньше 3 символов";
            }
        else if (secondname.length<3)
            {
                fail = "Фамилия не меньше 3 символов";
            } 
        else  if (email.split('@').length-1==0 || email.split('.').length-1==0)
            {
                fail = "Вы ввели некорректный email";
            }
        else if (pass.length<6)
            {
                fail = "Пароль не менее 6 символов";
            }
        else if (!gender)
            {
                fail = "Выберите пол!";
            }
        if (fail!="")
            {
                $('#messageShow').html(fail+"<div class='clear'><br></div>");
                $('#messageShow').show();
                return false;
            }
        //отправка данных на сервер без перезагрузки страницы
        $.ajax(
        {
            url: 'http://codeit.pro/frontTestTask/user/registration',
            type: 'POST',
            cache: false,
            data: {'name': name, 'secondname': secondname, 'email': email,  'gender': gender, 'pass': pass},
            dataType: 'html',
            success: function(data)
            {
                $('#messageShow').html(data+"<div class='clear'><br></div>");
                $('#messageShow').show();
                //alert(data);
                if (data=='{"message":"User created","status":"OK"}')
                {
                    //отправка на страницу компании в случае успешной регестрации
                    window.location.href= 'companies.php';
                }
            }
        });
    });
});