import { getMetals, setMetal } from "./database.js"

/* Invoke getMetals */
const metals = getMetals()

/* Triggers change event listener for metal. Invokes setMetal inside the event listener. Each metal option is linked to an id */

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    /* This is how you have been converting objects to <li> elements */
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

