var inputBox = document.getElementById("inputbox");
var task = document.querySelector(".tasks");
var list;


function addTask(){
    if(inputBox.value === ''){
        alert("Please Write the task first");
    }
    else{
    
        var list = document.createElement('li');
        list.innerHTML = inputBox.value;
        task.appendChild(list);

        var span = document.createElement('span');
        span.textContent = '\u00d7';
        list.appendChild(span);

    }
    inputBox.value = "";

    task.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            toggleText(e.target);
        }
    });
    
    function toggleText(element) {
        if (!element.oldText) {
            // Store the old text content if not already stored
            element.oldText = element.innerHTML;
            var newHeader = document.createElement('h4');
            newHeader.textContent = "TASK COMPLETED";
            element.innerHTML = ''; // Clear existing content
            element.appendChild(newHeader); // Append the new h4 element
        } else {
            // Restore the old text content
            element.innerHTML = element.oldText;
            delete element.oldText; // Remove stored old text content
        }
    }
}

task.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
    }
})
