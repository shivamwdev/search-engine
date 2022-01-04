// main js starts here   
let input = document.getElementById('s-input');
let items = document.getElementsByClassName('items');
let showContainer = document.getElementById('show-container');
let value = document.getElementsByClassName('value')[0];


function search(){
    document.getElementById('display').innerHTML = "";
    for(let i = 0; i < items.length; i++){
        showContainer.innerHTML = "";
        let pItem = items[i].innerHTML.toString();
        let pItemIndex = pItem.indexOf(input.value.toString());
        let newString = '';

        if (pItemIndex == -1) {
            continue;
        } else {
            for (let i = 0; i < pItem.length; i++) {
                if (i == pItemIndex) {
                    newString += '<span class="red">';
                    for (let j = 0; j < input.value.length; j++) {
                        newString += pItem[i++];
                    }
                    newString += "</span>";
                    --i;
                } else {
                    newString += pItem[i];
                }
            }
        }
        console.log(newString);
        let div = document.createElement('div');
        let parent = document.getElementById('display');
        div.innerHTML = newString;
        parent.appendChild(div);
        // document.getElementById('display').innerHTML = newString;  
    }
}

document.getElementById('btn').addEventListener('click', ()=>{
    search();
})
//input.addEventListener('input', search);
