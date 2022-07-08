

const Menu =  () =>{
    const main = document.createElement('div');
    main.classList.add('main');

    let menuItems = {
        Entrees: [
            {
                name: 'First Menu Item',
                desc: 'This is a description of the 1st item, \
                it is currentrly a placeholder. But it is tasty i promise',
            },
            {
                name: 'Second Menu Item',
                desc: 'This is a description of the 2nd item, \
                it is currentrly a placeholder. But it is tasty i promise',
            },
            {
                name: 'Third Menu Item',
                desc: 'This is a description of the 3rd item, \
                it is currentrly a placeholder. But it is tasty i promise',
            },
            {
                name: 'Fourth Menu Item',
                desc: 'This is a description of the 4th item, \
                it is currentrly a placeholder. But it is tasty i promise',
            }
        ]
    };

    let clear = () => {
        main.innerHTML = '';
    }

    let renderTitle = () =>{
        const title = document.createElement('h1');
        title.textContent = 'Menu';
        main.appendChild(title);
    }

    let renderEntrees = () =>{
        const entrees = document.createElement('div');
        entrees.classList.add('Entrees')
        const title = document.createElement('h2');
        title.textContent = 'Entrees';
        entrees.appendChild(title);

        menuItems.Entrees.forEach( item =>{
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const name = document.createElement('h3');
            name.classList.add('item-name');
            name.textContent = item.name;
            const desc = document.createElement('p');
            desc.classList.add('item-desc');
            desc.textContent = item.desc;

            itemDiv.appendChild(name);
            itemDiv.appendChild(desc);
            entrees.appendChild(itemDiv);
        });

        
        
        main.appendChild(entrees);
    }

    const renderAll = () => {
        clear();
        renderTitle();
        renderEntrees();
        console.log('renderMenu');
        return main;
    }

    return {renderTitle, renderEntrees, renderAll};
}

export default Menu;
