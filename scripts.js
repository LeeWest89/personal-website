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
        <div id="about" class="section text-white text-center font-weight-bold pr-3 pl-3">
        <p>Lee West is a Full Stack web developer passionate about creating beautiful, user-friendly websites. Over the past year, he has honed his skills in web development and teamwork. Lee is committed to continuously learning new technologies to advance his professional growth and make a significant impact in the tech industry.</p><br>
        <p>He considers himself a continual learner, never satisfied with simply completing tasks without understanding the underlying reasons. This drive has led to the self-realization that he must balance his desire for knowledge with the ability to meet deadlines. His time at Atlas School has helped Lee develop this essential skill.</p><br>
        <p>Lee believes that determination and drive are the keys to success in any endeavor, whether personal or professional. He is currently attending Atlas School, but is open to new opportunities. You can contact Lee at <a href="mailto:lee.west@atlasschool.com" class="email text-decoration-none text-white">lee.west@atlasschool.com</a>.</p><br>
        </div>
        `,

        contact: `
        <div id="contact" class="section text-white text-center font-weight-bold pr-1 pl-1">
            <p>Contact me at: <br>
            Email: <a href="mailto:lee.west@atlasschool.com" class="email text-decoration-none text-white">lee.west@atlasschool.com</a> <br>
            Phone: (405)448-1629
            </p>
        </div>
        `,

        garden: `
        <div class="project text-white text-center font-weight-bold pr-1 pl-1">
            <h1>Garden of Dreams:</h1>
            <p>A website to help gardeners gather information on local plant species that can thrive in the region.</p><br>
            <br>
            <img class="pr-2 pl-2 w-100" src="./images/Garden.jpg" alt="Garden of dreams homepage">
            <p>Link: <a href="https://leewest89.github.io/GardenOfDreams/#" target="_blank" class="project_link text-decoration-none text-white">Garden of Dreams</a><br></p>
            <p>README Link: <a href="https://github.com/LeeWest89/GardenOfDreams/blob/main/README.md" target="_blank" class="project_link text-decoration-none text-white">Garden of Dreams README.md</a><br></p>
            <br>
        </div>
        `,
        yuletide: `
        <div class="project text-white text-center font-weight-bold pr-1 pl-1">
            <h1>Yuletide Shiver:</h1>
            <p>A short choose your own adventure horror theme christmas game.</p> <br>
            <br>
            <img class="pr-2 pl-2 w-100" src="./images/Yule.jpg" alt="Yuletide Shiver gameplay page">
            <p>Link: <a href="https://hacksprint-2023-6d4cc.web.app/" target="_blank" class="project_link text-decoration-none text-white">Yuletide Shiver</a></p><br>
            <p>README Link: <a href="https://github.com/Jtownokie/HackSprint-2023/blob/main/README.md" target="_blank" class="project_link text-decoration-none text-white">Yuletide Shiver README.md</a><br></p>
            <br>
        </div>
        `,
        airbnb: `
        <div class="project text-white text-center font-weight-bold pr-1 pl-1">
            <h1>AirBnB clone - Web dynamic:</h1>
            <p>Groundwork for a website featuring functional filters for user-selected locations.</p> <br>
            <br>
            <p>Github Link: <a href="https://github.com/LeeWest89/holbertonschool-AirBnB_clone_v4" target="_blank" class="project_link text-decoration-none text-white">AirBnB clone - Web dynamic</a></p><br>
            <p>README Link: <a href="https://github.com/LeeWest89/holbertonschool-AirBnB_clone_v4/blob/master/README.md" target="_blank" class="project_link text-decoration-none text-white">AirBnB clone - Web dynamic README.md</a><br></p>
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

    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.navbar-nav');
    const header = document.querySelector('header');
    const DD = document.querySelector('.navbarDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const listItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        navBar.classList.toggle('active')
        header.classList.toggle('nav-margin')
    })

    DD.addEventListener('click', () => {
        header.classList.toggle('DD_projects');
    });

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('navbarDropdown')) {
                hamburger.classList.remove('active');
                navBar.classList.remove('active');
                header.classList.remove('nav-margin');
            }
        });
    });
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navBar.classList.remove('active');
            header.classList.remove('nav-margin')
            header.classList.remove('DD_projects')
        });
    });

});
