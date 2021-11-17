import { myFetch } from "./helpers.js";

const Auth = async () =>{
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    //new FormData() er et interface (er IKKE en vaiabel)
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const options = {
        method: 'POST',
        body: formData
    }
    const data = await myFetch('https://api.mediehuset.net/token', options);
    //sessionStorage er at vi gemme/sætter data/token i browseren
    //setItem er til at forsætte sessionStorage hvad for en "hylde" den skal sætte vores data på
    //vi bruger JSON.stringify for at vores data/token bliver lavet til en string i consolen
    sessionStorage.setItem('token', JSON.stringify(data));
}
//her bliver der sat en addeventlistener på login knappen til vores auth funktion 
document.querySelector('#sendLogin').addEventListener('click', () => {
    Auth();
});
//hvis login er rigtigt bliver token vist i console
//JSON.parse gør en string til at JSON objekt
const loginData = JSON.parse(sessionStorage.getItem('token'));
if(loginData && loginData.username){
    console.log(`Du er logget ind som ${loginData.username}`);
}else{
    //hvis login er rigtigt kommer beskenden 'du er logget ind' i consolen
    console.log('du skal logge ind');
}