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
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-8020731-9');
