import clsx from "clsx"
import { useState } from "react"

export const Switch = () => {
    const [action, setAction] = useState(true)

    return (
        <>
            <div className='flex bg-secondary mx-auto  overflow-hidden rounded-3xl pr-1 font-[Roboto] font-[500]'>
                <button
                    onClick={() => { setAction(true) }}
                    className={clsx("flex-1 bg-primary rounded-3xl ml-1 mr-1 my-1 px-2 ",
                        action ? "text-white " : "text-dark !bg-transparent"
                    )} >Mainnet</button>

                <button
                    onClick={() => { setAction(false) }}
                    className={clsx(" rounded-3xl my-1 px-2 ",
                        action ? "text-dark" : "text-white bg-primary"
                    )}>Testnet</button>
            </div>


        </>

    )


}