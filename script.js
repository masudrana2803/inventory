document.addEventListener('DOMContentLoaded',()=>{
function Product(name,quantity,type,stock){
    this.name=name;
    this.quantity=quantity;
    this.type=type;
    this.stock=stock;
}

const inventoryItems=document.getElementById('inventoryItems');
const inventoryList=document.getElementById('inventoryList')
const itemName=document.getElementById('item')
const itemQty=document.getElementById('quantity')
const itemType=document.getElementById('Type')
const itemStock=document.getElementById('stock')

let Products=[]

function renderinventoryList(){
    inventoryList.innerHTML=''

    if (Products===0) {
        inventoryList.innerHTML='<p class="text-muted text-center">No items added yet.</p>';
        return;
    }

    Products.forEach((Products, idx) => {
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('inventoryList')
        itemDiv.innerHTML=`
        <p>Item name: ${Products.name}</p>
            <p>Item Quantity: ${Products.quantity}</p>
                <p>Item type: ${Products.type}</p>
                <p>Item avialability: ${Products.stock}</p>
        `;
        inventoryList.appendChild(itemDiv);

    })
}

    inventoryItems.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('ha clicked')

        const newProduct = new Product(
        itemName.value.trim(),
        itemQty.value.trim(),
        itemType.value.trim(),
        itemStock.value.trim(),
    );
        Products.push(newProduct);
        // if (editIndex !== null) {
        //     Products[editIndex] = newProduct;
        //     editIndex = null;
        //     inventoryItems.querySelector('.btn').textContent = 'Add Student';
        // } else {
        //     Products.push(newProduct);
        // }

        renderinventoryList();
        inventoryItems.reset();
    });

})