import { formatTemperature, formatDateTime } from "../utils/formatting"
import { WeatherData } from '../services/api'

type ResultCardProps = {
    result: WeatherData
}

export default function ResultCard({ result }: ResultCardProps) {
    return (<div>
        {result.city},
        {result.country}<br />
        {result.main}<br />
        Description: {result.description}<br />
        Temperature: {formatTemperature(result.temp!)}&deg;C<br />
        Humidity: {result.humidity}%<br />
        Time: {formatDateTime(result.dt!)}<br />
    </div >)
}