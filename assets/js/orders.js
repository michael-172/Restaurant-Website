// Start Ordes Page
let myNamesArray = window.localStorage.getItem('Name');
let myNamesArray2 = JSON.parse(myNamesArray);
let myImgsArray = window.localStorage.getItem('Img');
let myImgsArray2 = JSON.parse(myImgsArray);
let myPricesArray = window.localStorage.getItem('Price');
let myPricesArray2 = JSON.parse(myPricesArray);
let myCountArray = window.localStorage.getItem('Count');
let myCountArray2 = JSON.parse(myCountArray);

// if There are Items Already
if (window.localStorage.getItem('Name') && myNamesArray2.length !== 0){

    //Show These Items As A Table ::::

    document.querySelector('.Orders .bill-payment').style.display = 'grid';
    //1 create the all prducts div
    let allProducts = document.createElement("div");
    allProducts.className = 'all-products';
    let theAfterHeader = document.querySelector('.Orders .orders-table .headers');
    theAfterHeader.after(allProducts);

    for (let i = 0; i < myNamesArray2.length; i++) {

    let Prodcut = document.createElement("div");
    Prodcut.className = 'product';
    allProducts.appendChild(Prodcut);

    //2 create the product box
    let productBox = document.createElement("div");
    productBox.className = 'product-box';
    Prodcut.appendChild(productBox);

    //3 create name-and-image div
    let nameAndImg = document.createElement("div");
    nameAndImg.className = 'name-and-image';
    productBox.appendChild(nameAndImg);

    //4 create name and image contnet:
    let theImg = document.createElement('img');
    theImg.className = 'prod-img';
    theImg.src = myImgsArray2[i];
    nameAndImg.appendChild(theImg);

    let theHeaderOfProduct = document.createElement("h2");
    let HeaderTxt = document.createTextNode(myNamesArray2[i]);
    theHeaderOfProduct.appendChild(HeaderTxt);
    nameAndImg.appendChild(theHeaderOfProduct);

    //5create initialprice div
    let initialPrice = document.createElement('div');
    initialPrice.className = 'price';
    let thePrice = document.createTextNode(`${myPricesArray2[i]} ر.س`);
    initialPrice.appendChild(thePrice);    
    productBox.appendChild(initialPrice);

    //6create CountPrice div
    let totalPrice = document.createElement('div');
    totalPrice.className = 'Total-price';
    let thePriceTxt = document.createTextNode(`${myCountArray2[i]}`);
    totalPrice.appendChild(thePriceTxt);    
    productBox.appendChild(totalPrice);

    //6create CountPrice div
    let ThetotalPrice = document.createElement('div');
    ThetotalPrice.className = 'The-Total-price';
    let theTotalTxt = document.createTextNode(myPricesArray2[i] * myCountArray2[i]);
    ThetotalPrice.appendChild(theTotalTxt);    
    productBox.appendChild(ThetotalPrice);

    //6 create Actions Div:
    let Actions = document.createElement("div");
    Actions.className = 'actions';

    let ActionSpan1 = document.createElement("span");
    let ActionSpan1Txt = document.createTextNode("احذف هذا العنصر");
    ActionSpan1.appendChild(ActionSpan1Txt);
    Actions.appendChild(ActionSpan1);  

    let ActionImg = document.createElement("img");
    ActionImg.src = './assets/img/gallery/trash-alt (1).svg';
    Actions.appendChild(ActionImg);

    productBox.appendChild(Actions);
}

// Delete Button Action:
    let allDeleteButtons = document.querySelectorAll(".all-products .product .product-box .actions img");
    allDeleteButtons.forEach( (DeleteButton) => {
        DeleteButton.addEventListener("click", (e) => {

            let relatedName = e.target.parentElement.parentElement.querySelector('.name-and-image h2').textContent;
            // if the array of names contains the related name of the delete button i've clicked on, then Delete It From the array 
            if (myNamesArray2.includes(relatedName)) {
                var filtered = myNamesArray2.filter(function(value, index, arr){ 
                    return value != relatedName;
                    
                });
                myNamesArray2 = filtered;
                window.localStorage.setItem("Name", JSON.stringify(myNamesArray2));
            }
            
            let relatedCount = e.target.parentElement.parentElement.querySelector('.Total-price').textContent;
            // if the array of Counts contains the related Count of the delete button i've clicked on, then Delete It From the array
            if (myCountArray2.includes(relatedCount)) {
                var filtered = myCountArray2.filter(function(value, index, arr){ 
                    return value != relatedCount;
                    
                });
                myCountArray2 = filtered;
                window.localStorage.setItem("Count", JSON.stringify(myCountArray2));
            }
            
                let relatedImg = e.target.parentElement.parentElement.querySelector('.name-and-image img').src;
            // if the array of Images contains the related Image of the delete button i've clicked on, then Delete It From the array
            if (myImgsArray2.includes(relatedImg)) {
                var filtered = myImgsArray2.filter(function(value, index, arr){ 
                    return value != relatedImg;
                    
                });
                myNamesArray2 = filtered;
                window.localStorage.setItem("Img", JSON.stringify(myNamesArray2));
            }

                let relatePrice = e.target.parentElement.parentElement.querySelector('.price').textContent.split(" ").shift();
            // if the array of Prices contains the related Price of the delete button i've clicked on, then Delete It From the array
            if (myPricesArray2.includes(relatePrice)) {
                var filtered = myPricesArray2.filter(function(value, index, arr){ 
                    return value != relatePrice;
                    
                });
                myPricesArray2 = filtered;
                window.localStorage.setItem("Price", JSON.stringify(myPricesArray2));
            }

                // Then Reload The Page
                window.location.reload();
            }

        )
    })



// create check box (Delivery or in Restaurant)
    let FormCheck = document.createElement("div");
    FormCheck.className = 'check-div';

    let SpanChoose = document.createElement("span"),
    SpanChooseTxt = document.createTextNode("اختار نوع الطلب :");
    SpanChoose.appendChild(SpanChooseTxt);
    FormCheck.appendChild(SpanChoose);

    let firstLabel = document.createElement("label");
    firstLabel.className = 'container-of-radio';
    let firstLabelTxt = document.createTextNode('سفري');
    firstLabel.appendChild(firstLabelTxt);
    let firstInput = document.createElement("input");
    firstInput.type = 'radio';
    firstInput.checked = true;
    firstInput.name = 'radio';
    firstLabel.appendChild(firstInput);
    let firstSpan = document.createElement("span");
    firstSpan.className = 'checkmark';
    firstLabel.appendChild(firstSpan);


    let secondLabel = document.createElement("label");
    secondLabel.className = 'container-of-radio';
    let secondLabelTxt = document.createTextNode('حضور في المطعم');
    secondLabel.appendChild(secondLabelTxt);
    let secondInput = document.createElement("input");
    secondInput.type = 'radio';
    secondInput.checked = true;
    secondInput.name = 'radio';
    secondLabel.appendChild(secondInput);
    let secondSpan = document.createElement("span");
    secondSpan.className = 'checkmark';
    secondLabel.appendChild(secondSpan);
    let AllLabels = document.createElement("div");
    AllLabels.className = 'All-Labels';
    AllLabels.style.display = 'flex'
    AllLabels.appendChild(firstLabel);
    AllLabels.appendChild(secondLabel);
    FormCheck.appendChild(AllLabels);

    let allProductsFinal = document.querySelector('.all-products');
    allProductsFinal.after(FormCheck)


    // change the total price in bill

        let AllFinals = document.querySelectorAll(".product-box .The-Total-price");
        let newArr =[];
        AllFinals.forEach( (finalDiv) => {

        newArr.push(Number(finalDiv.innerHTML));

        });

        let theFinalTotalPrice = newArr.reduce((a, b) => a + b);
        let theTotalSpanReplaced = document.querySelector('.bill-payment .bill .first-line span:last-of-type')
        theTotalSpanReplaced.innerHTML = `${theFinalTotalPrice} ر.س`;

        let theLastTotal = theTotalSpanReplaced = document.querySelector('.bill-payment .bill .third-line span:last-of-type');

        console.log(theLastTotal.innerHTML = `${theFinalTotalPrice + 2} ر.س`)
            
        }else{

    // else ,, (if There are no items exist, then Display No Orders Message) => :::
    let theAfterHeader = document.querySelector('.Orders .orders-table .headers');

    let DontExisth2 = document.createElement('h2');
    DontExisth2.className = 'Dont-Exist';
    let DontExitsTxt = document.createTextNode('لايوجد اي طلبات لديك..');
    DontExisth2.appendChild(DontExitsTxt);
    theAfterHeader.after(DontExisth2);

    document.querySelector('.Orders .bill-payment').remove();
    document.querySelector('.check-div').remove();

    let GotoShopping = document.createElement("span");
    GotoShopping.className = 'btn btn-primary'
    GotoShopping.classList.add('DontExistBtn');
    let GoShoppingTxt = document.createTextNode('اذهب للتسوق');
    GotoShopping.appendChild(GoShoppingTxt);

    GotoShopping.style.width = '40%';
    GotoShopping.style.margin = '0 auto';
    GotoShopping.style.marginTop = '20px';
    GotoShopping.style.backgroundColor = '#415094e0';
    GotoShopping.style.display = 'flex';
    GotoShopping.style.alignItems = 'center';
    GotoShopping.style.justifyContent = 'center';
    GotoShopping.style.padding = '27px';

    GotoShopping.onclick = () => {
        window.location.href = 'menu.html';
    }

    DontExisth2.after(GotoShopping)
}