
// //funcion inmediata
// (function (objname) {
//     let wObj = document.querySelector(objname)
//     wObj.addEventListener("click", function () { console.log("The button was clicked!") })
//     wObj.addEventListener("mouseover", function () { console.log("The button was hovered mouseover!") })
//     wObj.addEventListener("mouseout", function () { console.log("The button was hovered mouseout!") })
// })('#myboton');


//funcion inmediata version 2
(function (objname) {
        function Dojo(param) {
            let wObj = document.querySelector(param)
            wObj.addEventListener("click", function () { console.log("The button was clicked!") })
            wObj.addEventListener("mouseover", function () { console.log("The button was hovered mouseover!") })
            wObj.addEventListener("mouseout", function () { console.log("The button was hovered mouseout!") })

            return wObj;
        }
        
        let objReturn = Dojo(objname);

    }
)('#myboton');


    