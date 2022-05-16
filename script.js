

var overload_target = function() {

    let outer_links = document.querySelectorAll("[target]");

    for(i = 0; i < outer_links.length; i++){
        outer_links[i].target = "_self";
    }
    
}

overload_target();

window.addEventListener('scroll', function(){
    overload_target();

});


