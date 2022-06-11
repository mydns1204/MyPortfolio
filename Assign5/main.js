document.getElementById('topic1');
document.getElementById('comment1');
document.getElementById('comment2');
var input = document.getElementById('text1');

var i = 1
function postFunction() {
    text = input.value;

    if (i == 1 && text != '') {
        topic1.innerHTML = text;
        i++;
    }

    else if (i == 2 && text != '') {
        comment1.innerHTML = text;
        i++;
    }

    else if (i == 3 && text != '') {
        comment2.innerHTML = text;
        i++;
    }
    else if(i > 3 && text != '')
    {
        alert(" Full !!! ");
    }
    else
    {
       if(text == '')
       {
           alert("pls writing");
       } 
    }
    document.getElementById('text1').value = '';
}

function clearFunction() {
    document.getElementById('topic1').innerHTML = '';
    document.getElementById('comment1').innerHTML = '';
    document.getElementById('comment2').innerHTML = '';
    document.getElementById('text1').value = '';
    i = 1;
}