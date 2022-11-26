function FontStyle() {
    if (sessionStorage.getItem("fontactive") == "0") {
        var elements = document.getElementsByTagName('body');
        for (x = 0; x < elements.length; x++) {
            elements[x].style.fontFamily = "Arial"
        }
        sessionStorage.setItem("peristantfont", "Arial");
        sessionStorage.setItem("fontactive", "1");
    } else {
        var elements = document.getElementsByTagName('body');
        for (x = 0; x < elements.length; x++) {
            elements[x].style.fontFamily = "Times New Roman"
        }
        sessionStorage.setItem("peristantfont", "Times New Roman");
        sessionStorage.setItem("fontactive", "0");
    }
}