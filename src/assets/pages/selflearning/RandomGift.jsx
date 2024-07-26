import { useState } from 'react'

const gifts = [
    'Dép lào',
    'Giáo trình',
    'Máy tính',
    'Phụ kiện',
    'Sách',
    'Thiết bị điện tử',
    'Thư viện',
]
function RandomGift() {
    const [gift, setGift] = useState()

    const randomGift = () => {
        const randomIndex = Math.floor(Math.random() * gifts.length)
        setGift(gifts[randomIndex])
        console.log(gift)
    }
    return (
        <>
            <div style={{ padding: 32, textAlign: 'center' }}>
                <h1>Phần thưởng của bạn là: </h1>
                <h1>{gift || 'Chưa có phần thưởng'}</h1>
                <button onClick={randomGift} style={{ backgroundColor: "pink" }}>Lấy thưởng</button>
            </div>
        </>
    )
}

export default RandomGift;