window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("Navbar").style.top = "0";
        document.getElementById("backToTop").style.display="block";
    } else {
        document.getElementById("Navbar").style.top = "-1000px";
        document.getElementById("Navbar").style.transition= "top 0s"
        document.getElementById("backToTop").style.display="none";
    }
}