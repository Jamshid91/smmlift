
// Зарегистрироваться
const register_email = document.getElementById('register-email'),
      register__btn = document.querySelector('.register__btn'),
      register_result = document.querySelector('.register-result'),
      register_box = document.querySelector('.register-box'),
      result_email = document.querySelector('.result-email'),
      create_account__btn = document.querySelectorAll('.create-account__btn'),
      popUp_register = document.querySelector('.popUp-register'),
      body = document.querySelector('body');
      
create_account__btn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp_register.classList.remove('d-none')
        body.classList.add('bodyStopScroll')
    });
})
      
register_email.addEventListener('input', () => {
    if(register_email.value != '') {
        register__btn.classList.remove('disable')
    } else {
        register__btn.classList.add('disable')
    }
});


register__btn.addEventListener('click', () => {
    register_emailVal = register_email.value.trim();
  
  if(!isEmail(register_emailVal)) {
    register_email.classList.add('error')
    register_email.nextElementSibling.innerHTML = 'Некорректный email'
  }
   else {
    register_email.classList.remove('error')
    register_email.nextElementSibling.innerHTML = '';
    register_email.nextElementSibling.classList.add('success');
    result_email.textContent = register_email.value
  }
    
    let register_emailSuc =  register_email.nextElementSibling.classList;
    
    if(register_emailSuc == 'success') {
        register_box.classList.add('d-none');
        register_result.classList.remove('d-none');
      }
});


// Войти
const login_email = document.getElementById('login-email'),
      login_pass = document.getElementById('login-pass'),
      login_continue__btn = document.querySelector('.login-continue__btn'),
      login_email_box = document.querySelector('.login-email-box'),
      login_pass_box = document.querySelector('.login-pass-box'),
      backTo = document.querySelector('.login-pass-box .backTo'),
      login_btn = document.querySelector('.login__btn'),
      forgot_pass = document.querySelector('.forgot-pass'),
      login = document.querySelector('.login'),
      recover_pass = document.querySelector('.recover-pass'),
      recover_continue__btn = document.querySelector('.recover-continue__btn');
      recover_email = document.getElementById('recover-email');
      backTo_login__btn = document.querySelector('.backTo-login__btn');
      recover_pass__form = document.querySelector('.recover-pass__form');
      recover_pass__result = document.querySelector('.recover-pass__result'),
      sign_in__btn = document.querySelectorAll('.sign-in__btn'),
      popUp_login = document.querySelector('.popUp-login');

sign_in__btn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp_login.classList.remove('d-none')
        body.classList.add('bodyStopScroll')
    });
})
      
login_email.addEventListener('input', () => {
    if(login_email.value != '') {
        login_continue__btn.classList.remove('disable')
    } else {
        login_continue__btn.classList.add('disable')
    }
});

login_continue__btn.addEventListener('click', () => {
    login_email_box.classList.add('d-none')
    login_pass_box.classList.remove('d-none')
});

backTo.addEventListener('click', () => {
    login_email_box.classList.remove('d-none')
    login_pass_box.classList.add('d-none')
});

login_btn.addEventListener('click', () => {
    login_emailVal = login_email.value.trim();
    login_passVal = login_pass.value.trim();
  
  if(!isEmail(login_emailVal) || login_passVal == '') {
    login_email.classList.add('error');
    login_pass.classList.add('error');
    login_pass.nextElementSibling.innerHTML = `Некорректный email и/или пароль. <br> Попробуйте ещёраз.`
  }
   else {
    login_email.classList.remove('error');
    login_pass.classList.remove('error');
    login_pass.nextElementSibling.innerHTML = ''
    login_pass.nextElementSibling.classList.add('success');
  }
    
    let login_passSuc =  login_pass.nextElementSibling.classList;
    if(login_passSuc == 'success') {
        login_btn.type = 'submit'
      }
});

forgot_pass.addEventListener('click', () => {
    login.classList.add('d-none')
    recover_pass.classList.remove('d-none')
});

recover_continue__btn.addEventListener('click', () => {
    recover_emailVal = recover_email.value.trim();
  
  if(!isEmail(recover_emailVal)) {
    recover_email.classList.add('error')
    recover_email.nextElementSibling.innerHTML = 'Некорректный email'
  }
   else {
    recover_email.classList.remove('error')
    recover_email.nextElementSibling.innerHTML = '';
    recover_email.nextElementSibling.classList.add('success');
    recover_email.textContent = register_email.value
  }
    
    let recover_emailSuc =  recover_email.nextElementSibling.classList;
    
    if(recover_emailSuc == 'success') {
        recover_pass__form.classList.add('d-none');
        recover_pass__result.classList.remove('d-none');
      }
});

backTo_login__btn.addEventListener('click', () => {
    login.classList.remove('d-none');
    login_email_box.classList.remove('d-none')
    login_pass_box.classList.add('d-none')
    recover_pass.classList.add('d-none')
});


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }






const popUps = document.querySelectorAll('.popUp'),
      popUp_closeBtns = document.querySelectorAll('.popUp-close');



popUp_closeBtns.forEach(close => {
    close.addEventListener('click', () => {
        
        popUps.forEach(popUp => {
            popUp.classList.add('d-none');
        });
        body.classList.remove('bodyStopScroll')
    })
});


window.addEventListener('click', (e) => {
    popUps.forEach(popUp => {
        if(e.target == popUp) {
            popUp.classList.add('d-none');
            body.classList.remove('bodyStopScroll')
        }
    });
    
})










