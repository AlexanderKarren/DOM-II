document.querySelectorAll(".block").forEach(function(block) {
    let marginL = 0;
    let marginB = 0;
    block.addEventListener("mousedown", function(event) {
        const intervalMoveRight = setInterval(function() {
            window.addEventListener("mouseup", function(event) {
                clearInterval(intervalMoveRight);
            })
            if (marginL > screen.width - 120) {
                clearInterval(intervalMoveRight);
            }
            else {
                marginL++;
                block.style.marginLeft = `${marginL}px`;
            }
        }, 1)
    });
    block.addEventListener("dblclick", function(event) {
        block.style.order = "1";
        document.querySelectorAll(".block").forEach(function(innerBlock) {
            if (innerBlock != block) {
                innerBlock.style.order = 2;
            }
        })
    })
});