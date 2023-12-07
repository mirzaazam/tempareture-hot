// 9137c43a9acfaca57b58ac59dc0f7339

/*==================================
    Api call from wather server
==================================*/

const loadData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9137c43a9acfaca57b58ac59dc0f7339&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setValues(data);
}

/*--------------------
       set valus
---------------------*/
const setValues = data => {
    const city = document.getElementById('city');
    const temp = document.getElementById('temperature');
    const cloud = document.getElementById('cloud');
    city.innerText = data.name;
    temp.innerText = data.main.temp;
    cloud.innerText = data.weather[0].main;
}

/*---------------------------------
        set from input feild
-----------------------------------*/
const cityFromInputField = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    if( inputFieldValue == ''){
        alert('Please enter a Location name!');
    }
    else{
        loadData(inputFieldValue);
    }
}


/*-------------------------------
       set event Handler
---------------------------------*/
document.getElementById('btn-search').addEventListener('click', function () {
        cityFromInputField();
    

});