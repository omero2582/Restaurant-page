const Home = () => {
    const main = document.querySelector('.main');

    const clear = ()  =>{
        main.innerHTML = '';
    };

    const renderIntro = () => {
        const intro = document.createElement('div');
        intro.classList.add('intro');
    
        const h1 = document.createElement('h1');
        h1.textContent = "Omero's Kingdom";
    
        const p1 = document.createElement('p');
        p1.textContent = "Omero's Kingdom has been in business since 2022 and it serves the best food on \
        the planet u can ask Obama and he will vouch for me. 10/5 stars on Yelp reviews \
        no cap potentially on a stack.";
    
        intro.appendChild(h1);
        intro.appendChild(p1);
        main.appendChild(intro);
    };

    const renderHours = () => {
        const hours = document.createElement('div');
        hours.classList.add('hours');
    
        const h2 = document.createElement('h2');
        h2.textContent = 'Hours of Operation';
        const schedule = document.createElement('div');
        schedule.classList.add('schedule');
    
        const sunThu = document.createElement('p');
        sunThu.textContent = 'Sun-Thu:';
        const times1 = document.createElement('p');
        times1.textContent = '1pm - 11pm';
        const friSat = document.createElement('p');
        friSat.textContent = 'Fri-Sat:'
        const times2 = document.createElement('p');
        times2.textContent = '1pm - 1am';
    
        schedule.appendChild(sunThu);
        schedule.appendChild(times1);
        schedule.appendChild(friSat);
        schedule.appendChild(times2);
    
        hours.appendChild(h2);
        hours.appendChild(schedule);
        main.appendChild(hours);
    };
   
    const renderAll = () => {
        clear();
        renderIntro();
        renderHours();
        renderLocation();
        console.log('renderHome');
    };

    const renderLocation = () =>{
        const location = document.createElement('div');
        location.classList.add('location');

        const h2 = document.createElement('h2');
        h2.textContent = 'Location';
        const p1 = document.createElement('p');
        p1.textContent = '1120 Nicetryguy Ave.';

        location.appendChild(h2);
        location.appendChild(p1);
        main.appendChild(location);
    };

    renderAll();
    
    return {clear, renderAll, renderIntro, renderHours, renderLocation};
}; 

export default Home;