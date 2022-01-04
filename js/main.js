const sDate = document.querySelector("#sDate")
const eDate = document.querySelector("#eDate")
const typeS = document.querySelector("select[name=type]")
const boiteS = document.querySelector("select[name=boite]")
const boite = document.querySelector(".boite")
const fuelS = document.querySelector("select[name=fuel]")
const fuel = document.querySelector(".carburant")
const sbmt = document.querySelector("input[type=submit]")

const date = new Date()
const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
const month =
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
sDate.min = `${date.getFullYear()}-${month}-${day}`

let initialPrice = 0
let gearboxPrice = 0
let fuelPrice = 0
let start = ""
let end = ""
let days = 0
let total = 0

// ? start date selecton process
sDate.addEventListener("change", () => {
  start = sDate.value
  eDate.disabled = false
  let d =
    parseInt(start.substring(start.length - 2)) + 1 < 10
      ? `0${parseInt(start.substring(start.length - 2)) + 1}`
      : parseInt(start.substring(start.length - 2)) + 1
  eDate.min = `${start.substring(0, start.length - 2)}${d}`

  eDate.value = end = eDate.min
})

// ? end date selection process
eDate.addEventListener("change", () => {
  end = eDate.value
})

// ? type selection process
typeS.addEventListener("change", () => {
  const selectedType = typeS.value
  //   ? moto
  if (selectedType === "moto") {
    initialPrice = 10
    boite.classList.add("notVisible")
    fuel.classList.remove("notVisible")
    fuelS.innerHTML = `
    <option value="" disabled selected>Select fuel type</option>
    <option value="gasoline">Gasoline</option>
    <option value="electric">Eletrique</option>`
  } else {
    boite.classList.remove("notVisible")
    fuel.classList.remove("notVisible")
    // ? citadine
    if (selectedType === "citadine") {
      initialPrice = 12
      boiteS.innerHTML = `<option value="man">Manual</option>`
      fuelS.innerHTML = `
        <option value="" disabled selected>Select fuel type</option>
        <option value="gasoline">Gasoline</option>
        <option value="diesel">Diesel</option>
        <option value="electric">Eletrique</option>
        <option value="hybrid">Hybride</option>`
    } else if (selectedType === "compact") {
      // ? compact
      initialPrice = 14
      boiteS.innerHTML = `<option value="man">Manual</option>`
      fuelS.innerHTML = `
        <option value="" disabled selected>Select fuel type</option>
        <option value="gasoline">Gasoline</option>
        <option value="diesel">Diesel</option>
        <option value="hybrid">Hybride</option>`
    } else if (selectedType === "berline") {
      // ? berline
      initialPrice = 20
      boiteS.innerHTML = `<option value="auto">Automatic</option>`
      fuelS.innerHTML = `
        <option value="" disabled selected>Select fuel type</option>
        <option value="gasoline">Gasoline</option>
        <option value="diesel">Diesel</option>
        <option value="hybrid">Hybride</option>`
    } else if (selectedType === "utilitaire") {
      // ? utilitaire
      initialPrice = 16
      boiteS.innerHTML = `<option value="man">Manual</option>`
      fuelS.innerHTML = `<option value="diesel">Diesel</option>`
    } else if (selectedType === "engin") {
      // ? engin de chantier
      initialPrice = 900
      boiteS.innerHTML = `<option value="man">Manual</option>`
      fuelS.innerHTML = `
        <option value="" disabled selected>Select fuel type</option>
        <option value="gasoline">Gasoline</option>
        <option value="diesel">Diesel</option>`
    } else if (selectedType === "camion") {
      // ? truck
      initialPrice = 250
      boiteS.innerHTML = `<option value="auto">Automatic</option`
      fuelS.innerHTML = `<option value="diesel">Diesel</option>`
    }
  }
})

// ? gearbox selection process
boiteS.addEventListener("change", () => {
  if (boiteS.value === "man") gearboxPrice = 0.19 * initialPrice
  else gearboxPrice = 0
})

// ? fuel selection process
fuelS.addEventListener("change", () => {
  if (fuelS.value === "gasoline") fuelPrice = 0.14 * initialPrice
  else if (fuelS.value === "diesel") fuelPrice = 0.21 * initialPrice
  else if (fuelS.value === "electric") fuelPrice = 0.05 * initialPrice
  else if (fuelS.value === "hybrid") fuelPrice = 0.09 * initialPrice
  sbmt.removeAttribute("disabled")
})

sbmt.addEventListener("click", (e) => {
  e.preventDefault()
  days = (new Date(end) - new Date(start)) / 86400000
  total = days * (initialPrice + gearboxPrice + fuelPrice)
  alert(`
  Pickup Date: ${sDate.value}
  Drop Date: ${eDate.value}
  Number of days: ${days}
  Vehicule type: ${typeS.options[typeS.selectedIndex].text}
  Initial price: ${initialPrice}€
  Total to pay*: ${total}€
  *including gearbox and fuel price
  `)
})
