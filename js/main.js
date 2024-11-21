"use strict"

//------------------------------------------------------------------------preloader
//document.body.onload = () => {
//  setTimeout(() => {
//    let preloader = document.getElementById('preloader');
//    if (!preloader.classList.contains('done')) {
//      preloader.classList.add('done');
//    }
//  }, 1000);
//}
//------------------------------------------------------------------------preloader


//------------------------------------------------------------------------появление бекграунда у шапки при прокрутки вниз
//window.addEventListener('scroll', () => {
//  if(pageYOffset > 50) {
//    document.querySelector('.header').classList.add('bg_header');
//  } else {
//    document.querySelector('.header').classList.remove('bg_header');
//  }
//});
//------------------------------------------------------------------------появление бекграунда у шапки при прокрутки вниз


//------------------------------------------------------------------------search
//const searchButtons = document.querySelectorAll('.search__btn');
//const searchWindows = document.querySelectorAll('.search__window');
//
//searchButtons.forEach((searchBtn, index) => {
//  const searchWindow = searchWindows[index]; // Привязываем соответствующее окно к каждой кнопке
//
//  searchBtn.addEventListener("click", function (e) {
//    e.stopPropagation();
//    searchWindow.classList.toggle('_act'); // Открываем/закрываем конкретное окно поиска
//  });
//
//  document.addEventListener("click", function (e) {
//    if (!searchBtn.contains(e.target) && !searchWindow.contains(e.target)) {
//      searchWindow.classList.remove('_act'); // Закрываем окно, если клик вне кнопки или окна
//    }
//  });
//});

//------------------------------------------------------------------------search





//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.burger__wrapper');
const menuBody= document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}
//------------------------------------------------------------------------закрытие меню при клике вне его
document.addEventListener ('click', (e) => {
  if (!burgerMenu.contains(e.target)) {
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  }
})
//------------------------------------------------------------------------закрытие меню при клике вне его


//------------------------------------------------------------------------Прокрутка при клике
//let buttons = document.querySelectorAll('.menu__link');
//
//buttons.forEach((elem)=>{
//  elem.addEventListener('click',()=>{
//    menuBody.classList.remove('_active');
//    burgerMenu.classList.remove('_active');
//  })
//})
//
//const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
//
//if (menuLinks.length > 0) {
//  menuLinks.forEach(menuLink => {
//    menuLink.addEventListener("click", onMenuLinkClick);
//  });
//  function onMenuLinkClick(e) {
//    const menuLink = e.target;
//    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//        const gotoBlock = document.querySelector(menuLink.dataset.goto);
//        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
//      
//        window.scrollTo({
//        top:gotoBlockValue,
//        behavior: "smooth"
//      });
//      e.preventDefault();
//    }
//  }
//}
//------------------------------------------------------------------------Прокрутка при клике

//------------------------------------------------------------------------Слайдер
const mainSlider = document.querySelector('.main-slider');
if (mainSlider) {
  new Swiper(mainSlider, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 1000,
    autoHeight: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      980: {
        slidesPerView: 3,
      }
    }
  });
}
//------------------------------------------------------------------------Слайдер


//-----------------------------------------------------------------------сортировка по атрибутам

//class FilterGallery {
//  
//  constructor() {
//    // Находим элементы меню и контейнер с постами
//    this.filterMenuList = document.querySelectorAll('.filtermenu__list li');
//    this.container = document.querySelector('.filtermenu__container');
//    this.posts = Array.from(this.container.querySelectorAll('.post'));  // Собираем все посты один раз в массив
//    
//    this.updateMenu('all');
//    this.filterMenuList.forEach(item => item.addEventListener('click', (event) => this.onClickFilterMenu(event)));
//  }
//
//  onClickFilterMenu(event) {
//    const target = event.target.closest('li');  // Используем closest чтобы найти li
//    const targetFilter = target.getAttribute('data-filter');
//
//    this.updateMenu(targetFilter);
//    this.updateGallery(targetFilter);
//  }
//
//  updateMenu(targetFilter) {
//    this.filterMenuList.forEach(item => item.classList.remove('active_'));
//    const activeItem = Array.from(this.filterMenuList).find(item => item.getAttribute('data-filter') === targetFilter);
//    if (activeItem) activeItem.classList.add('active_');
//  }
//
//  updateGallery(targetFilter) {
//    // Оптимизация через фильтрацию всех постов разом
//    const postsToShow = targetFilter === 'all'
//      ? this.posts
//      : this.posts.filter(post => post.classList.contains(targetFilter));
//    
//    const postsToHide = this.posts.filter(post => !postsToShow.includes(post));
//
//    // Анимация скрытия и показа
//    this.container.style.opacity = 0;
//    setTimeout(() => {
//      postsToHide.forEach(post => post.style.display = 'none');
//      postsToShow.forEach(post => post.style.display = '');
//      this.container.style.opacity = 1;
//    }, 300);
//  }
//}
//const filterGallery = new FilterGallery();


