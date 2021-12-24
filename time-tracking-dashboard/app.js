const dailyBtn = document.querySelector(".daily-button");
const weeklyBtn = document.querySelector(".weekly-button");
const monthlyBtn = document.querySelector(".monthly-button");

const daily = document.querySelectorAll(".daily");
const weekly = document.querySelectorAll(".weekly");
const monthly = document.querySelectorAll(".monthly");

//Daily
dailyBtn.addEventListener("click", () => {   
    daily.forEach((item)=>{
        if(!item.classList.contains("show")){
            item.classList.add("show");
        }
    })
    weekly.forEach((item)=>{
        if(item.classList.contains("show")){
            item.classList.remove("show");
        }
    })
    monthly.forEach((item) => {
        if(item.classList.contains("show")){
            item.classList.remove("show");
        }
    })
})

//Weekly
weeklyBtn.addEventListener("click", () => {
    weekly.forEach((item)=>{
        if(!item.classList.contains("show")){
            item.classList.add("show");
        }      
    })
    daily.forEach((item)=>{
        if(item.classList.contains("show")){
            item.classList.remove("show");
        }    
    })
    monthly.forEach((item) => {
        if(item.classList.contains("show")){
            item.classList.remove("show");
        }        
    })
})

//Monthly
monthlyBtn.addEventListener("click", () => {
    monthly.forEach((item)=>{
        if(!item.classList.contains("show")){
            item.classList.add("show");
        }    
    })
    daily.forEach((item)=>{
        if(item.classList.contains("show")){
            item.classList.remove("show");
        }      
    })
    weekly.forEach((item) => {
        if(item.classList.contains("show")){
            item.classList.remove("show");
        }     
    })
   
})


