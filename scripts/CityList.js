import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "city") {
            for (const walker of walkers) {
                if (walker.cityId === parseInt(clickTarget.dataset.id)) {
                    window.alert(`${walker.name} works in this city`)
                }
            }
        }
    }
)

export const CityList = () => {
    let citiesHTML = "<ul>"

        for (const city of cities) {

                citiesHTML += `<li data-id="${city.id}"
                                data-type="city"
                                >${city.name}
                            </li>`
        }


    citiesHTML += "</ul>"

    return citiesHTML
}