//-----------------------------------------------------------------------сортировка по атрибутам



//------------------------------------------------------------------------Готовые блоки кода

//------------------------------------------------------------------------Quiz
//const quizBody = document.querySelector('.quiz__body');
//const quizStart = document.querySelector('.quiz__start');
//const formQuiz = document.querySelector('.quiz-form');
//const formItems = formQuiz.querySelectorAll('fieldset');
//const formBtnNext = formQuiz.querySelectorAll('.quiz-form__btn-next');
//const formBtnPrev = formQuiz.querySelectorAll('.quiz-form__btn-prev');
//const overlay = document.querySelector('.overlay');

//const answersObj = {
//  step0: {
//    question: '',
//    answers: [],
//  },
//  step1: {
//    question: '',
//    answers: [],
//  },
//  step2: {
//    question: '',
//    answers: [],
//  },
//  step3: {
//    question: '',
//    answers: [],
//  },
//  step4: {
//    name: "",
//    phone: "",
//    email: "",
//    call: "",
//  },
//}
//
////отключаем квиз
//quizBody.style.display = "none";
//// включаем квиз при клике
//quizStart.addEventListener('click', () => {
//  quizBody.style.display = "block";
//  quizStart.style.display = "none";
//  questionCounter(1);
//});
//
//// создаем индикатор прогресса и выводим номер текущего вопроса
//let questionNumb = 1;
//function questionCounter(index) {
//
//  const quizIndicator = document.querySelector('.quiz-indicator');
//  quizIndicator.innerHTML = `${index} / ${formItems.length}`;
//
//  let progress = document.querySelector(".quiz__progress-inner");
//  progress.style.width = `${Math.round(((index) / formItems.length) * 100)}%`;
//}
//
//// включаем в работу кнопки
//for(let i = 0; i < formBtnPrev.length; i++) {
//  formBtnPrev[i].addEventListener('click', (event) => {
//    event.preventDefault();
//    formItems[i + 1].style.display = "none";
//    formItems[i].style.display = "block";
//    questionNumb--;
//    questionCounter(questionNumb);
//  });
//}
//
//formBtnNext.forEach((btn, btnIndex) => {
//  btn.addEventListener('click', (event) => {
//    event.preventDefault();
//    formItems[btnIndex].style.display = "none";
//    formItems[btnIndex + 1].style.display = "block";
//    questionNumb++;
//    questionCounter(questionNumb);
//    
//  });
//  btn.disabled = true;    
//});
//
////перебираем fieldset и выводим первый
//formItems.forEach((formItem, formItemIndex) => {
//    if(formItemIndex === 0) {
//    formItem.style.display = "block";
//  } else {
//    formItem.style.display = "none";
//  }
//
//  if(formItemIndex !== formItems.length - 1) {
//    const inputs = formItem.querySelectorAll("input");
//    const itemTitle = formItem.querySelector('.quiz-form__title');
//    
//    answersObj[`step${formItemIndex}`].question = itemTitle.textContent;
//
//    inputs.forEach((input) => {
//      const parent = input.parentNode;
//      input.checked = false;
//      parent.classList.remove(".active-radio");
//      parent.classList.remove(".active-checkbox");
//    });
//  }
//  
//    // выбор radio и checkbox
//    formItem.addEventListener('change', (event) => {
//      const target = event.target;
//      const inputsChecked = formItem.querySelectorAll("input:checked");
//
//      if(formItemIndex !== formItems.length - 1) {
//      answersObj[`step${formItemIndex}`].answers.length = 0;
//      inputsChecked.forEach((inputChecked) => {
//        answersObj[`step${formItemIndex}`].answers.push(inputChecked.value);
//      });
//
//      if(inputsChecked.length > 0) {
//        formBtnNext[formItemIndex].disabled = false;
//      } else {
//        formBtnNext[formItemIndex].disabled = true;
//      }
//      
//      if (target.classList.contains("quiz-form__radio")) {
//        const radios = formItem.querySelectorAll(".quiz-form__radio");
//
//        radios.forEach(input => {
//          if(input === target) {
//            input.parentNode.classList.add(".active-radio");
//          } else {
//            input.parentNode.classList.remove(".active-radio");
//          }
//        });
//      } else if (target.classList.contains("quiz-form__checkbox")) {
//        target.parentNode.classList.toggle(".active-checkbox");
//      } else {
//        return;
//      }
//    }
//  });
//});
//
//// сбор и отпрака формы
//const sendForm = () => {
//  formQuiz.addEventListener('submit', (event) => {
//    event.preventDefault();
//    
//    answersObj.step4.name = document.getElementById('quiz-name').value;
//    answersObj.step4.phone = document.getElementById('quiz-phone').value;
//    answersObj.step4.email= document.getElementById('quiz-email').value;
//    answersObj.step4.call = document.getElementById('quiz-call').value;
//    
//    for (let key in answersObj.step4) {
//      if (answersObj.step4[key].value === "") {
//        alert("Введите данные во все поля");
//      }
//    }
//
//    if (document.getElementById("quiz-policy").checked) {
//      postData(answersObj)
//      .then((res) => res.json())
//      .then((res) => {
//        if(res["status"] === "ok") {
//          overlay.style.display = "none";
//          quizBody.style.display = "none";
//          quizStart.style.display = "block";
//          formQuiz.reset();
//          alert(res["message"]);
//        } else if (res["status"] === "error") {
//          alert(res["message"]);
//        }
//      });
//    } else {
//      alert("Дайте согласие на обработку персональных данных")
//    }
//  });
//};
//
//  const postData = (body) => {
//    return fetch("./server.php", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(body)
//    });
//  };
//
//  overlay.style.display = "none";
//  quizBody.style.display = "none";
//
//  const pastTestButton = document.querySelector('.pas__test-button');
//  pastTestButton.addEventListener("click", () => {
//    formItems.forEach((formItem, formItemIndex) => {
//      if (formItemIndex === 0) {
//        formItem.style.display = "block";
//      } else {
//        formItem.style.display = "none";
//      }
//      
//      const inputs = formItem.querySelectorAll("input");
//      inputs.forEach((input) => {
//        const parent = input.parentNode;
//        input.checked = false;
//        parent.classList.remove("active-radio");
//        parent.classList.remove("active-checkbox");
//      });
//    });
//    formBtnNext.forEach((btn) => {
//      btn.disabled = true;
//    });
//    overlay.style.display = "block";
//    quizBody.style.display = "block";
//  });
//    sendForm();

