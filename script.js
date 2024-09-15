var toggleButton = document.getElementById('toggle-skills');
var SKILLS = document.getElementById('SKILLS');
toggleButton.addEventListener('click', function () {
    if (SKILLS.style.display === 'none') {
        SKILLS.style.display = 'block';
    }
    else {
        SKILLS.style.display = 'none';
    }
});
