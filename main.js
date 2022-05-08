window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}
function showNavOnScroll(){
  if(scrollY > 0) {
    navigation.classList.add('scroll')
      }
     else{
         navigation.classList.remove('scroll')
     }
}
function showBackToTopButtonOnScroll() {
  if(scrollY > 450) {
    backToTopButton.classList.add('show')
      }
     else{
         backToTopButton.classList.remove('show')
     }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}




