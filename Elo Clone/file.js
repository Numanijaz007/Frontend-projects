function generateProducts() {
    let productsData = [];
    productsData.push({
        Name: "Polo Republica Men's Drop Shoulder Oversized Tee Shirt",
        Price: 1200.00,
        Image: 'product1.webp'
    });
    productsData.push({
        Name: "Polo Republica Men's Long Sleeve Pique Polo Shirt",
        Price: 1199.00,
        Image: 'product4.webp'
    });
    productsData.push({
        Name: "Polo Republica Men's Essentials Raglan Sleeve Activewear Tee Shirt",
        Price: 599.00,
        Image: 'product2.webp'
    });
    productsData.push({
        Name: "Polo Republica Men's Houndstooth Boxer Shorts",
        Price: 399.00,
        Image: 'product3.webp'
    });
    let totalHtml = '';
    for (let i = 0; i < productsData.length; i++) {

        totalHtml += `<div class="col-md-3">
                    <div class="card" onclick="window.open('index1.html','_blank');" style="border-radius: 0; border: none;  background-color: #f2f2f2;">
                        <img src="${productsData[i].Image}" class="card-img-top" style="transition: background-color 1s ease-out, transform 1s ease-out; border-radius: 0;" alt="...">
                        <div class="card-body">
                            <p class="card-title fs-5" style="font-family:Montserrat;">${productsData[i].Name}</p>
                            <p class="card-text price pt-4 pb-3" style="font-family:Montserrat;">Rs. ${productsData[i].Price}</p>
                        </div>
                    </div>
                    <p></p>
                </div>`;

    }

    document.getElementById('productsDiv').innerHTML = totalHtml;


}
generateProducts();

function quickDat() {
    let quickData = [];
    quickData.push({
        Name: "East West Women's Cropper Polo Shirt",
        Price: 1299.00,
        Button: "Quick View",
        Image: 'quick2.webp'
    });
    quickData.push({
        Name: "East West Women's Cropper Polo Shirt",
        Price: 1299.00,
        Button: "Quick View",
        Image: 'quick3.webp'
    });
    quickData.push({
        Name: "East West Women's Cropper Polo Shirt",
        Price: 1299.00,
        Button: "Quick View",
        Image: 'quick4.webp'
    });
    quickData.push({
        Name: "East West Women's Cropper Polo Shirt",
        Price: 1299.00,
        Button: "Quick View",
        Image: 'quick5.webp'
    });
    quickData.push({
        Name: "East West Women's Cropper Polo Shirt",
        Price: 1299.00,
        Button: "Quick View",
        Image: 'quick6.webp'
    });
    quickData.push({
        Name: "East West Women's Cropper Polo Shirt",
        Price: 1299.00,
        Button: "Quick View",
        Image: 'quick6.webp'
    });
    quickData.push({
        Name: "East West Women's Cropper Polo Shirt",
        Price: 1299.00,
        Button: "Quick View",
        Image: 'quick6.webp'
    });
    quickData.push({
        Name: "East West Women's Cropper Polo Shirt",
        Price: 1299.00,
        Button: "Quick View",
        Image: 'quick6.webp'
    });
   

    let totalHtml1 = ``;
    for (let i = 0; i < quickData.length; i++) {

        totalHtml1 += `<div class="col-md-3 pb-3">
                    <div class=" card" style="border-radius: 0; border: none;  background-color: #f2f2f2;">
                        <img src="${quickData[i].Image}" class="card-img-top" style="border-radius: 0;" alt="...">
                        <div class="card-body">
                            <p class="card-title fs-6" style="font-family:Montserrat;">${quickData[i].Name}</p>
                            <p class="card-text price pt-2 pb-3" style="font-family:Montserrat;">Rs ${quickData[i].Price}</p>

                            <button id="buttoncard-1" class="btn  w-100"
                                style="background-color: #f2f2f2; padding: 12px; color: black; border: 1.4px solid black; border-radius: 0;">${quickData[i].Button}</button>
                        </div>
                    </div>
                </div>`;
    }

    document.getElementById('quickDiv').innerHTML = totalHtml1;

}

quickDat();





$(document).ready(function () {
    $(".logoz").dblclick(function () {
        $("#logo1").hide();
    });
});

$(document).ready(function () {
    $("#cartScroll").scroll();
})

$(document).ready(function(){
  $("#newArrival").hover(function(){
    $("#frst").show();
    }, function(){
    $("#frst").hide();
  });
});
$(document).ready(function(){
  $("#Men").hover(function(){
    $("#frst2").show();
    }, function(){
    $("#frst2").hide();
  });
});
$(document).ready(function(){
  $("#Women").hover(function(){
    $("#frst3").show();
    }, function(){
    $("#frst3").hide();
  });
});
$(document).ready(function(){
  $("#Kids").hover(function(){
    $("#frst4").show();
    }, function(){
    $("#frst4").hide();
  });
});
$(document).ready(function(){
  $("#Home").hover(function(){
    $("#frst5").show();
    }, function(){
    $("#frst5").hide();
  });
});
$(document).ready(function(){
  $("#OwnBrand").hover(function(){
    $("#frst6").show();
    }, function(){
    $("#frst6").hide();
  });
});



$(document).ready(function(){
    $("#cartScroll").click(function(){
        $("#ScrollBody0").addClass("scrollbody0");
        $("#ScrollBody1").addClass("scrollbody1");
    });
});

$(document).ready(function(){
    $("#offbut").click(function(){
        $("#ScrollBody0").removeClass("scrollbody0");
        $("#ScrollBody1").removeClass("scrollbody1");
    });
});

$(document).ready(function(){
    $("#support").click(function(){
        $(this).fadeToggle();
    });
});
$(document).ready(function(){
    $("#closebut1").click(function(){
        $("#support").fadeToggle();
    });
});