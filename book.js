var list = new Array();
var count ;
function entryBook() {
    var index = document.getElementById('index').value;
    let book = {
        nobook: document.getElementById('book-no').value,
        name: document.getElementById('book-title').value,
        author: document.getElementById('author').value,
        category: document.getElementById('category').value,
        numofpage: document.getElementById('num-of-page').value,
        publishco: document.getElementById('publishing').value
    }

    if (index != '') {
        list[index] = book;
        var json = JSON.stringify(list);
        localStorage.setItem('list',json);
        showListBook();
        return;
    }
    else {
        list.push(book);
        //Local Storage
        var json = JSON.stringify(list);
        localStorage.setItem('list',json);
        showListBook();
        // count = list.length
        // document.getElementById('result').innerHTML += (`
        //     <tr>
        //         <td>${++count}</td>
        //         <td>${book.nobook}</td>
        //         <td>${book.name}</td>
        //         <td>${book.author}</td>
        //         <td>${book.category}</td>
        //         <td>${book.numofpage}</td>
        //         <td>${book.publishco}</td>
        //         <td>
        //             <button class="btn btn-edit" onclick="editBook(${count -1})" >Edit</button>
        //         </td>
        //         <td>
        //             <button class="btn btn-delete" onclick="deleteBook(${count -1})">Delete</button>
        //         </td>
        //     </tr>
        //     `)
    }
    
}

function deleteBook(index) {
    list.splice(index, 1);
    showListBook();
    //Local Storage
    var json = JSON.stringify(list);
    localStorage.setItem('list',json);
    
}

function showListBook() {
    document.getElementById('result').innerHTML = " ";
    for (var i = 0; i< list.length; i++) {
        document.getElementById('result').innerHTML += (`
        <tr>
            <td>${i+1}</td>
            <td>${list[i].nobook}</td>
            <td>${list[i].name}</td>
            <td>${list[i].author}</td>
            <td>${list[i].category}</td>
            <td>${list[i].numofpage}</td>
            <td>${list[i].publishco}</td>
            <td>
                <button class="btn btn-edit" onclick="editBook(${i})" >Edit</button>
            </td>
            <td>
                <button class="btn btn-delete" onclick="deleteBook(${i})">Delete</button>
            </td>
        </tr>
        `)
    }
}

function editBook(index) {
    var book = list[index];
    document.getElementById('index').value = index;
    document.getElementById('book-no').value = book.nobook;
    document.getElementById('book-title').value = book.name;
    document.getElementById('author').value = book.author;
    document.getElementById('category').value = book.category;
    document.getElementById('num-of-page').value = book.numofpage;
    document.getElementById('publishing').value = book.publishco;
    
}

function reset() {
    document.getElementById('index').value = " ";
    document.getElementById('book-no').value = " ";
    document.getElementById('book-title').value = " "; 
    document.getElementById('author').value = " ";
    document.getElementById('category').value = " ";
    document.getElementById('num-of-page').value = " ";
    document.getElementById('publishing').value = " ";
}

function init() {
    var json = localStorage.getItem('list');
    if (json != null) {
        list = JSON.parse(json);
        showListBook();
    }
}
