import { useState } from 'react'
const course = [
    { id: 1, name: 'React for Beginners', price: 19.99 },
    { id: 2, name: 'React Advanced', price: 24.99 },
    { id: 3, name: 'React for Noobs', price: 15.99 },
    { id: 4, name: 'React for Experts', price: 29.99 },
    { id: 5, name: 'React for Professionals', price: 34.99 },
]

function CheckBox_TwoWayBinding() {
    const [checked, setChecked] = useState([])
    //push checked vào mảng
    const handleCheck = (id) => {
        setChecked(prev => {    // prev để bảo lưu những cái đã đánh trước đó
            const isChecked = checked.includes(id)
            //uncheck
            if (isChecked) {
                return checked.filter(item => item !== id) //lọc ra những cái đã đánh dấu
            } else {
                return [...prev, id]
            }

        })
    }
    const handleSubmit = () => {
        console.log({ ids: checked });

    }
    return (
        <>
            <div style={{ padding: 20 }}>
                {course.map(course => (
                    <div key={course.id}>
                        <input type='checkbox'
                            checked={checked.includes(course.id)} // trả về true nếu checked có chứa id đó

                            onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                    </div>
                ))}
                <button id='register' onClick={handleSubmit}>Register</button>
            </div>
        </>
    )
}

export default CheckBox_TwoWayBinding