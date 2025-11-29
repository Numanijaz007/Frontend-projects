function generateSummary() {
    let sumArr = [];
    sumArr.push({
        Head: "Product Details",
        Summary: "Crafted for comfort and contemporary style, this men’s drop shoulder oversized t-shirt offers a relaxed silhouette with a street-ready vibe. The soft fabric make it perfect for layering or wearing solo, whether you're lounging, heading out, or styling a casual everyday look",
        Features1: "Fade-resistant for a fresh look over time",
        Features2: "Keeps its fit, wash after wash",
        Details1: "Oversized fit",
        Details2: "Drop shoulders",
        Details3: "Crew neck",
        Details4: "Hemmed cuffs & bottom",
        Fabric: "100% Cotton , Single jersey"
    });
    sumArr.push({
        Head: "Delivery Details",
        Summary: "Crafted for comfort and contemporary style, this men’s drop shoulder oversized t-shirt offers a relaxed silhouette with a street-ready vibe. The soft fabric make it perfect for layering or wearing solo, whether you're lounging, heading out, or styling a casual everyday look",
        Features1: "Fade-resistant for a fresh look over time",
        Features2: "Keeps its fit, wash after wash",
        Details1: "Oversized fit",
        Details2: "Drop shoulders",
        Details3: "Crew neck",
        Details4: "Hemmed cuffs & bottom",
        Fabric: "100% Cotton , Single jersey"
    });
    sumArr.push({
        Head: "Product Video",
        Summary: "Crafted for comfort and contemporary style, this men’s drop shoulder oversized t-shirt offers a relaxed silhouette with a street-ready vibe. The soft fabric make it perfect for layering or wearing solo, whether you're lounging, heading out, or styling a casual everyday look",
        Features1: "Fade-resistant for a fresh look over time",
        Features2: "Keeps its fit, wash after wash",
        Details1: "Oversized fit",
        Details2: "Drop shoulders",
        Details3: "Crew neck",
        Details4: "Hemmed cuffs & bottom",
        Fabric: "100% Cotton , Single jersey"
    });


    let totalHtml2 = ``;
    for (let i = 0; i < sumArr.length; i++) {
        totalHtml2 += `
        <details class="mb-4">
        <summary class="fs-5 fw-semibold">&nbsp;${sumArr[i].Head}</summary>
                                    <p class="mt-3">${sumArr[i].Summary}</p>

                                    <div class="features">
                                        <h6 class="fw-bolder mb-4">Features:</h6>
                                        <ul class="" style="line-height: 10px;">
                                            <li>
                                                <p>${sumArr[i].Features1}</p>
                                            </li>
                                            <li>
                                                <p>${sumArr[i].Features2}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="Details">
                                        <h6 class="fw-bolder mb-4">Details:</h6>
                                        <ul class="" style="line-height: 10px;">
                                            <li>
                                                <p>${sumArr[i].Details1}</p>
                                            </li>
                                            <li>
                                                <p>${sumArr[i].Details2}</p>
                                            </li>
                                            <li>
                                                <p>${sumArr[i].Details3}</p>
                                            </li>
                                            <li>
                                                <p>${sumArr[i].Details4}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="Details">
                                        <h6 class="fw-bolder mt-4">Fabric:<span class="fw-normal"> &nbsp;100% 
                                        ${sumArr[i].Fabric}</span></h6>
                                    </div>
                                    </details>`;
    }

    document.getElementById('openSummary').innerHTML = totalHtml2;


}

generateSummary();



