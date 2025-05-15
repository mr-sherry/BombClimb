import React, { useEffect, useRef, useState } from 'react'
import styles from "./Game.module.css"

function Game() {
    const [winIndex, setwinIndex] = useState({})
    const [bombIndex, setBombIndex] = useState({});
    const [row, setRow] = useState(0);
    const [gameOver, setGameOver] = useState(false)
    const divs = [];

    useEffect(() => {
        const bombDiv = Math.floor(Math.random() * 5)
        const bombPos = `${row}-${bombDiv}`
        setBombIndex(prev => ({ ...prev, [bombPos]: true }))
        console.log("🚀 ~ Game ~ bombIndex:", bombIndex)

    }, [row])

    const handleClick = (rowIndex, collIndex) => {




        // if (row === 6) {
        //     setTimeout(() => {
        //         alert('end')
        //     }, 1000)
        // }


        if (row === rowIndex) {
            const divPos = `${rowIndex}-${collIndex}`;
            const bombPos = `${row}-${bombDiv}`

            if (bombIndex[divPos]) {
                setGameOver(true);
            } else if (divPos !== bombPos) {
                setwinIndex(prev => ({ ...prev, [divPos]: true, }))
            }
            setRow(() => row + 1)
        }
    }



    // useEffect(() => {

    // }, [row])




    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        const innerDivs = []

        for (let collIndex = 0; collIndex < 4; collIndex++) {
            const divPos = `${rowIndex}-${collIndex}`;
            const clickedDiv = winIndex[divPos]
            const clckedDiv1 = bombIndex[divPos]

            innerDivs.push(<div key={collIndex} onClick={() => handleClick(rowIndex, collIndex)} className={styles.gridInnerDivs}>
                {clickedDiv ? <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFd-sRYfws70s7skdJL_AClKF3dChgTa6Qg&s"
                    className={styles.gridImage}
                /> : ''}
                {clckedDiv1 ? <img
                    src="https://www.shutterstock.com/image-vector/realistic-bomb-burning-fuse-emitting-600nw-2474308221.jpg"
                    className={styles.gridImage}
                /> : ''
                }
            </div>)
        }

        divs.push(<div key={rowIndex} className={styles.gridDivs}>{innerDivs}
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