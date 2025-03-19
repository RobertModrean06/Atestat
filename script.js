document.addEventListener('DOMContentLoaded', function() {
    var scrollArrow = document.querySelector('.scroll-arrow');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { 
            scrollArrow.classList.add('show');
        } else {
            scrollArrow.classList.remove('show');
        }
    });

    scrollArrow.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.querySelectorAll('.dropdown-content1 a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("myDropdown").classList.remove("show");
    });
});
document.getElementById("closeDropdown").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("myDropdown").classList.remove("show");
});