function optSelector() {
    let optArr = [];
    optArr.push({
        Image: 'product1.webp',
        Name: "Polo Republica Men's Drop",
        Price: 1299.00
        // Input : 'Input',
        // Option : 'Select'
    });
    optArr.push({
        Image: 'product2.webp',
        Name: "Usquared Men's Drop Shoulder",
        Price: 299.00,
        // Input : 'Input',
        // Option : 'Select'
    });
    optArr.push({
        Image: 'product3.webp',
        Name: "Usquared Men's Drop Shoulder",
        Price: 299.00
        // Input : 'Input',
        // Option : 'Select'
    });
    optArr.push({
        Image: 'product4.webp',
        Name: "Usquared Men's Drop Shoulder",
        Price: 299.00
        // Input : 'Input',
        // Option : 'Select'
    });
    optArr.push({
        Image: 'product1.webp',
        Name: "Usquared Men's Drop Shoulder",
        Price: 299.00
        // Input : 'Input',
        // Option : 'Select'
    });

    let totalHtml3 = ``
    for (let i = 0; i < optArr.length; i++) {
        totalHtml3 += `<div class="row g-0 mt-3">
                                            <div class="col-md-4">
                                                <div class="d-flex">
                                                    <input class="me-4 mt-5 form-check-input " type="checkbox" value=""
                                                        id="checkChecked" checked>
                                                    <img src="${optArr[i].Image}" class=" img-fluid w-50 " alt="...">
                                                </div>

                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body ">

                                                    <p class="card-title " id= "opttxt" style=" cursor: default;">
                                                    ${optArr[i].Name}</p>
                                                    <p class="card-text " id= "opttxt">Rs ${optArr[i].Price}</p>
                                                    <select name="" id="opt1" class = "opttxtc">
                                                        <option disabled value="">Color-Size</option>
                                                        <option selected value="1">Heather Grey - S</option>
                                                        <option value="2">Heather Grey - MD</option>
                                                        <option value="3">Heather Grey - L</option>
                                                        <option value="4">Heather Grey - XL</option>
                                                        <option value="5">Heather Grey - XXL</option>
                                                        <option value="6">Blue - S</option>
                                                        <option value="7">Blue - MD</option>
                                                        <option value="8">Blue - L</option>
                                                        <option value="9">Blue - XL</option>
                                                        <option value="10">Blue - XXL</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>`;
    }

    document.getElementById('sideOpt').innerHTML = totalHtml3;
}
optSelector();



function quickGenerator() {
    let quick2Arr = [];
    quick2Arr.push({
        Name: "Usquared Men's Drop Shoulder Tee Shirt Tee Shirt",
        Price: 1299.00,
        Image: 'product4.webp'
    });
    quick2Arr.push({
        Name: "Polo Republica Men's Sport Series Drop Shoulder Oversized",
        Price: 1499.00,
        Image: 'quick1.webp'
    });
    quick2Arr.push({
        Name: "Polo Republica Men's Essentials Curved Loose Fit Short Sleeve ",
        Price: 1699.00,
        Image: 'quick2.webp'
    });
    quick2Arr.push({
        Name: "Polo Republica Men's Oversized Drop Shoulder Polo Shirt",
        Price: 1199.00,
        Image: 'quick3.webp'
    });
    quick2Arr.push({
        Name: "Polo Republica Men's Drop Shoulder Oversized Tee Shirt",
        Price: 1999.00,
        Image: 'quick4.webp'
    });

    let totalHtml4 = ``;
    for (let i = 0; i < quick2Arr.length; i++) {
        totalHtml4 +=
            `<div class = "col">
        <div class="card" style=" border-radius: 0; width : 16rem">
                        <img src="${quick2Arr[i].Image}" style="border-radius: 0;" class="card-img-top" alt="...">
                        <div class="card-body" style="padding: 15px; background-color: #f2f2f2;">
                            <p class="fs-6">${quick2Arr[i].Name}</p>
                            <p class="card-text">Rs ${quick2Arr[i].Price}</p>
                        </div>
                    </div>
                    </div>`;
    }

    document.getElementById('quickDiv2').innerHTML = totalHtml4;

}
quickGenerator();

$(document).ready(function () {
    $("button").click(function () {
        $("#high").slideToggle();
    });
});


$(document).ready(function () {
    $("#arrowtog").click(function () {
        $("#high1").slideToggle();
    });
});


$(document).ready(function () {
    $(".mediabtn").click(function () {
        $("#radioblue").toggle();
    });
});



