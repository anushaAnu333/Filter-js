let grid = document.querySelector(".products");
let filterInput = document.getElementById("filterInput");

fetch("./data.json")
	.then((res) => res.json())
	.then((json) => {
		// iterating products
		for (let value of json) {
			addElement(grid, value);
		}
	});

// add event listener
filterInput.addEventListener("keyup", filterProducts);

// callback function
function filterProducts() {
	let filterValue = filterInput.value.toUpperCase();
	let item = grid.querySelectorAll(".item");
	// console.log(filterValue);

	for (let i = 0; i < item.length; i++) {
		let span = item[i].querySelector(".title");

		if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			item[i].style.display = "initial";
		} else {
			item[i].style.display = "none";
		}
	}
}

//add eventlistner for filter functionality

//get value from api and create dynamic element

function addElement(appendIn, value) {
	let div = document.createElement("div");
	div.className = "item";
	let { image, title, category, price } = value;

	div.innerHTML = `
    <img src="${image}" alt="">
    <div class="title">
    ${title}
                        
    <div class="category">
                            ${category}
                        </div>
                        <div class="cost">${price}</div>
                        <button class="buy">Buy now</button>
    `;

	appendIn.appendChild(div);
}
