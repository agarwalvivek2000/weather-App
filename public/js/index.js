const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  const cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = "please write city name before the search";
    dataHide.classList.add("data_hide");
  } else {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=47afaba84f6b22416c832e23ef7b0292`;
      const responce = await fetch(url);
      const data = await responce.json();
      // console.log(data);
      city_name.innerText = `${data.name},${data.sys.country}`;
      temp.innerText = data.main.temp;

      const tempMood = data.weather[0].main;
      if (tempMood === "Clear") {
        temp_status.innerHTML =
          '<i class=" fa-solid fa fa-clear" style ="color:#eccc68;"></i>';
      } else {
        if (tempMood === "Clouds") {
          temp_status.innerHTML =
            '<i class=" fa-solid fa fa-cloud" style ="color:#eccc68;"></i>';
        } else {
          if (tempMood === "Rain") {
            temp_status.innerHTML =
              '<i class=" fa-solid fa fa-rain" style ="color:#eccc68;"></i>';
          } else {
            temp_status.innerHTML =
              '<i class=" fa-solid fa fa-sun" style ="color:#eccc68;"></i>';
          }
        }
      }
      dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "please enter the valid city name";
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
cityName.addEventListener("input", () => {
  dataHide.classList.add("data_hide");
  city_name.innerText = "Get Output Here";
});

const getDay = () => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "August",
    "September",
    "october",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const weekDay = time.getDay();

  const today_date = document.getElementById("today_date");
  today_date.innerText = `${date} ${months[month]}`;

  const day = document.getElementById("day");
  day.innerText = days[weekDay];
  //   console.log(months[month]);
  //   console.log(days)
};
