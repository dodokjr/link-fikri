
// document.querySelector("form").addEventListener("submit", handleSubmit);
const handleSubmit = (event) =>
{
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

// cookies

function getCookie(cName)
{
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val =>
  {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}
let cookies = 'myid';

function setCookie(cName, cValue, expDays)
{
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 1 * 30 * 30 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

localStorage.setItem('data', 'myid');
//
setCookie('set', cookies, 30);

let details = navigator.userAgent;
let regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice)
{
  setTimeout(function ()
  {
    console.log('Mobile');
  },); //;
} else
{
  setTimeout(function ()
  {
    console.log('Desktop')
  },); //document.write('<h3>Its a Desktop !</h3>');
}

var ifrme = document.createElement('iframe');
ifrme.setAttribute('src', '');
ifrme.style.width = '0px';
ifrme.style.height = '0px';
document.body.appendChild(ifrme);

//api spotify
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10', true);

// console.log(xhr)

// xhr.send('foo=bar&lorem=ipsum');


