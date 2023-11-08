burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', () => {
    rightNav.classlist.toggel('v-class-resp')
    navlist.classlist.toggel('v-class-resp')
    navbar.classlist.toggel('h-nav-resp')
})