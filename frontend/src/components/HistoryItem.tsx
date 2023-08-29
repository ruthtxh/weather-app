import { HistoryData, SearchData } from "../App"
import { formatTime } from "../utils/formatting"
import IconButton from "./ui/IconButton"

type HistoryItemProps = {
    index: number
    id: string;
    city: string;
    country: string;
    time: string;
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
        <div className="history-item">
            <span>{index + 1}. {city}, {country}</span>
            <div>
                <span>{formatTime(time)}</span>
                <IconButton onClick={(e) => handleSubmit(e, { city, country })}><i className="fa fa-search"></i></IconButton>
                <IconButton onClick={() => setHistoryList(historyList.filter(item => item.id !== id))}><i className="fa fa-trash"></i></IconButton>
            </div>
        </div >
        <hr />
    </div>)
}