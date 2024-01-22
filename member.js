function skillsMember() {
    var skills = [
        {
            name: 'HTML',
            icon: 'fab fa-html5',
            level: '90'
        },
        {
            name: 'CSS',
            icon: 'fab fa-css3-alt',
            level: '90'
        },
        {
            name: 'SASS',
            icon: 'fab fa-sass',
            level: '80'
        },
        {
            name: 'JavaScript',
            icon: 'fab fa-js',
            level: '70'
        },
        {
            name: 'jQuery',
            icon: 'fab fa-jquery',
            level: '70'
        },
        {
            name: 'PHP',
            icon: 'fab fa-php',
            level: '60'
        },
        {
            name: 'MySQL',
            icon: 'fas fa-database',
            level: '60'
        },
        {
            name: 'WordPress',
            icon: 'fab fa-wordpress',
            level: '60'
        },
        {
            name: 'Photoshop',
            icon: 'fab fa-adobe',
            level: '50'
        },
        {
            name: 'Illustrator',
            icon: 'fab fa-adobe',
            level: '50'
        },
        {
            name: 'XD',
            icon: 'fab fa-adobe',
            level: '50'
        },
        {
            name: 'Git',
            icon: 'fab fa-git-alt',
            level: '50'
        }
    ];

    var skillsMember = '';

    for (var i = 0; i < skills.length; i++) {
        skillsMember += '<li class="skills__item">';
        skillsMember += '<i class="skills__icon ' + skills[i].icon + '"></i>';
        skillsMember += '<span class="skills__name">' + skills[i].name + '</span>';
        skillsMember += '<span class="skills__level" style="width: ' + skills[i].level + '%;"></span>';
        skillsMember += '</li>';
    }

    document.getElementById('skillsMember').innerHTML = skillsMember;
}