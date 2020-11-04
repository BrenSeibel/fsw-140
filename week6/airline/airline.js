
var x = document.seibel_airline;

x.addEventListener("submit", function(event){
    event.preventDefault()
    var rainbow = []
    for (i = 0; i < x.diet.length; i++){
        console.log(x.diet)
        if (x.diet[i].checked){
            rainbow.push(x.diet[i].value)
        }
    }
    alert(`First Name: ${x.fname.value}
    Last Name: ${x.lname.value}
    Age: ${x.Age.value}
    Gender: ${x.gender.value}
    Destination: ${x.country.value}
    Diet: ${rainbow}`)

    var reservation = `First Name: ${x.fname.value}
    Last Name: ${x.lname.value}
    Age: ${x.Age.value}
    Gender: ${x.gender.value}
    Destination: ${x.country.value}
    Diet: ${rainbow}`
    
    axios.post("https://localhost:9000/", reservation) 
    .then(response => {
        console.log(response)
    })
    })


