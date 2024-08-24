const btn = document.querySelector('.btn');
const user = document.querySelector('.user');
const body = document.querySelector('body');

function fetchUser() {
  fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      user.innerHTML = `
      <img
          src=${data.results[0].picture.large}
        />
       <div class="details">       
          <p>
            Name:
            <span>${data.results[0].name.first}</span>
            </p>
          <p>
          Email:
            <span>${data.results[0].email}</span>
          </p>
          <p>
            Phone:
            <span>${data.results[0].phone}</span>
          </p>
          <p>
            Location:
            <span>${data.results[0].location.country}</span>
          </p>
          <p>
            Age:
            <span>${data.results[0].registered.age}</span>
            </p>
        </div>
            `;
    })
    .catch((err) => console.log(err));
}

window.addEventListener('load', fetchUser);
btn.addEventListener('click', fetchUser);
