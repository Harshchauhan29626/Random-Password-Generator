function generatePassword(){
    const passwordlength = document.getElementById("passwordlength").value;
    const uppercasecheckbox = document.getElementById("uppercasecheckbox").checked;
    const lowercasecheckbox = document.getElementById("lowercasecheckbox").checked;
    const numbercheckbox = document.getElementById("numbercheckbox").checked;
    const symbolscheckbox = document.getElementById("symbolscheckbox").checked;
    const currencycheckbox = document.getElementById("currencycheckbox").checked;

    const uppercaseCher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCher = "abcdefghijklmnopqrstuvwxyz";
    const numbercheCher = "0123456789";
    const symbolscheCher = "!@#%^&*_+?=-<>";
    const currencyCher = "₹$₩€£¥";

    let allCher = "";
    let password = "";

    if (uppercaseCher) allCher +=uppercaseCher;
    if (lowercaseCher) allCher +=lowercaseCher;
    if (numbercheCher) allCher +=numbercheCher;
    if (symbolscheCher) allCher +=symbolscheCher;
    if (currencyCher) allCher +=currencyCher;

    for (let i = 0; i < passwordlength; i++){
        const randompass = Math.floor(Math.random() * allCher.length);
        password += allCher.charAt(randompass);
    }

    document.getElementById("p1").innerHTML = password;
    console.log(password);
}