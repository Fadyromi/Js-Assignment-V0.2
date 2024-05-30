/*----------- Variables-----------*/
var carType = document.getElementById("Car-Type");
var carMan = document.getElementById("Car-man");
var carModel = document.getElementById("Car-yearModel");
var Dreamlist = '';
var Dreamcon = document.getElementById('tableContent');
/*----------- Main Array-----------*/

DreamArray = [];

/*----------- Check for local-----------*/
if (localStorage.getItem("AllDreams") !== null){
    DreamArray = JSON.parse(localStorage.getItem("AllDreams"));
    Dreamdis()

}

/*----------- Adding to array function-----------*/

function addDream() {
    if (carType.value.trim() === '' || carMan.value.trim() === '' || carModel.value.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }
    var Dream = {
        Type: carType.value,
        Manufacture: carMan.value,
        Model: carModel.value,

    };
    DreamArray.push(Dream);
    localStorage.setItem("AllDreams" , JSON.stringify(DreamArray));
    Dreamdis();
    carType.value = '';
    carMan.value = '';
    carModel.value = '';

    console.log(DreamArray);

};


/*----------- Display in tabel function-----------*/
function Dreamdis() {

    for (i = 0; i < DreamArray.length; i++) {
        var row = `<tr>
        <td>${i + 1}</td>
        <td>${DreamArray[i].Type}</td>
                <td>${DreamArray[i].Manufacture}</td>
                <td>${DreamArray[i].Model}</td>
        
        <td>
            <button class="btn btn-info w-100"><i
                    class="fa-solid fa-eye pe-2 "></i>Visit</button>
        </td>
        <td>
        <button onclick="deleteDream(i)" class="btn btn-danger w-100" ><i
        class="fa-solid fa-trash pe-2 "></i>Delete</button>
        </td>
    </tr>`
    }
    Dreamcon.innerHTML += row
   
}

/*----------- Deleting function-----------*/

function deleteDream(i) {
    DreamArray.splice(i,1)
    localStorage.setItem("AllDreams" , JSON.stringify(DreamArray));
    
}
