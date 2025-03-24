

let apiKey='772b20d44e4f4d1ba2c30aaf3616a037';


let userSearch='music';

async function NewApi(){
    let url=await fetch(`https://newsapi.org/v2/everything?q=${userSearch}&apiKey=${apiKey}`);
    let response=await url.json();
    //  collapseData(response.articles)
     let article=response.articles;

     article.forEach(element => {


      if(element.urlToImage && element.description ){

        let cart_container=document.querySelector('.cart_container'); 
        let div=document.createElement('div');
        div.classList.add('cart');
        div.innerHTML=
        `
        <img src='${element.urlToImage}' alt="News images">
        <h3 class="News_title">${element.title}</h3>
        <P class='damiTetx'>${element.description}</p>
          <button class='btn'>ViewMore<button>
        `
        cart_container.appendChild(div);
           
     let cart=document.querySelectorAll('.cart')
       
         
        cart.forEach((value)=>{
          value.addEventListener('click',()=>{
            window.open(element.url,"_blank");
          })

        })

      }
  
        })
        
      }    
        
NewApi();







