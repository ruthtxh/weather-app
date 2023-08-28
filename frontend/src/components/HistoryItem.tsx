type HistoryItemProps = {
    index: number
    id: string;
    city: string;
    country: string;
    time: string
}

export function HistoryItem({ index, id, city, country, time }: HistoryItemProps) {
    return (<div>
        <span>{index + 1}. {city}, {country}</span><span>{time}</span>
        <button>Search</button>
        <button>Delete</button>
        <hr />
    </div>)
}