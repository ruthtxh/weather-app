import { FormEvent, useRef } from "react"
import { SearchData } from "../App"

type SearchFormProps = {
    onSubmit: (data: SearchData) => void
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
    const cityRef = useRef<HTMLInputElement>(null)
    const countryRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit({
            city: cityRef.current!.value,
            country: countryRef.current!.value,
        })
    }
    return (<>
        <form className="form-inline">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" ref={cityRef} />
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" ref={countryRef} />
            <button type="submit" onClick={handleSubmit}>Search</button>
            <input type="reset" value="Clear" />
        </form>
    </>)
}