
const Contact = () => {
    const main = document.createElement('div');
    main.classList.add('contact');

    const clear = () =>{
        main.innerHTML = '';
    }
    const renderContactInfo = () => {
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contactInfo');

        const title = document.createElement('h1');
        title.textContent = 'Contact';
        const desc = document.createElement('p');
        desc.textContent = 'iiomero2582ii@gmail.com';
        contactInfo.appendChild(title);
        contactInfo.appendChild(desc);
        main.appendChild(contactInfo);
    };

    const renderAll = () => {
        clear();
        renderContactInfo();
        console.log('renderContact');
        return main;
    };
    return {renderContactInfo, renderAll}
};

export default Contact;

//TODO read the contact info from an object that has something like
/* array = [
    {
        title: 'Email',
        source: 'iiomero2582ii@gmail.com'
    }
    {
        title: 'Youtube',
        source: 'youtube.com/c/omero2582'
    }
]
*/