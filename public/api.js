const city_input=document.getElementById('city_in');
const submitBtn=document.getElementById('submit');
const alert=document.getElementById("alert")
const temp=document.getElementById("temp")
const temp_min_max=document.getElementById("temp_min_max")
const Status=document.getElementById("status")
const city_output=document.getElementById('city_o');
const temp_img=document.getElementById("temp_img")
const humidity=document.getElementById("humidity")
const pressure=document.getElementById("pressure")

const convert_k_to_deg_C=(k)=>{
  return(k-273.15)
}

const call_API=async(e)=>{
   
    e.preventDefault();
    let city_val=city_input.value;
    city_input.value=""
    if(city_val===""){
        alert.classList.remove("d-none");
        alert.innerHTML=`pls put a valid City name`
    }
    else{
        try{
        city_output.innerHTML=`City : ${city_val}`
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${city_val}&appid=24756d2868b913f743a6648971f837e1`
        const res= await fetch(url);
        const data= await res.json();
        const arr_data=[data];
        let realtemp=Math.floor(convert_k_to_deg_C(parseInt(arr_data[0].main.temp)))
        let realtemp_min=Math.floor(convert_k_to_deg_C(parseInt(arr_data[0].main.temp_min)))
        let realtemp_max=Math.floor(convert_k_to_deg_C(parseInt(arr_data[0].main.temp_max)))
         temp.innerHTML=`Temp : ${realtemp} &deg;C `;
         temp_min_max.innerHTML=`Temp_max : ${realtemp_max} &degC &nbsp  Temp_min : ${realtemp_min} &deg;C`

         if(arr_data[0].weather[0].main==="Haze"){
            Status.innerHTML="Temp_Status : Haze"
            temp_img.classList.remove("d-none")
             if(arr_data[0].weather[0].icon.includes('d')){
              temp_img.src=`./images/haze.png`
             }
             if(arr_data[0].weather[0].icon.includes('n')){
                temp_img.src=`./images/haze-night.png`
               }
         }
         if(arr_data[0].weather[0].main==="Clouds"){
            Status.innerHTML="Temp_Status : Clouds"
            temp_img.classList.remove("d-none")
            temp_img.src=`./images/clouds.png`   
         } 
         if(arr_data[0].weather[0].main==="Rain"){
            Status.innerHTML="Temp_Status : Rain"
            temp_img.classList.remove("d-none")
            temp_img.src=`./images/rain.png`   
         } 
         if(arr_data[0].weather[0].main==="Snow"){
            Status.innerHTML="Temp_Status : Snow"
            temp_img.classList.remove("d-none")
            temp_img.src=`./images/snowflakes.png`   
         }  
         if(arr_data[0].weather[0].main==="Thunderstorm"){
            Status.innerHTML="Temp_Status : Thunderstorm"
            temp_img.classList.remove("d-none")
            temp_img.src=`./images/thunderstorm.png`   
         }
         if(arr_data[0].weather[0].main==="Clear"){
            Status.innerHTML="Temp_Status : Clear"
            temp_img.classList.remove("d-none")
             if(arr_data[0].weather[0].icon.includes('d')){
              temp_img.src=`./images/sunny.png`
             }
             if(arr_data[0].weather[0].icon.includes('n')){
                temp_img.src=`./images/night.png`
               }
            }
         let humid=arr_data[0].main.humidity;
         humidity.innerHTML=`Humidity : ${humid}% `   
         let pre=arr_data[0].main.pressure;
         pressure.innerHTML=`Pressure : ${pre} hPa `                      

        }catch(err){
            alert.classList.remove("d-none");
            alert.innerHTML=`pls put a valid City name`
           console.log(err);
        }
      
    }
}

submitBtn.addEventListener("click",call_API)