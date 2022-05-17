import { getMetals, getOrders, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

/*Remember that the function you pass to find() must return true/false */

/* Find price of Metal and store it in a new variable */
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const totalCostOfMetal = foundMetal.price

/* Find price of Style and store it in a new variable */
const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
const totalCostOfStyle = foundStyle.price

/* Find price of Size and store it in a new variable */
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
const totalCostOfSize = foundSize.price

/* Add up all the prices to find total cost of metal, size and style */
const totalCost = totalCostOfMetal + totalCostOfSize + totalCostOfStyle

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"

})

/* Replaces timestamp string with the total price */
return `<li>Order #${order.id} cost ${costString}</li>`
}


export const Orders = () => {
  
    const orders = getOrders()

    let html = "<ul>"
   
    const listItems = orders.map(buildOrderListItem)

    
    html += listItems.join("")
    html += "</ul>"

    return html
}