import { useEffect } from 'react'
import moleHill from './molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 2000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{ 'width': '20vw' }} src={moleHill} alt = "hill"/>
        </div>
    )
}

export default EmptySlot