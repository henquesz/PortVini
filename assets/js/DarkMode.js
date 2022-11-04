window.onload=function(){

    const DarkBtn = document.getElementById('teste-moon');
    const body = document.querySelector('body');

    
    const darkMode = () => {
        body.classList.toggle('dark-mode')
    } 

    DarkBtn.addEventListener('click', () => {
        setDarkMode = localStorage.getItem('dark-mode');

        if(setDarkMode !== "on"){
            darkMode();

            setDarkMode = localStorage.setItem('dark-mode', 'on');

        }else{
            darkMode();

            setDarkMode = localStorage.setItem('dark-mode', null);

        }
    });

    let setDarkMode = localStorage.getItem('dark-mode');

    if(setDarkMode === 'on'){
        darkMode();
    }
}