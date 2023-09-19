

const menuBtn = document.getElementById('menu')
const closeBtn = document.getElementById('close')
const sidebar = document.getElementById('sidebar')

menuBtn.addEventListener('click', function () {
   
    sidebar.classList.toggle('sidebar-open')
    closeBtn.classList.toggle('d-block')
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-open')
    closeBtn.classList.remove('d-block')

})