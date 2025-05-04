const checkboxes = document.querySelectorAll(".check");
const newtask = document.querySelector("button");
const form = document.getElementById("myform")
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        this.parentElement.style.textDecoration = 'line-through'; 
        this.parentElement.style.opacity ="0.5"
      } else {
        this.parentElement.style.textDecoration = 'none'; // Reset to default
        this.parentElement.style.opacity ="1"
      }
    });
  });

  const addnew = ()=>{
    let newwork = prompt("what work you have to do after some time?")
   // Create a label
    const label = document.createElement('label');
    label.className = "options"

// Create the checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';

// Add text to the label
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(newwork));
    label.appendChild(document.createElement('br'));

// Add event listener to the new checkbox
    checkbox.addEventListener('change', function () {
    if (this.checked) {
            this.parentElement.style.textDecoration = 'line-through'; 
            this.parentElement.style.opacity ="0.5"
    } else {
        this.parentElement.style.textDecoration = 'none'; 
        this.parentElement.style.opacity ="1"
    }
    
});

// Append the label (with checkbox) to the body or a specific container
form.insertBefore(label,newtask)
  }

  newtask.addEventListener("click", (evt) => {
    evt.preventDefault();
    addnew();
    console.log("'*'*5")
    
  });