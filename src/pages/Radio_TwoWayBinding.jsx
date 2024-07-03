import { useState } from 'react'
const course = [
    { id: 1, name: 'React for Beginners', price: 19.99 },
    { id: 2, name: 'React Advanced', price: 24.99 },
    { id: 3, name: 'React for Noobs', price: 15.99 },
    { id: 4, name: 'React for Experts', price: 29.99 },
    { id: 5, name: 'React for Professionals', price: 34.99 },
]

function Radio_TwoWayBinding() {
    const [checked, setChecked] = useState(1)
    const handleSubmit = () => {
        console.log({ id: checked });

    }
    return (
        <>
            <div style={{ padding: 20 }}>
                {course.map(course => (
                    <div key={course.id}>
                        <input type='radio'
                            checked={checked === course.id}
                            onChange={() => setChecked(course.id)}
                        />
                        {course.name}
                    </div>
                ))}
                <button id='register' onClick={handleSubmit}>Register</button>
            </div>
        </>
    )
}

export default Radio_TwoWayBinding