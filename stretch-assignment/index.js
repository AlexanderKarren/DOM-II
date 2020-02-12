const leftDirection = true;

document.querySelectorAll(".block").forEach(function(block) {
    let margin = 0;
    // block.addEventListener("mousedown", function(event) {
    //     const interval = setInterval(function() {
    //         window.addEventListener("mouseup", function(event) {
    //             clearInterval(interval);
    //         })
    //         if (margin > screen.width - 120) {
    //             clearInterval(interval);
    //         }
    //         else {
    //             if (leftDirection === true) {
    //                 margin++;
    //             }
    //             else {
    //                 margin--;
    //             }
    //             block.style.marginLeft = `${margin}px`;
    //         }
    //     }, 1)
    // });
    block.addEventListener("dblclick", function(event) {
        console.log("double clicked");
    })
});