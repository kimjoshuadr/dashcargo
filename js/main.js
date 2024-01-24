// get started btn hover
document.querySelector('#solutions .btn-gs').addEventListener('mouseover', () => {
    document.querySelector('#solutions .btn-gs i').style.color = 'var(--second-color-hover)'
})
document.querySelector('#solutions .btn-gs').addEventListener('mouseout', () => {
    document.querySelector('#solutions .btn-gs i').style.color = 'var(--second-color)'
})
// scroll navbar effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar')
    const select = document.querySelector('.collapse')
    const logo = document.getElementById('brand-name')
    if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) && window.screen.width > 576) {
        nav.style.background = '#A8D0E600'
        select.style.background = 'var(--color-white)'
        select.classList.add('rounded')
        if (logo.classList.contains('fade-in')) {
            logo.classList.remove('fade-in')
        }
        logo.classList.add('fade-out')
        select.style.transition = '0.3s'
    } else {
        nav.style.background = 'var(--body-color)'
        select.style.background = 'var(--body-color)'
        select.classList.remove('rounded')
        if (logo.classList.contains('fade-out')) {
            logo.classList.remove('fade-out')
        }
        logo.classList.add('fade-in')
    }
})