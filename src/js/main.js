window.addEventListener('DOMContentLoaded', () => {
        
        const humburger  = document.querySelector('.hamburger-box'),
                menu = document.querySelector('.hamburger-menu');

       
        function hideHumburger () {
                menu.classList.add('hide');
                humburger.addEventListener('click', (event) => {
                        const e = event.target;
                                if(menu.classList.contains('hide')) {
                                        menu.classList.add('show', 'fade');
                                        menu.classList.remove('hide');
                                } else {
                                        menu.classList.remove('show', 'fade');
                                        menu.classList.add('hide');

                        }
                });
        }
        hideHumburger();
        });
