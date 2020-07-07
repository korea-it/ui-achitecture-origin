const API_KEY = "fe54b16198d081b7737e7a675eb826da";
const lat = 35.8794359;
const lon = 128.6232165;

axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
        // handle success
        console.log(response);


        const img = document.querySelector(".weather-icon");
        img.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });


const weatherButton = document.querySelector(".weather-btn");
weatherButton.addEventListener("click", async (event) => {

    await wait();

    const id = 5174095;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`)
        .then(function (response) {
            const differ = 6;
            // 온도, 날짜, 아이콘 
            const d = new Date();

            // convert to msec
            // subtract local time zone offset
            // get UTC time in msec
            const utc = response.data.dt + (d.getTimezoneOffset() * 60000);

            // create new Date object for different city
            // using supplied offset
            const nd = new Date(utc + (3600000 * differ));
            console.log(utc, nd)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
})


function wait() {
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'flex'
    setTimeout(() => {
        console.log('now requesting...')
    }, 3000)
}