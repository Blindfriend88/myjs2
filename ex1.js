let _firstName=prompt("Quel est votre prénom?")
let _surname=prompt("Quel est votre nom de famille?")
alert("Votre prénom est "+_firstName+" et votre nom est "+_surname+".")

function DisplayName()
{
    let _firstName=prompt("Quel est votre prénom?");
let _surname=prompt("Quel est votre nom de famille?");
}
DisplayName(alert("Votre nom est "+_surname+"."))

function DisplayFirstName()
{
    let _firstName=prompt("Quel est votre prénom?");
let _surname=prompt("Quel est votre nom de famille?");
}
DisplayFirstName(alert("Votre prénom est "+_firstName+"."))

function DisplayFullName()
{
    let _firstName=prompt("Quel est votre prénom?");
let _surname=prompt("Quel est votre nom de famille?");
if(_firstName=="Arnaud")
{
    if(_surname=="Delannoy")
    {
        alert("Bonjour majesté!")
    }
}
else
{
    alert("Vous vous appelez "+_firstName+" "+_surname+".")
}
}
DisplayFullName()