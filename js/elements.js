document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-box');

    header.innerHTML = `
    <div class="header-socials">
    <a href="https://www.instagram.com/yuliya.kuzmitskaya/?hl=ru" target="_blank">
        <div class="instagram"></div>
    </a>
    <a href="" target="_blank">
        <div class="telegram"></div>
    </a>
    <a href="" target="_blank">
        <div class="viber"></div>
    </a>
    <a href="" target="_blank">
        <div class="skype"></div>
    </a>
     </div>
    <div class="header-links">
    <div class="phone1"></div>
    <a href="tel:+375292528916">
        <div class="phone-number">+375292528916 (МТС)</div>
    </a>
    <div class="phone2"></div>
    <a href="tel:+375296196484">
        <div class="phone-number">+375296196484 (А1)</div>
    </a>
    <div class="email"></div>
    <a href="mailto:bulavotschka@mail.ru">
        <div class="email-adress">bulavotschka@mail.ru</div>
    </a>
     </div>`;

});