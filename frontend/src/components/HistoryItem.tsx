import { HistoryData } from "../App"
type HistoryItemProps = {
    index: number
    id: string;
    city: string;
    country: string;
    time: string;
    historyList: HistoryData[]
    setHistoryList: (arr: HistoryData[]) => void
}

export function HistoryItem({ index, id, city, country, time, historyList, setHistoryList }: HistoryItemProps) {
    return (<div>
        <span>{index + 1}. {city}, {country}</span><span>{time}</span>
        <button>Search</button>
        <button onClick={() => setHistoryList(historyList.filter(item => item.id !== id))}>Delete</button>
        <hr />
    </div >)
}