"use strict"


// Main Code


// Selector 

const phonePricePlus = document.getElementById('PhonePlus');

phonePricePlus.addEventListener('click',function(){
    const phoneCount = document.getElementById('phoneCount').value;
    const phoneCountNumber = parseFloat(phoneCount);
    
    const phoneItem = phoneCountNumber + 1;
    
    const phonePriceFinal = phoneItem * 1219;
    document.getElementById('phonePrice').innerText = phonePriceFinal;
    document.getElementById('phoneCount').value = phoneItem
    
})

const phoneMines = document.getElementById('phoneMines');

phoneMines.addEventListener('click',function(){
    const phoneCount = document.getElementById('phoneCount').value;
    const phoneCountNumber = parseFloat(phoneCount);
    
    const phoneItem = phoneCountNumber - 1;

    const phonePrice = document.getElementById('phonePrice').innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    
    const phonePriceFinal =  phonePriceNumber-1219 ;
    document.getElementById('phonePrice').innerText = phonePriceFinal;



    document.getElementById('phoneCount').value = phoneItem
})

function itemPlus(id){
    
}