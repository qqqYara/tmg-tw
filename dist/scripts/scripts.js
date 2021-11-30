$(document).ready(function () {
    new WOW().init();

    // smooth scroll
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });

    // password validation rules
    $.validator.addMethod("pasRegexp", 
        function(value, element) {
            return this.optional(element) || /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{2,19}$/.test(value);
        }, "1 letter, 1 number and one symbol"
    );

    // form validation options
    $('.window__form').validate({
        rules: {
            firstName: {
                required: true,
                minlength: 3
            },
            secondName: {
                required: true,
                minlength: 3
            },
            selectContry: {
                required: true,
            },
            phone: {
                required: true,
                minlength: 7
            },
            password: {
                required: true,
                pasRegexp: true,
                minlength: 3
            },
            password_again: {
              equalTo: "#input_password"
            },
            email: {
                required: true,
                email: true,
                minlength: 5
            },
            agree: {
                required: true,
            },
        },
        messages: {
            firstName: "The name must be more than 2 characters",
            secondName: "The name must be more than 2 characters",
            selectContry: "Fill in the field",
            phone: "Fill in the field",
            password: "Password must have 1 letter, 1 number and one symbol",
            password_again: "Password does not match",
            email: "Email is not correct",
            agree: " ",
        },
        // submitHandler: function(form) {
        //     form.submit();
        //     setTimeout(function(){
        //         $('.input-item').removeClass('error')
        //     }, 3000);
        // },
    });

    // set value of phone input
    $('#input_country').change(function(){
        var valOption = $('#input_country').val();
        $('#input_phone').val(valOption);
        $('#input_phone').focus();
        // $('#input_country').val("");
    });

    // set class on filled input
    $('.input-item').focusout(function(){      
        var text_val = $(this).val()
        
        if (text_val === ""){        
          $(this).removeClass('has-value');        
        } else {        
          $(this).addClass('has-value');        
        }      
    });

    $('.submit-btn').click(function(){
        setTimeout(function(){
            $('.input-item').removeClass('error')
            $('.check-box').removeClass('error')
            $('.error').css( 'display', 'none')

        }, 4000);
    });

    // document.querySelector('form.window__form').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     let x = document.querySelector('form.window__form').elements;
    //     console.log("Username: ", x['email'].value);
    //     console.log("Password: ", x['password'].value);
    // });
});