function clrGenerator(){
    let clrArr = [];
    clrArr.push({
        // ColorName : "StoneGrey",
        Image : 'quick1.webp'
    });
    clrArr.push({
        // ColorName : "Navy",
        Image : 'quick2.webp'
    });
    clrArr.push({
        // ColorName : "Black",
        Image : 'quick3.webp'
    });
    clrArr.push({
        // ColorName : "Green",
        Image : 'quick4.webp'
    });
    clrArr.push({
        // ColorName : "Blue",
        Image : 'quick5.webp'
    });


    let totalHtml5 = ``;
    for(let i = 0;i<clrArr.length;i++){
        totalHtml5 += `<div>

                            <a href="#" id="clrpicker${i}">
                                <img src="${clrArr[i].Image}" class='allClrs' id="clrchanger${i}"
                                    style="margin-right:6px;  width: 40px; height: 40px;  border-radius: 100%; object-fit: cover;"
                                    alt="">
                            </a>
                        </div>`;
    }

    document.getElementById("clrpicker").innerHTML = totalHtml5;
}
clrGenerator();

// $(document).ready(function(){
//   $("#clrpicker0").mouseover(function(){
//     $("#clrchanger0").css("border","2px solid black").css("padding","2px");
//   });
//   $("#clrpicker0").mouseout(function(){
//     $("#clrchanger0").css("border","none").css("padding","0px");
//   });
//   $("#clrpicker0").active(function(){
//     $("#clrchanger").css("border","2px solid black").css("padding","2px");
//   });
// });



    $(document).ready(function(){
      $("#clrpicker0").mouseover(function(){

        $("#clrchanger0").addClass("hover");
        
      });
      $("#clrpicker0").mouseout(function(){
        $("#clrchanger0").removeClass("hover");
      });
      $("#clrpicker0").click(function(){
         $('.allClrs').removeClass('hover').removeClass('active1');
        $("#clrchanger0").addClass("active1");
      });
      
    });
    $(document).ready(function(){
      $("#clrpicker1").mouseover(function(){
        
        $("#clrchanger1").addClass("hover");
        
      });
      $("#clrpicker1").mouseout(function(){
        $("#clrchanger1").removeClass("hover");
      });
      $("#clrpicker1").click(function(){
         $('.allClrs').removeClass('hover').removeClass('active1');
        $("#clrchanger1").addClass("active1");
      });
      
    });
    $(document).ready(function(){
      $("#clrpicker2").mouseover(function(){

        $("#clrchanger2").addClass("hover");
        
      });
      $("#clrpicker2").mouseout(function(){
        $("#clrchanger2").removeClass("hover");
      });
      $("#clrpicker2").click(function(){
         $('.allClrs').removeClass('hover').removeClass('active1');
        $("#clrchanger2").addClass("active1");
      });
      
    });
    $(document).ready(function(){
      $("#clrpicker3").mouseover(function(){
        
        
        $("#clrchanger3").addClass("hover");
        
      });
      $("#clrpicker3").mouseout(function(){
        $("#clrchanger3").removeClass("hover");
      });
      $("#clrpicker3").click(function(){
         $('.allClrs').removeClass('hover').removeClass('active1');
        $("#clrchanger3").addClass("active1");
      });
      
    });
    $(document).ready(function(){
      $("#clrpicker4").mouseover(function(){
        
         
        $("#clrchanger4").addClass("hover");
        
      });
      $("#clrpicker4").mouseout(function(){
        $("#clrchanger4").removeClass("hover");
      });
      $("#clrpicker4").click(function(){
        $('.allClrs').removeClass('hover').removeClass('active1');
        $("#clrchanger4").addClass("active1");
      });
      
    });


$(document).ready(function(){
    $("#star1").mouseover(function(){
        $("#star1").addClass("checked");
        $("#condition").text("Very poor");
    });
    $("#star1").mouseout(function(){
        $("#star1").removeClass("checked");
        $("#condition").text("");
    });
    $("#star1").click(function(){
        $(this).addClass("checked");
    })
});

