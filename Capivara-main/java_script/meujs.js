let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById ('theme-switch')

const enableDarkmode = ()

themeSwitch.addEventListener ('click', () => {
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})