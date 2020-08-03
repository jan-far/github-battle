
(() => {
    var body = document.querySelector("body");
    var preload = document.querySelector(".preload");
    var loading = 0;
    var id = setInterval(frame, 70);

    function frame() {
            if (loading == 100) {
                clearInterval(id);
                window.open("../../UI/displayUsers.html", "_self");
            }
            else {
                loading = loading + 1;
                if (loading == 90) {
                    preload.style.animation = "fadeout 3s ease"
                }
            }
        }
}) ();

// document.onreadystatechange = function() { 
//     if (document.readyState !== "complete") {
//         document.querySelector( 
//           "body").style.visibility = "hidden";
//           document.querySelector(
//             "#loader").style.visibility = "visible";
//     } else { 
//         document.querySelector(
//             "#loader").style.visibility = "none"; 
//         document.querySelector( 
//           "body").style.visibility = "visible"; 
//     }
// }