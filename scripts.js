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

/* Content Sections*/

    const sections = {
        about: `
        <div id="about" class="section text-white text-center font-weight-bold">
        <p>Aspiring web developer with a full year of full stack development experience, possessing key strengths in front-end and back-end development. Demonstrating proficiency in collaborative team environments, focusing on creating dynamic, responsive websites and applications that prioritize user experience and performance.</p>
        </div>
        `,

        contact: `
        <div id="contact" class="section text-white text-center font-weight-bold">
            <p>Contact me at: <br>
            Email: <a href="mailto:lee.west@atlasschool.com" class="email text-decoration-none text-white">lee.west@atlasschool.com</a> <br>
            Phone: (405)448-1629
            </p>
        </div>
        `,

        garden: `
        <div class="project text-white text-center font-weight-bold">
            <h1>Garden of Dreams:</h1>
            <p>A website to help gardeners gather information on local plant species that can thrive in the region.</p><br>
            <br>
            <img class="w-100" src="./images/Garden.jpg" alt="Garden of dreams homepage">
            <p>Link: <a href="https://leewest89.github.io/GardenOfDreams/#" target="_blank" class="project_link text-decoration-none text-white">Garden of Dreams</a> <br></p>
            <br>
        </div>
        `,
        yuletide: `
        <div class="project text-white text-center font-weight-bold">
            <h1>Yuletide Shiver:</h1>
            <p>A short choose your own adventure horror theme christmas game.</p> <br>
            <br>
            <img class="w-100" src="./images/Yule.jpg" alt="Yuletide Shiver gameplay page">
            <p>Link: <a href="https://hacksprint-2023-6d4cc.web.app/" target="_blank" class="project_link text-decoration-none text-white">Yuletide Shiver</a></p> <br>
            <br>
        </div>
        `,
        airbnb: `
        <div class="project text-white text-center font-weight-bold">
            <h1>AirBnB clone - Web dynamic:</h1>
            <p>Groundwork for a website featuring functional filters for user-selected locations.</p> <br>
            <br>
            <p>Github Link: <a href="https://github.com/LeeWest89/holbertonschool-AirBnB_clone_v4" target="_blank" class="project_link text-decoration-none text-white">AirBnB clone - Web dynamic</a></p> <br>
            <br>
        </div>
        `,
    };

    $('#content').html(sections.about);

    $('.nav-link[data-section]').on('click', function(event) {
        event.preventDefault();
        const section = $(this).data('section');
        if (sections[section]) {
            $('#content').html(sections[section]);
        }
    });

    $('.dropdown-item[data-section]').on('click', function(event) {
        event.preventDefault();
        const section = $(this).data('section');
        if (sections[section]) {
            $('#content').html(sections[section]);
        }
    });

});
