$(function () {
 
    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu_slide'),
        menuLink = document.getElementById('menu__link_slide'),
        active = 'active';

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }
    
    function removeClass(element,className){
        element.classList.remove(className);
    }

    menuLink.onclick = function (e) {
        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };
    document.body.onclick=function(e){
        //If click on slide menu link, or toggler
        if( $(e.target).closest('#'+menu.id).length || e.target.id == menuLink.id){
            return
        }
        removeClass(layout, active);
        removeClass(menu, active);
        removeClass(menuLink, active);  
    }
});

