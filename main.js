

let RecipeContainer =document.querySelector('.RecipeContainer'); 
let userSearch=document.getElementById('userSearch');
let RecipeError=document.querySelector('.RecipeError .errormsg');

function SearchBar(){
    

    RecipeContainer.innerHTML='' ;
    RecipeError.style.display='none';

    if(userSearch.value.trim()===''){
        RecipeError.innerHTML='Please Enter Your Recipe Item';
        RecipeError.style.display='block';
        RecipeError.style.color='red';
        return;
    }



    let Url=fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch.value}`);
    Url
    .then(response=>response.json())
    .then(data=>{

        if(!data.meals){
            RecipeError.innerHTML='The reciepe is not Found';
            RecipeError.style.display='block';
        }else{
            data.meals.forEach((value)=>{
               
              

                let div=document.createElement('div');
                div.classList.add('card');
                
                div.innerHTML=`
                <img src=${value.strMealThumb} alt="">
                <h3>${value.strMeal}</h3>
                <button onclick='viewRecipe(${value.idMeal})'>View Recipe</button>
                `
                RecipeContainer.appendChild(div);

            })
        }
    })
}




function viewRecipe(mealID){
    
 let url =fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
 url.then(res=>res.json())
 .then(dataval=>{
  
   
   let recipe_content=document.querySelector('.recipe_content');
   let P_title=document.getElementById('P_title');
   let P_description=document.getElementById('P_description');
   let instruction=dataval.meals[0].strInstructions;
   P_title.innerHTML=dataval.meals[0].strMeal;
   P_description.innerHTML=instruction;
   recipe_content.style.display='flex';
   document.querySelector('.recepie_btn').addEventListener('click',()=>{
    recipe_content.style.display='none';
    
   });
 });

}
