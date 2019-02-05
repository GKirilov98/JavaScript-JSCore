// function onlineShop(selector) {
//     let form = `<div id="header">Online Shop Inventory</div>
//     <div class="block">
//         <label class="field">Product details:</label>
//         <br>
//         <input placeholder="Enter product" class="custom-select">
//         <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
//         <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
//         <button id="submit" class="button" disabled>Submit</button>
//         <br><br>
//         <label class="field">Inventory:</label>
//         <br>
//         <ul class="display">
//         </ul>
//         <br>
//         <label class="field">Capacity:</label><input id="capacity" readonly>
//         <label class="field">(maximum capacity is 150 items.)</label>
//         <br>
//         <label class="field">Price:</label><input id="sum" readonly>
//         <label class="field">BGN</label>
//     </div>`;
//     $(selector).html(form);
//
//     let capacityCounter = 0;
//  let sum = 0;
//     let product = $(".custom-select").on("keyup", function () {
//         if (product.val() !== "") {
//             $("#submit").prop("disabled", false);
//         } else {
//             $("#submit").prop("disabled", true);
//         }
//     });
//     let price = $("#price");
//     let quantity = $("#quantity");
//
//     $("#submit").on("click", function () {
//         $(".display").append($("<li>").text(`Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}`));
//         capacityCounter += quantity.val();
//         $("#capacity").val(+capacityCounter);
//
//         sum += price.val();
//         $("#sum").val(+sum);
//
//         product.val("");
//         price.val(1);
//         quantity.val(1);
//         $("#submit").prop("disabled", true);
//
//         if (capacityCounter >= 150){
//             let capacity = $("#capacity").attr("class", "fullCapacity");
//             capacity.val("full");
//             $("#submit").prop("disabled", true);
//             $("#price").prop("disabled", true);
//             $(".custom-select").prop("disabled", true);
//             $("#quantity").prop("disabled", true);
//         }
//     });
// }
