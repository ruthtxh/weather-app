import { formatTemperature, formatDateTime } from "../utils/formatting"
import { WeatherData } from '../services/api'

type ResultCardProps = {
    result: WeatherData
}

export default function ResultCard({ result }: ResultCardProps) {
    return (
        <div className="card">
            <p>{result.city}, {result.country}</p>
            <h1><b>{result.main}</b></h1>
            <table>
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
        </div>)
}