(function() {
    var myImages = ["slides/image1.jpg", "slides/image2.jpg", "slides/image3.jpg", "slides/image4.jpg", "slides/image5.jpg"];
    var currentImage = 0;
    document.getElementById("next").onclick = goNext;
    document.getElementById("previous").onclick = goPrevious;
    function goNext() {
        if (currentImage == myImages.length - 1)
            currentImage = 0;
        else
            currentImage++;
        var newImg = document.createElement("img");
        newImg.src = myImages[currentImage];
        newImg.className = "fadeinimg";
        document.getElementById("content").appendChild(newImg);
        // Since the images are appended as children so thy are increasing continously, so to make the DOM look cleaner we will remove the previous child
        if (document.getElementById("content").children.length > 2)
            document.getElementById("content").removeChild(document.getElementById("content").children[0]);
        console.log(document.getElementById("content").children)
    }
    function goPrevious() {
        if (currentImage == 0)
            currentImage = myImages.length - 1;
        else
            currentImage--;
        var newImg = document.createElement("img");
        newImg.src = myImages[currentImage];
        newImg.className = "fadeinimg";
        document.getElementById("content").appendChild(newImg);
        // Since the images are appended as children so thy are increasing continously, so to make the DOM look cleaner we will remove the previous child
        if (document.getElementById("content").children.length > 2)
            document.getElementById("content").removeChild(document.getElementById("content").children[0]);
    }
})();