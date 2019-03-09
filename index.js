// scroll to anchors
new SmoothScroll('a[href*="#"]', {
  offset: 130
});

// show/hide small devices menu
function toggleMenu() {
  const isShown = (document.getElementById('menu').style.display === 'flex') && window.matchMedia('(max-width: 740px)').matches;
  if (isShown) {
    document.getElementById('menu').style.display = 'none';
  } else {
    document.getElementById('menu').style.display = 'flex';
  }
}

// google analytics
window.dataLayer = window.dataLayer || [];
window['ga-disable-UA-8020731-9'] = hasOptOutGA();
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-8020731-9');

function gaOptOut(event) {
  event.preventDefault();
  event.stopPropagation();

  document.cookie = "refuse-cookies=true;max-age=31536000";
  window['ga-disable-UA-8020731-9'] = true;
  hideCookiesInfo();
}

function gaAccept() {
  document.cookie = "refuse-cookies=false;max-age=31536000";
  hideCookiesInfo();
}

function hasOptOutGA() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)refuse-cookies\s*\=\s*([^;]*).*$)|^.*$/, "$1") === 'true';
}

function hideCookiesInfo() {
  document.getElementById("cookies-info").style.display = 'none';
}

// when DOM is ready, display cookies info if no choices were made before
document.addEventListener("DOMContentLoaded", function() {
  if (document.cookie.split(';').filter((item) => item.trim().startsWith('refuse-cookies=')).length === 0) {
    document.getElementById("cookies-info").style.display = 'block';
  }
});