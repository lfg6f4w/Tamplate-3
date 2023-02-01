let categories = document.querySelectorAll('.category .side-bar > a');
let messagesNet = document.querySelector('#messages');
let messages = document.querySelector('.messages');
let message = messages.querySelectorAll('.message');
let SearchMessage = document.querySelector('#search-message');
let Theme = document.querySelector('#theme');
let ThemeModal = document.querySelector('.cus-theme');
let fontSize = document.querySelectorAll('.sizes > span');
let root = document.querySelector(':root');
let colors = document.querySelectorAll('.colors > span');
let Background1 = document.querySelector('.bg-1');
let Background2 = document.querySelector('.bg-2');
let Background3 = document.querySelector('.bg-3');

const removeActiveEle = () => {
  categories.forEach((ele) => {
    ele.classList.remove('active');
  })
}

categories.forEach((ele) => {
  ele.addEventListener('click', () => {
    removeActiveEle();
    ele.classList.add('active');
    if (ele.id != "net") {
      document.querySelector('.notification-bar').style.display = "none";
    }
    else {
      document.querySelector('.notification-bar').style.display = "block";
      document.querySelector('.number').style.display = "none";
    }
  })
})
messagesNet.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--main-color)';
  messagesNet.querySelector('.number').style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  },2000);
})
SearchMessage.addEventListener('keyup', () => {
  let val = SearchMessage.value.toLowerCase();
  message.forEach((ele) => {
    let name = ele.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      ele.style.display = 'flex';
    }
    else {
      ele.style.display = 'none';
    }
  })
});
Theme.addEventListener('click', () => {
  ThemeModal.style.display = 'flex';
});
ThemeModal.addEventListener('click', (ele) => {
  if (ele.target.classList.contains('cus-theme')) {
    ThemeModal.style.display = 'none';
  }
})
fontSize.forEach((ele) => {
  ele.addEventListener('click', () => {
    fontSize.forEach((e) => {
      e.classList.remove('active');
    });
    ele.classList.toggle('active');
    let rem = document.querySelector('html');
    if (ele.classList.contains('size-1')) {
      rem.style.fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    }
    else if (ele.classList.contains('size-2')) {
      rem.style.fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    }
    else if (ele.classList.contains('size-3')) {
      rem.style.fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    }
    else if (ele.classList.contains('size-4')) {
      rem.style.fontSize = '19px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    }
    else if (ele.classList.contains('size-5')) {
      rem.style.fontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-12rem');
      root.style.setProperty('--sticky-top-right', '-35rem');
    }
  })
})

colors.forEach((ele) => {
  ele.addEventListener('click', () => {
    colors.forEach((e) => {
      e.classList.remove('active');
    });
    ele.classList.add('active');
    if (ele.classList.contains('color-1')) {
      root.style.setProperty('--main-color', '#6b4ce6');
    }
    else if (ele.classList.contains('color-2')) {
      root.style.setProperty('--main-color', '#e6d14c');
    }
    else if (ele.classList.contains('color-3')) {
      root.style.setProperty('--main-color', '#e64c61');
    }
    else if (ele.classList.contains('color-4')) {
      root.style.setProperty('--main-color', '#4ce69e');
    }
    else if (ele.classList.contains('color-5')) {
      root.style.setProperty('--main-color', '#4cade6');
    }
  })
})

let DarkColor;
let lightColor;
let white
const change = () => {
  root.style.setProperty('--dark-color', DarkColor);
  root.style.setProperty('--light-color', lightColor);
  root.style.setProperty('--white', white);
}
Background2.addEventListener('click', () => {
  DarkColor = "#f0eef6";
  lightColor = '#262626';
  white = '#2b2343';
  Background2.classList.add('active');
  Background1.classList.remove('active');
  Background3.classList.remove('active');
  change();
})
Background3.addEventListener('click', () => {
  DarkColor = "#f0eef6";
  lightColor = '#000';
  white = '#1a1a1a';
  Background3.classList.add('active');
  Background1.classList.remove('active');
  Background2.classList.remove('active');
  change();
})
Background1.addEventListener('click', () => {
  DarkColor = "#241e38";
  lightColor = '#f0eef6';
  white = '#ffffff';
  Background1.classList.add('active');
  Background3.classList.remove('active');
  Background2.classList.remove('active');
  change();
})