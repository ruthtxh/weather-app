import './App.css'
import { getWeatherData, WeatherData } from './services/api'
import SectionWrapper from './components/SectionWrapper';
import SearchForm from './components/SearchForm';
import ResultCard from './components/ResultCard'
import NotFound from './components/NotFound';
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

  const onSearch = async ({ ...data }: SearchData) => {
    const result = await handleNewSearch(data);
    if (data !== null)
      setHistoryList([{
        id: crypto.randomUUID(),
        time: new Date(),
        city: result!.city,
        country: result!.country
      }, ...historyList]);
  }

  return (
    <>
      <SectionWrapper title="Today's Weather">
        <SearchForm onSubmit={onSearch} />
        {isLoading ? <div>Loading</div >
          : isError ? <NotFound />
            : result ? <ResultCard result={result!} />
              : null}
      </SectionWrapper>

      <SectionWrapper title="Search History">
        {historyList.length > 0 ? historyList.map((item, index) => (<HistoryItem key={item.id} index={index} {...item} historyList={historyList} setHistoryList={setHistoryList} onSubmit={onSearch} />)) :
          <h4 className='no-record'>No Record</h4>}
      </SectionWrapper>
    </>
  )
}

export default App