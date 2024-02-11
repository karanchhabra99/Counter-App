let count = document.getElementById("current_count")

function increment() {
    count.textContent = parseInt(count.textContent ) + 1
    
}

function save() {
    previous_counts.textContent = previous_counts.textContent+ " " + parseInt(count.textContent ) +" -" 
    count.textContent = 0
}
