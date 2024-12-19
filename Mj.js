const con = document.getElementsByClassName('content-container');

for( i = 0; i < con.length; i++) {

    con[i].onclick = function () {
        this.classList.toggle('active');
    }
};



const tog = document.querySelector('.tog-btn');


const lin = document.querySelector('.links');


tog.onclick = function () {
    lin.classList.toggle('open');
}


