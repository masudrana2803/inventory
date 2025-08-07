document.addEventListener('DOMContentLoaded',()=>{
function Product(name,quantity,type,stock){
    this.name=name;
    this.quantity=quantity;
    this.type=type;
    this.stock=stock;
}

const inventoryItems=document.getElementById('inventoryItems');
const inventoryList=document.getElementById('inventoryList')
const itemName=document.getElementById('itemName')
const itemQty=document.getElementById('itemQty')
const itemType=document.getElementById('itemType')
const itemStock=document.getElementById('itemStock')

let Products=[]

function renderinventoryList(){
    inventoryList.innerHTML=''

    if (Products===0) {
        inventoryList.innerHTML='<p class="text-muted text-center">No items added yet.</p>';
        return;
    }

    Products.forEach((Products, idx) => {
        const inventoryList = document.createElement('div')
        inventoryList.classList.add('inventoryList')
        inventoryList.innerHTML=`
        <p>Item name: ${product.name}</p>
            <p>Item Quantity: ${product.quantity}</p>
                <p>Item type: ${product.type}</p>
                <p>Item avialability: ${product.stock}</p>
        `;


    })
}

    inventoryItems.addEventListener('submit', function(e) {
        e.preventDefault();

        const newProduct = new Product(
            itemName.value.trim(),
            itemQty.value.trim(),
            itemType.value.trim(),
            itemStock.value.trim(),

        );

        if (editIndex !== null) {
            Products[editIndex] = newProduct;
            editIndex = null;
            inventoryItems.querySelector('.btn').textContent = 'Add Student';
        } else {
            Products.push(newProduct);
        }

        renderinventoryList();
        inventoryItems.reset();
    });

})