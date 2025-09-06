// Fade-in seções
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity=1;
            entry.target.style.transform='translateY(0)';
            entry.target.style.transition='all 0.8s ease-out';
            observer.unobserve(entry.target);
        }
    })
},{threshold:0.2});

document.querySelectorAll('.benefit,.step').forEach(el=>observer.observe(el));

// Header scroll
window.addEventListener('scroll',()=>{
    const h=document.getElementById('header');
    if(window.scrollY>50) h.classList.add('scrolled');
    else h.classList.remove('scrolled');
});

// Slider de depoimentos
const slider=document.querySelector('.testimonial-slider');
const slides=document.querySelectorAll('.testimonial');
let index=0;
function showSlide(i){index=(i+slides.length)%slides.length; slider.style.transform=`translateX(-${index*100}%)`;}
document.querySelector('.next').addEventListener('click',()=>showSlide(index+1));
document.querySelector('.prev').addEventListener('click',()=>showSlide(index-1));
setInterval(()=>showSlide(index+1),5000);

// Pop-up e envio de e-mail
const popup=document.getElementById('email-popup');
const popupBtn=document.getElementById('popup-btn');
const emailInput=document.getElementById('email-input');
setTimeout(()=>popup.style.display='flex',5000);
popupBtn.addEventListener('click',()=>{
    const email=emailInput.value.trim();
    if(email){
        alert('Obrigado! Seu email foi registrado.');
        popup.style.display='none';
        // Redirecionar para WhatsApp opcional
        const phone='5511999999999';
        const message=encodeURIComponent('Olá! Obrigado por se inscrever nas Receitas VIP!');
        window.open(`https://wa.me/${phone}?text=${message}`,'_blank');
    } else{
        alert('Por favor, digite um e-mail válido.');
    }
});
