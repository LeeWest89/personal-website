$(document).ready(function() {

    document.getElementById('navbarDropdown').addEventListener('click', function() {
        let icon = document.getElementById('icon');
        icon.classList.toggle('rotate');

    });

    document.getElementById('svg-link').addEventListener('mouseover', function() {
        document.getElementById('Dribbble-Light-Preview').style.fill = 'aqua';
    });
    
    document.getElementById('svg-link').addEventListener('mouseout', function() {
        document.getElementById('Dribbble-Light-Preview').style.fill = '';
    });

    document.getElementById('li-link').addEventListener('mouseover', function() {
        document.getElementById('path').style.fill = 'aqua';
    });

    document.getElementById('li-link').addEventListener('mouseout', function() {
        document.getElementById('path').style.fill = '#ffffff';
    });

});
