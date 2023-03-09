let paragraph = document.getElementById('text');
let i = 0;



function Hello() {
    i++
    // console.log(i)
    // alert("Hello, World!");
    // document.getElementById('text').innerHTML = 'The button was clicked!';
    if (i <= 1) {
    paragraph.innerHTML = `The button was clicked ${i} time!`;
    } else if(i > 1 && i < 30) {
    paragraph.innerHTML = `The button was clicked ${i} times!`;
    } else if(i >= 30) {
    paragraph.innerHTML = `You have clicked more than ${i} times!!!!`;
    paragraph.style.color = 'red';
    }
    console.log('The button was clicked!');
}

function Close() {
    paragraph.innerHTML = '';
    paragraph.style.color = '#fff';
    // reset the counter
    i = 0
}