

function RenderPhirloWidget(){
    const phirlo_widget = document.querySelector('.phirlo-widget');
    
    
    phirlo_widget.innerHTML = `
    <div>
    <h3>Shop More | Waste Less</h3>
    <p>Help to declutter your wordrobe  with Phirlo.</p>
    <div>
    <p>By checking this box, you agree to receive marketing emails from Phirlo. You can unsubscribe at any time.</p>
    <input type="checkbox"/>
    </div>
    <button class="phirlo_know_more_btn">Learn More</button>

    </div>
    
    `


    document.querySelector('.order-place-btn').addEventListener('click',()=>{
        const form = document.querySelector('.checkout_form');
        console.log(form)
        const name = form['customer_name'].value;
        const email = form['email'].value;
        const phone = form['phone'].value;
        const address = form['address'].value;

        console.log(name,email,phone,address);
    })

    document.querySelector(".phirlo_know_more_btn").addEventListener('click',()=>{
        document.querySelector(".phirlo_more").classList.remove("phirlo_about_hidden");
    });
}



function RenderAbout(){
    const root = document.getElementById("root");
    const about_contaner = `
    <div class="phirlo_more phirlo_about_hidden">
    <h1>You've opted for a Climate conscious Journey!</h1>
    <h3>Here's how it works</h3>

    <p>Phirlo is a platform that helps you declutter your wardrobe and earn money in the process. We also help you to shop more sustainably by providing you with a curated list of sustainable brands.</p>
   <button class="phirlo-close">Close</button>

    </div>
    
    `
    root.insertAdjacentHTML('beforeend',about_contaner);

    document.querySelector(".phirlo-close").addEventListener('click',()=>{
        document.querySelector(".phirlo_more").classList.add("phirlo_about_hidden");
    });
}



RenderPhirloWidget();
RenderAbout();
