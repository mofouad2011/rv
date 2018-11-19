document.getElementById('myBtn').onclick = function () {
    // I can mae every thing separated in functions, but it is very small task :(
    var myStr = document.getElementById("myInput").value;
    var input = document.getElementById('myResult');
    reversing(myStr,input);
};

function reversing(str , input){
    if (str) {
        input.innerText = str.split(" ").reverse().join(" ");
    }else {
        input.innerText = "Please add some Text in the input so i can reverse it :)"
    };
}


document.getElementById('circleBtn').onclick = function () {
    var myCirlce = document.getElementById('moveCirlce')

    if (!myCirlce.classList.contains('animated')) {
        myCirlce.classList.add('animated');
        setTimeout(function () {
            myCirlce.classList.remove('animated');
        }, 2000)
    }
};