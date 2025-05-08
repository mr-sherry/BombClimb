import React from 'react'
import styles from "./Game.module.css"

function Game() {
    const divs = [];
    const handleClick = (e) => {
        const id = e.currentTarget.getAttribute("id")
        alert(`${id} clicked`)
    }

    for (let index = 0; index < 24; index++) {
        divs.push(<div key={index} id={index} onClick={handleClick} className={styles.gridDivs}>
        </div>)
    }

    return (
        <>
            <div className={styles.mainDiv} >
                <h1>Climb Tower</h1>
                <div className={styles.mainGridDiv}>

                    {divs}
                </div>
            </div>

        </>
    )
}

export default Game