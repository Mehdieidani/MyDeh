const apiKey = "dc9c93f51cdd375d459483c2a9f86d88";

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    alert("لطفاً نام شهر را وارد کنید");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
      return response.json();
    })
    .then(data => {
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("condition").textContent = data.weather[0].description;
    })
    .catch(err => {
      alert("⚠️ شهر پیدا نشد یا مشکلی در اتصال وجود دارد");
      console.error(err);
    });
});