//------------------------------------------------------------------------Quiz

//------------------------------------------------------------------------select выпадающий список
//document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
//  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
//  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
//  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
//  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
//
//  // Функция для закрытия текущего дропдауна
//  function closeCurrentDropdown() {
//    dropDownList.classList.remove('dropdown__list--active');
//    dropDownBtn.classList.remove('dropdown__button--active');
//  }
//
//  // Открыть/закрыть текущий дропдаун
//  dropDownBtn.addEventListener('click', function (e) {
//    e.stopPropagation(); // Остановить всплытие события
//    e.preventDefault(); // Предотвращаем отправку формы
//    const isActive = dropDownList.classList.contains('dropdown__list--active');
//
//    // Закрываем все дропдауны перед открытием текущего
//    document.querySelectorAll('.dropdown__list--active').forEach(function(activeList) {
//      activeList.classList.remove('dropdown__list--active');
//    });
//    document.querySelectorAll('.dropdown__button--active').forEach(function(activeButton) {
//      activeButton.classList.remove('dropdown__button--active');
//    });
//
//    // Если текущий дропдаун не был активным, открываем его
//    if (!isActive) {
//      dropDownList.classList.add('dropdown__list--active');
//      dropDownBtn.classList.add('dropdown__button--active');
//    }
//  });
//
//  // Выбор элемента списка
//  dropDownListItems.forEach(function (listItem) {
//    listItem.addEventListener('click', function (e) {
//      e.stopPropagation(); // Остановить всплытие события
//      e.preventDefault(); // Предотвращаем отправку формы
//      dropDownBtn.innerText = this.innerText;
//      dropDownBtn.focus();
//      dropDownInput.value = this.dataset.value;
//      closeCurrentDropdown(); // Закрываем текущий дропдаун после выбора
//    });
//  });
//
//  // Закрытие при клике снаружи
//  document.addEventListener('click', function (e) {
//    if (!dropDownWrapper.contains(e.target)) {
//      closeCurrentDropdown(); // Закрываем только текущий дропдаун
//    }
//  });
//
//  // Закрытие при нажатии Tab или Escape
//  document.addEventListener('keydown', function (e) {
//    if (e.key === 'Tab' || e.key === 'Escape') {
//      closeCurrentDropdown(); // Закрываем только текущий дропдаун
//    }
//  });
//});
//
//// Инициализация кнопки после загрузки
//function initMyButton() {
//  const myButton = document.getElementById('myButton');
//  
//  if (myButton && myButton.style.display !== 'none') {
//    myButton.addEventListener('click', function(event) {
//      event.preventDefault();
//    });
//  }
//}
//window.onload = initMyButton;

