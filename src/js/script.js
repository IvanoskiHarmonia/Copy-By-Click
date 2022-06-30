const currentDate = new Date().toISOString().slice(0, 10);
const date = `${currentDate.slice(5, 7)}-${currentDate.slice(8, 10)}-${currentDate.slice(0, 4)}`;

var currentTable = '';


// populate the array as needed, as demonstated in the example below
//copies only the second element in each array when clicked.
let contents = [ // change below to change the copying section
    [ 'Date', date],
    [ 'Name', 'John Smith'],
    [ 'Location', 'New York, NY'],
];              // change above to change the copying section

// create the table -> in this 2D array you can enter as shown here:
// [ [ 'Date', date], [ 'tracking-thing-name', Starting Number], [ 'Location', Starting Number] ] -> and this will be converted to a table as shown below.
const tablesContent = { // change below to change the table
    table1: [ [ 'tracking-thing-name1-table1', 0], [ 'tracking-thing-name2-table1', 0] ],
    table2: [ [ 'tracking-thing-name1-table2', 0], [ 'tracking-thing-name2-table2', 0] ],
};                      // Change above to change the table

var numbers = [];
var argumentName = '';

function tableOfCompleted(arg) {
    numbers = [];
    
    
    numbers = tablesContent[arg].map(content => {
        return '<tr><td>'+ content[0] +'</td><td class="inputPadNone"><input id="'+ content[0] +'" type="number" min="0" value="'+ content[1] +'"></td></tr>'
    });
    
    numbers.unshift('<table id="table"><tr><th id="date-Table"></th><th>Number of Something</th></tr>'); numbers.push('</table>');
    
    document.getElementById('container-2').innerHTML = numbers.join('');
    
    argumentName = arg;
    
    document.getElementById("date-Table").innerHTML = date;
}

var checkArr = [];
window.onload = () => {
    const helper = contents.map(content => {
        return '<p class="_copy" id="' + content[0] + '" onclick="copyElementText(this.id)">' + content[0] + ': ' + content[1] + '</p>';
    })   
    currentTable = 'table1';
    document.getElementById('container').innerHTML = helper.join('');
    tableOfCompleted('table1');
    checkpoint();
    
}

async function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text.substr(id.length+2);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    document.title = id + ' Copied';
}



function changeArg() {
    if (argumentName == 'table1') {
        tablesContent['table1'].map(content => {
            content[1] = document.getElementById(content[0]).value;
        });
        currentTable = 'table2';
        tableOfCompleted('table2');
    } else {
        tablesContent['table2'].map(content => {
            content[1] = document.getElementById(content[0]).value;
        });
        currentTable = 'table1';
        tableOfCompleted('table1');
    }
    checkpoint();
}
// document.getElementById("date-Table").innerHTML = date;


function checkpoint() {
    if (currentTable == 'table1') {
        checkArr = [];
        tablesContent['table1'].map(content => {
            checkArr.push(document.getElementById(content[0]).value);
        });
        
    } else {
        checkArr = [];
        tablesContent['table2'].map(content => {
            checkArr.push(document.getElementById(content[0]).value);
        });
    }
    document.getElementById("checkPoint-time").innerText = checkArr.join(', ');;
}
        

function mode() {
    // console.log(document.getElementById("slider-mode").checked)
    if(document.getElementById("slider-mode").checked) {
        console.log(document.getElementById("slider-mode").checked)
        document.getElementsByTagName("main")[0].classList.remove("light-mode");
        document.getElementsByTagName("main")[0].classList.add("dark-mode");
    }
    else {
        document.getElementsByTagName("main").color = "black";
        document.getElementsByTagName("main")[0].classList.remove("dark-mode");
        document.getElementsByTagName("main")[0].classList.add("light-mode");
    }
}