$(document).ready(function(){
    $("#star2").mouseover(function(){
        $("#star2").addClass("checked");
        $("#star1").addClass("checked");
        $("#condition").text("Poor");
    });
    $("#star2").mouseout(function(){
        $("#star2").removeClass("checked");
        $("#star1").removeClass("checked");
        $("#condition").text("");
    });
    $("#star2").click(function(){
        $(this).addClass("checked");
    })
});
$(document).ready(function(){
    $("#star3").mouseover(function(){
        $("#star3").addClass("checked");
        $("#star2").addClass("checked");
        $("#star1").addClass("checked");
        $("#condition").text("Average");
    });
    $("#star3").mouseout(function(){
        $("#star3").removeClass("checked");
        $("#star2").removeClass("checked");
        $("#star1").removeClass("checked");
        $("#condition").text("");
    });
    $("#star3").click(function(){
        $(this).addClass("checked");
    })
});
$(document).ready(function(){
    $("#star4").mouseover(function(){
        $("#star4").addClass("checked");
        $("#star3").addClass("checked");
        $("#star2").addClass("checked");
        $("#star1").addClass("checked");
        $("#condition").text("Good");
    });
    $("#star4").mouseout(function(){
        $("#star4").removeClass("checked");
        $("#star3").removeClass("checked");
        $("#star2").removeClass("checked");
        $("#star1").removeClass("checked");
        $("#condition").text("");
    });
    $("#star4").click(function(){
        $(this).addClass("checked");
    })
});
$(document).ready(function(){
    $("#star5").mouseover(function(){
        $("#star5").addClass("checked");
        $("#star4").addClass("checked");
        $("#star3").addClass("checked");
        $("#star2").addClass("checked");
        $("#star1").addClass("checked");
        $("#condition").text("Great!");
    });
    $("#star5").mouseout(function(){
        $("#star5").removeClass("checked");
        $("#star4").removeClass("checked");
        $("#star3").removeClass("checked");
        $("#star2").removeClass("checked");
        $("#star1").removeClass("checked");
        $("#condition").text("");
    });
    $("#star5").click(function(){
        $(this).addClass("checked");
    })
});





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

$(document).ready(function () {
    $('#buttonRate').on('click', function () {
        $('#dropArr').toggleClass('transform1');
    });
});

// $(document).ready(function(){
//     $(".btnclss").click(function(){
//         $(".droparr").css("transform","rotate(0deg)");
//     });
// });
$(document).ready(function () {
    $('#buttonRate1').on('click', function () {
        $('#dropArr1').addClass('transform1');
    });
});


$(document).ready(function(){
    $("#review12").click(function(){
        $("#modal1").show();
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

$(document).ready(function(){
    $("#clrbd00").click(function(){
        $(".clrbdd").css("margin","-.3rem").css("border-right","1px solid black").css("border-left","1px solid black");
    });
    $("#clrbd00").mouseout(function(){
        $(".clrbdd").css("margin","0rem").css("border-right","none").css("border-left","none");
    });
});
$(document).ready(function(){
    $("#clr01").click(function(){
        $(".clrbdd").css("margin","-.3rem").css("border-right","1px solid black").css("border-left","1px solid black");
    });
    $("#clr01").mouseout(function(){
        $(".clrbdd").css("margin","0rem").css("border-right","none").css("border-left","1px solid black");
    });
});
$(document).ready(function(){
    $("#clr02").click(function(){
        $(".clrbdd").css("margin","-.3rem").css("border-right","1px solid black").css("border-left","1px solid black");
    });
    $("#clr02").mouseout(function(){
        $(".clrbdd").css("margin","-.3rem").css("z-index","102312").css("border-right","1px solid black").css("border-left","1px solid black");
    });
});
// $(document).ready(function(){
//     $("#num12").mouseout(function(){
//         $(".clrbdd").css("margin","0rem").css("border-right","none").css("border-left","none");
//     });
// });

$(document).ready(function () {
      
      $("#clr02").on("click", function () {
        let count = Number($("#clrbd00").val()) ; 
        count++;
        $("#clrbd00").val(count);
      });
    });
$(document).ready(function () {
      
      $("#clr01").on("click", function () {
        let count = Number($("#clrbd00").val()) ; 
        if(count>0){
             count--;
        }
        $("#clrbd00").val(count);
      });
    });








