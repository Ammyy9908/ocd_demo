

function RenderPhirloWidget(){
    const phirlo_widget = document.querySelector('phirlo-widget');

    const p = document.createElement('p');
    p.innerHTML = 'Phirlo Widget Comes Here';
    phirlo_widget.appendChild(p);
}



window.onload = function(){
    RenderPhirloWidget();
}