//------------------------------------------------------------------------select выпадающий список


//------------------------------------------------------------------------popup
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");


let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    })
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock () {
  setTimeout(function () {
    if(lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
  }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
//------------------------------------------------------------------------popup

//------------------------------------------------------------------------Accordion
//if (document.querySelector('.accordion__title')) {
//  const titles = document.querySelectorAll('.accordion__title');
//  const contents = document.querySelectorAll('.accordion__content');
//
//  titles.forEach(item => item.addEventListener('click', () => {
//      const activeContent = document.querySelector('#' + item.dataset.tab);
//
//      if (activeContent.classList.contains('active')) {
//          activeContent.classList.remove('active');
//          item.classList.remove('active');
//          activeContent.style.maxHeight = 0;
//      } else {
//          contents.forEach(element => {
//              element.classList.remove('active');
//              element.style.maxHeight = 0;
//          });
//          titles.forEach(element => element.classList.remove('active'));
//
//          item.classList.add('active');
//          activeContent.classList.add('active');
//          activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
//      }
//  }));
//
//  // Добавление класса по умолчанию
//  document.querySelector('[data-tab="tab-1"]').classList.add('active');
//  document.querySelector('#tab-1').classList.add('active');
//  document.querySelector('#tab-1').style.maxHeight = document.querySelector('#tab-1').scrollHeight + 'px';
//}

//------------------------------------------------------------------------Accordion


//------------------------------------------------------------------------Tabs
const tabsButton = document.querySelectorAll('.tabs__nav_button');
const tabsContent = document.querySelectorAll('.tabs__content');

tabsButton.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabsButton.forEach(tab => {tab.classList.remove('active-tab')});
    tab.classList.add('active-tab');
    
    tabsContent.forEach(content => {content.classList.remove('active-tab')})
    tabsContent[index].classList.add('active-tab');
  });
});
//------------------------------------------------------------------------Tabs


//------------------------------------------------------------------------Animation
//const animItems = document.querySelectorAll('._anim-items');
//if (animItems.length > 0) {
//  window.addEventListener('scroll', animOnScroll);
//  function animOnScroll() {
//    for (let index = 0; index < animItems.length; index++) {
//        const animItem = animItems[index];
//        const animItemHeight = animItem.offsetHeight;
//        const animItemOffset = offset(animItem).top;
//        const animStart = 5;
//
//        let animItemPoint = window.innerHeight - animItemHeight / animStart;
//
//        if (animItemHeight > window.innerHeight) {
//          animItemPoint = window.innerHeight - window.innerHeight / animStart;
//        }
//
//        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//          animItem.classList.add('_action');
//        } else {
//          animItem.classList.remove('_action');
//        }
//    }
//  }
//  function offset(el) {
//    const rect = el.getBoundingClientRect(),
//    scrollLeft  = window.pageXOffset || document.documentElement.scrollLeft,
//    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    return {top: rect.top + scrollTop, left: rect.left + screenLeft}
//  }
//  animOnScroll();
//}
//------------------------------------------------------------------------Animation

