
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
//app js

var div = document.createElement('div');
div.setAttribute('class', 'padding');
div.innerHTML = `
<div>
<section class="animated-background">
<div id="stars1"></div>
<div id="stars2"></div>
<div id="stars3"></div>
</section>
​
<a id="profilePicture" href="#popup"> <img src="assets/pp2.jpeg" alt="Profile Picture" /> </a>​
<div class="overlay" id="popup">
<div class="popup">
  <div class="popup-photo">
    <a href="assets/img/me3.jpg" target="_blank"> </a>
  </div>
  <div class="popup-quote">Love Yourself</div>
  ​
  <a class="popup-close" onclick="history.back()">&times;</a>
</div>
</div>
​
<div id="userName">@MUHAMMAD_FIKRI_ARDYANSAH</div>
<br />
<div id="Text">Hai Semuanya yang saya hormati ini adalah Link 😍</div>
<br />
<div class="py-3 my-4">
        <div class="container-fluid">
          <div class="position-absolute start-50 translate-middle">
            <center>
            <a class="button-85 justify-content-center" href='#LOVE-YOURSELF'><i class='bx bx-like' style='font-size:20px'></i></a>
            <a class="button-85 justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal" title='contact me'><i class='bx bxs-contact' style='font-size:20px'></i></a>
            <!-- button -->
            </center>
          </div>
        </div>
      </div>
</div>
​
<div id="links">
<a class="link" href="https://bit.ly/3iNMbaa" target="_blank"><img src="assets/youtube.svg" width="20" /> Youtube</a>
<a class="link" href="https://bit.ly/3W3oVmN" target="_blank"><img src="assets/instagram.svg" width="20" />Instagram</a>
<a class="link" href="https://bit.ly/3hgWwe3" target="_blank"><img src="assets/facebook.svg" width="20" />facebook</a>
<a class="link" href="https://bit.ly/3iEQ2WK" target="_blank"><img src="assets/github.svg" width="20" />Github</a>
<a class="link" href="https://bit.ly/3BpWBD9" target="_blank"><img src="assets/twitter.svg" width="20" />Twitter</a>
<a class="link" href="https://bit.ly/3Ymjphd" target="_blank"><i class="bx bx-world" id="icon">&nbsp;</i>Official site</a>
<a class="link" href="https://bit.ly/3Fg9C3b" target="_blank"><img src="assets/tiktok.svg" width="20"  id="icon" />Tiktok</a>
<a class="link" href="https://bit.ly/3Ymjn95" target="_blank"><img src="assets/buka-ico.svg" width="20" id="icon" />Bukalapak</a>
</div>
​
<!-- modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <form  name="contact"
              method="POST"
              action="contact/?success=true"
       data-netlify="true"
       data-netlify-honeypot="bot-field" class="php-email-form" />
       <input type="hidden" name="subject" 
       value="Message from fikri-link.netlify.app" />
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" placeholder="Name" required>
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email"  placeholder="Your Email" required>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="message"  placeholder="Subject" required>
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                 <button type="submit" class="btn btn-dark">Send Message</button>
                 <input type="hidden" name="form-name" value="contact">
              </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
<div id="hashtag">#Love Yourself</div>
</div>
`;
document.getElementById('root').appendChild(div);
//api spotify
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10', true);

// console.log(xhr)

// xhr.send('foo=bar&lorem=ipsum');


