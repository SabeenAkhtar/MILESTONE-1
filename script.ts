const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const SKILLS = document.getElementById('SKILLS') as HTMLElement

toggleButton.addEventListener('click', ()=> {
    if(SKILLS.style.display === 'none'){
        SKILLS.style.display = 'block'
    }else {SKILLS.style.display = 'none'
    }
}) ; 