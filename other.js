const labelHidden = document.getElementById('email-error');
labelHidden.style.visibility='hidden';

const btnDismiss = document.getElementById('btn-dismiss');
btnDismiss.style.display = 'none';

const btnSubmit = document.getElementById('btn-form');
const form = document.getElementById('form')

let imgMobile = document.getElementById('img-mobile');
let imgDesktop = document.getElementById('img-desktop')
let title = document.getElementById('title');
let texts = document.getElementById('texts');

let newsletter = document.getElementById('newsletter')

let imgSucess = document.getElementById('img-success');
imgSucess.style.display='none'

let input = document.getElementById('email');

let largura = window.innerWidth;

function ajustarLargura(){
    largura = window.innerWidth;
    console.log(largura)

    return largura
}

window.onresize = ajustarLargura;


function emailTest(email){
    let validate = /\S+@\S+\.\S+/;

   return validate.test(email);
}

function emailInvalid(){
    labelHidden.style.visibility = 'visible'
    input.style.border = '1px solid hsl(4, 100%, 67%)';
    input.style.backgroundColor = '#FFE8E6'
}

function Success(){

    let email = document.getElementById('email').value;


    newsletter.classList.add('newsletter-success');
    newsletter.classList.remove('newsletter');


    texts.style.margin='0'
    texts.style.margin='1.5rem 0'
    texts.style.lineHeight='150%'


    if (largura <= 1000){
        btnDismiss.style.marginTop = '200px'
    } else {
        btnDismiss.style.marginTop='15px'
    }

    
    title.innerHTML='Thanks for subscribing!';
    texts.innerHTML=`A confirmation email has been sent to <strong> ${email}</strong>. Please open it and click the button inside to confirm your subscription.`;

    btnSubmit.style.display='none';
    btnDismiss.style.display = 'block';
    imgDesktop.style.display = 'none';
    imgMobile.style.display = 'none';
    imgSucess.style.display = 'block'

}

function FormSubmit(e){

    let email = document.getElementById('email').value;

    console.log('form submit')


    if (emailTest(email) == true){
        Success();

      
    } else{
        emailInvalid()
    }


}

function btnDismissPress(){
    location.reload()
}

btnSubmit.addEventListener('click', FormSubmit);
btnDismiss.addEventListener('click', btnDismissPress);
