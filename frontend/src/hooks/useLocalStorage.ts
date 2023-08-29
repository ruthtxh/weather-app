import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const stickyValue =
            window.localStorage.getItem(key);
        return stickyValue !== null
            ? JSON.parse(stickyValue)
            : initialValue;
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])

    return [value, setValue] as [T, typeof setValue]
}