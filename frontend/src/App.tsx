import './App.css'
import { getWeatherData, WeatherData } from './services/api'
import SectionWrapper from './components/SectionWrapper';
import SearchForm from './components/SearchForm';
import ResultCard from './components/ResultCard'
import { HistoryItem } from './components/HistoryItem';
import { useState } from 'react'

export type HistoryData = {
  id: string;
  time: Date;
} & SearchData;

export type SearchData = {
  city: string;
  country: string;
}

function App() {
  const [result, setResult] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  const [historyList, setHistoryList] = useState<HistoryData[]>([]);

  const handleNewSearch = async ({ city, country }: SearchData) => {
    setIsLoading(true);
    setIsError(false);
    const { data, error } = await getWeatherData(city, country);
    if (error === null) {
      setResult(data);
    }
    else setIsError(true);
    setIsLoading(false);
    return data;
  }
  const addToHistory = (data: HistoryData) => {
    setHistoryList([data, ...historyList]);
  }

  const onSearch = async ({ ...data }: SearchData) => {
    const result = await handleNewSearch(data);
    if (data !== null)
      addToHistory({
        id: crypto.randomUUID(),
        time: new Date(),
        city: result!.city,
        country: result!.country
      })
  }
  return (
    <>
      <SectionWrapper title="Today's Weather">
        <SearchForm onSubmit={onSearch} />
        {result !== null && <ResultCard result={result} />}
        {isLoading && <div>Loading</div >}
        {isError && <div>Not found</div >}
      </SectionWrapper>

      <SectionWrapper title="Search History">
        {historyList.length === 0 && <div>No Record</div >}
        {historyList.map((item, index) => (<HistoryItem key={item.id} index={index} {...item} historyList={historyList} setHistoryList={setHistoryList} />))}
      </SectionWrapper>
    </>
  )
}

export default App