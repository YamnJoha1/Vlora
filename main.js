const menuTabs = document.querySelectorAll(".menu-tab");

const messageNotifi = document.getElementById("messages-notifi");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.getElementById("message-search");

const theme = document.querySelector("#theme");
const themeWindow = document.querySelector(".themes");
const fontSize = document.querySelectorAll(".selecte-size span");
var root = document.querySelector(":root");
const colorMode = document.querySelectorAll(".selecte-color span"); 


const removeActive = () => {
  menuTabs.forEach((t) => {
    t.classList.remove("active");
  });
};

menuTabs.forEach((t) => {
  t.addEventListener("click", () => {
    removeActive();
    t.classList.add("active");
    if (t.id != "notifications") {
      document.querySelector(".notifi-popup").style.display = "none";
    } else {
      document.querySelector(".notifi-popup").style.display = "block";
      document.querySelector("#notifications .notifi-count").style.display =
        "none";
    }
  });
});

messageSearch.addEventListener("keyup", () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    const name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
});

messageNotifi.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 10px var(--c-primary)";
  document.querySelector("#messages-notifi .notifi-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});


themeWindow.addEventListener('click', (e) => {
  if(e.target.classList.contains('themes')){
    themeWindow.style.display = 'none';
    removeActive();
  }
});

theme.addEventListener('click', () => {
  themeWindow.style.display = "grid";
});

const removeActiveSize = () => {
  fontSize.forEach(size => {
    size.classList.remove("active");
  });
}

fontSize.forEach(size => {
  size.addEventListener("click", () => {
    removeActiveSize();
    let fontSize;
    size.classList.toggle("active");
    if(size.classList.contains("font-size-1")){
      fontSize = '8px';
      root.style.setProperty("--stic-top-left", "55px");
      root.style.setProperty("--stic-top-right", "55px");
    } else if(size.classList.contains("font-size-2")){
      fontSize = "13px"
      root.style.setProperty("--stic-top-left", "55px");
      root.style.setProperty("--stic-top-right", "-70px");
    } else if(size.classList.contains("font-size-3")){
      fontSize = "16px"
      root.style.setProperty("--stic-top-left", "-20px");
      root.style.setProperty("--stic-top-right", "-160px");
    } else if(size.classList.contains("font-size-4")){
      fontSize = "18px"
      root.style.setProperty("--stic-top-left", "-55px");
      root.style.setProperty("--stic-top-right", "-220px");
    } else if(size.classList.contains("font-size-5")){
      fontSize = "22px"
      root.style.setProperty("--stic-top-left", "-120px");
      root.style.setProperty("--stic-top-right", "-350px");
    }
    document.querySelector('html').style.fontSize = fontSize;
  });
});

const removeActiveColor = () => {
  colorMode.forEach(color => {
    color.classList.remove("active");
  });
}

colorMode.forEach(color => {
  color.addEventListener("click", () => {
    removeActiveColor();
    let primaryHue;
    if(color.classList.contains("color-1")){
      primaryHue = 192;
    } else if(color.classList.contains("color-2")){
      primaryHue = 216;
    } else if(color.classList.contains("color-3")){
      primaryHue = 56;
    } else if(color.classList.contains("color-4")){
      primaryHue = 167;
    } else if(color.classList.contains("color-5")){
      primaryHue = 325;
    }
    color.classList.add("active");
    root.style.setProperty("--c-prim-hue", primaryHue);
  });
});