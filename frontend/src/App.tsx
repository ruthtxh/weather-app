import './App.css'
import { getWeatherData, WeatherData } from './services/api'
import SectionWrapper from './components/SectionWrapper';
import SearchForm from './components/SearchForm';
import { useState } from 'react'

export type SearchData = {
  city: string;
  country: string;
}

function App() {
  const [result, setResult] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);
  const [historyList, setHistoryList] = useState<[]>([]);

  const handleNewSearch = async ({ city, country }: SearchData) => {
    setIsLoading(true);
    setIsError(false);
    const { data, error } = await getWeatherData(city, country);
    if (error === null) {
      setResult(data);
    }
    else setIsError(true);
    setIsLoading(false);
  }

  const onSearch = async ({ ...data }: SearchData) => {
    console.log(data);
    await handleNewSearch(data);
  }
  return (
    <>
      <SectionWrapper title="Today's Weather">
        <SearchForm onSubmit={onSearch} />
        {result?.city}
        {result?.country}
        {result?.main}
        {result?.description}
        {result?.temp}
        {result?.humidity}
        {result?.dt}
        {isLoading && <div>Loading</div >}
        {isError && <div> Not found</div >}
      </SectionWrapper>

      <SectionWrapper title="Search History">
        {historyList.length === 0 && <div> No Record</div >}
      </SectionWrapper>
    </>
  )
}

export default App