import { formatTemperature, formatDateTime } from "../utils/formatting"
import { WeatherData } from '../services/api'

type ResultCardProps = {
    result: WeatherData
}

export default function ResultCard({ result }: ResultCardProps) {
    return (
        <div className="container">
            <div className="card">
                <table>
                    <tr>
                        <td>{result.city}, {result.country}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><h1><b>{result.main}</b></h1> </td>
                        <td><img
                            src={result.icon}
                            alt={`weather-${result.main}`}
                        /></td>
                    </tr>
                    <tr>
                        <td>Description: </td>
                        <td>{result.description}</td>
                    </tr>
                    <tr>
                        <td>Temperature:</td>
                        <td>{formatTemperature(result.temp!)}&deg;C</td>
                    </tr>
                    <tr>
                        <td>Humidity:</td>
                        <td>{result.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Time: </td>
                        <td>{formatDateTime(result.dt!)}</td>
                    </tr>
                </table>
            </div>
        </div>)
}