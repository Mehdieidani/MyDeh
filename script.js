
const API_KEY = "dc9c93f51cdd375d459483c2a9f86d88";

document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    if(!city) {
        alert("لطفاً نام شهر را وارد کنید!");
        return;
    }

    console.log("کلید فعال:", API_KEY);

    // استفاده از Open-Meteo API با کلید نمایش داده شده
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=31.32&longitude=48.68&current_weather=true&timezone=Asia/Tehran&apikey=${API_KEY}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("temp").innerText = data.current_weather.temperature;
            document.getElementById("wind").innerText = data.current_weather.windspeed;
            document.getElementById("humidity").innerText = data.current_weather.relativehumidity || "--";
            document.getElementById("condition").innerText = data.current_weather.weathercode;
        })
        .catch(err => {
            console.error(err);
            alert("خطا در دریافت اطلاعات هوا");
        });
});
