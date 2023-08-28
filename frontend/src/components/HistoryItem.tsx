import { HistoryData, SearchData } from "../App"
import { formatTime } from "../utils/formatting"

type HistoryItemProps = {
    index: number
    id: string;
    city: string;
    country: string;
    time: Date;
    historyList: HistoryData[]
    setHistoryList: (arr: HistoryData[]) => void
    onSubmit: (data: SearchData) => void
}

export function HistoryItem({ index, id, city, country, time, historyList, setHistoryList, onSubmit }: HistoryItemProps) {
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>, search: SearchData) => {
        e.preventDefault();
        onSubmit({
            city: search.city,
            country: search.country
        })
    }
    return (<div>
        <span>{index + 1}. {city}, {country}</span><span>{formatTime(time)}</span>
        <button type="submit" onClick={(e) => handleSubmit(e, { city, country })}>Search</button>
        <button onClick={() => setHistoryList(historyList.filter(item => item.id !== id))}>Delete</button>
        <hr />
    </div >)
}