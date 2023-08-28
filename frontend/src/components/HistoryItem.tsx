import { HistoryData } from "../App"
import { formatTime } from "../utils/formatting"
type HistoryItemProps = {
    index: number
    id: string;
    city: string;
    country: string;
    time: Date;
    historyList: HistoryData[]
    setHistoryList: (arr: HistoryData[]) => void
}

export function HistoryItem({ index, id, city, country, time, historyList, setHistoryList }: HistoryItemProps) {
    console.log(time)
    return (<div>
        <span>{index + 1}. {city}, {country}</span><span>{formatTime(time)}</span>
        <button>Search</button>
        <button onClick={() => setHistoryList(historyList.filter(item => item.id !== id))}>Delete</button>
        <hr />
    </div >)
}