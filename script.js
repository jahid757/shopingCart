"use strict"


// Main Code
function itemCount(id){
    const count = document.getElementById(id).value;
    const itemCountNumber = parseFloat(count);
    const totalItem = itemCountNumber + 1;
    return totalItem;
}
function priceMinus(id,price){
    const phonePrice = document.getElementById(id).innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const phonePriceFinal =  phonePriceNumber-price ;
    return phonePriceFinal;
}


// Selector 

const phonePricePlus = document.getElementById('PhonePlus');

phonePricePlus.addEventListener('click',function(){
    const phoneItem = itemCount("phoneCount");
    const phonePriceFinal = phoneItem * 1219;
    const subtotal = phonePriceFinal + priceDetect("coverPrice");
    const discountPrice = Math.round(discount(subtotal));
    const total = discountPrice + subtotal;
    document.getElementById('total').innerText = total;
    document.getElementById('tax').innerText = discountPrice;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('phonePrice').innerText = phonePriceFinal;
    document.getElementById('phoneCount').value = phoneItem
    
})

const phoneMines = document.getElementById('phoneMines');

phoneMines.addEventListener('click',function(){
    const phoneCountNumber = itemCount("phoneCount") - 1;
    const phoneItem = phoneCountNumber - 1;
    const phonePriceFinal =  priceMinus("phonePrice", 1219);
    const subtotal = phonePriceFinal + priceDetect("coverPrice");
    const discountPrice = Math.round(discount(subtotal));
    const total = discountPrice + subtotal;

    document.getElementById('total').innerText = total;
    document.getElementById('tax').innerText = discountPrice;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('phonePrice').innerText = phonePriceFinal;
    document.getElementById('phoneCount').value = phoneItem
})

const coverPlus = document.getElementById('coverPlus');

coverPlus.addEventListener('click',function(){
    const coverItem = itemCount("coverItemCounter");
    const coverPrice = coverItem * 59;
    const subtotal = coverPrice+priceDetect("phonePrice") ;
    const discountPrice = Math.round(discount(subtotal));
    const total = discountPrice + subtotal;

    document.getElementById('total').innerText = total;
    document.getElementById('tax').innerText = discountPrice;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('coverItemCounter').value = coverItem;
    document.getElementById('coverPrice').innerText = coverPrice
})




const coverMinus = document.getElementById('coverMinus');
coverMinus.addEventListener('click',function(){
    const coverItemMinus = itemCount("coverItemCounter") -1;
    const coverItem = coverItemMinus - 1;
    const coverPrice = priceMinus("coverPrice",59)
    const subtotal = (priceDetect("coverPrice") - 59)+(priceDetect("phonePrice")) ;
    const discountPrice = Math.round(discount(subtotal));
    const total = discountPrice + subtotal;

    document.getElementById('tax').innerText = discountPrice;
    document.getElementById('total').innerText = total; 
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('coverItemCounter').value = coverItem;
    document.getElementById('coverPrice').innerText = coverPrice;
 
})


function priceDetect(id){
    const detectPrice = document.getElementById(id).innerText;
    const detectPriceNumber = parseFloat(detectPrice);
    return detectPriceNumber
}

function discount(value){
    const priceWitTax = value / 100 *10;
    return priceWitTax;
}


