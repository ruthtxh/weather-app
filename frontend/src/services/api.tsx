const apiKey = import.meta.env.VITE_OPENWEATHERAPI_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

interface WeatherDataDTO {
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [{
        "id": number,
        "main": string,
        "description": string,
        "icon": string
    }],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number
}

export interface WeatherData {
    "city": string,
    "country": string,
    "main": string,
    "description": string,
    "temp": number,
    "humidity": number,
    "dt": number,
    "icon": string
}

type GetWeatherSuccessResponse = {
    data: WeatherData;
    error: null;
};

type GetWeatherErrorResponse = {
    data: null;
    error: string;
};

type GetWeatherResponse = | GetWeatherSuccessResponse | GetWeatherErrorResponse;

export const getWeatherData = async (
    city: string,
    country: string
): Promise<GetWeatherResponse> => {
    try {
        const response = await fetch(`${BASE_URL}?q=${city},${country}&appid=${apiKey}`);
        const data: WeatherDataDTO = await response.json();
        const transformedData: WeatherData = {
            city: data.name,
            country: data.sys.country,
            main: data.weather[0].main,
            description: data.weather[0].description,
            temp: data.main.temp,
            humidity: data.main.humidity,
            dt: data.dt,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        };
        return {
            data: transformedData,
            error: null,
        };
    } catch (e: any) {
        return {
            data: null,
            error: (e as Error).message,
        };
    }
};