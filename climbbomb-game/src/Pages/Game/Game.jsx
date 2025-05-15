import React, { useEffect, useState } from 'react';
import styles from './Game.module.css';

function Game() {
    const [divIndex, setDivIndex] = useState({});
    const [random, setRandom] = useState(null);
    const [row, setRow] = useState(6);
    const [disable, setDisable] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [inputPoints, setInputPoints] = useState(0);
    const [winPoints, setWinPoints] = useState(0);
    const [multiplier, setMultiplier] = useState(1.2);
    const [myPoints, setMyPoints] = useState(100);

    const handleStart = () => {
        if (inputPoints <= myPoints && inputPoints > 0 && gameStart === false) {
            setGameStart(!gameStart);
            setMyPoints(Number((myPoints - inputPoints).toFixed(2)));
        } else if (gameStart === true) {
            alert('You Win. Good Luck');
            setDisable(false);
            setRow(6);
            setDivIndex({});
            setGameStart(false);
            setMyPoints(winPoints);
            setMultiplier(1.2);
        } else {
            alert('Please enter a valid amount');
        }
    };
    const handleClick = (rowIndex, collIndex) => {
        if (gameStart) {
            if (row === rowIndex) {
                const index = `${rowIndex}-${collIndex}`;

                if (collIndex === random) {
                    setDivIndex((prev) => ({ ...prev, [index]: false }));
                    setDisable(true);
                    setTimeout(() => {
                        alert('Boom You Lose');
                        setDisable(false);
                        setRow(6);
                        setDivIndex({});
                        setGameStart(false);
                        setMultiplier(1.2);
                    }, 1000);
                } else {
                    setDivIndex((prev) => ({ ...prev, [index]: true }));
                    const multiNum = myPoints + inputPoints * multiplier;
                    setMultiplier((multiplier * 1.2).toFixed(2));
                    const fixed = Number(multiNum.toFixed(2));
                    setWinPoints(fixed);
                }

                if (collIndex !== random) {
                    setRow(row - 1);
                }
            }
        }
    };

    useEffect(() => {
        setRandom(Math.floor(Math.random() * 4));

        if (row === 0) {
            setDisable(true);

            setTimeout(() => {
                alert('You Win. Good Luck');
                setDisable(false);
                setRow(6);
                setDivIndex({});
                setGameStart(false);
                setMyPoints(winPoints);
                setMultiplier(1);
            }, 1000);
        }
    }, [row]);

    const divs = [];
    for (let rowIndex = 1; rowIndex < 7; rowIndex++) {
        const innerDivs = [];

        for (let collIndex = 0; collIndex < 4; collIndex++) {
            const divpos = `${rowIndex}-${collIndex}`;
            const clickedDiv = divIndex[divpos];

            innerDivs.push(
                <div
                    key={collIndex}
                    onClick={() => !disable && handleClick(rowIndex, collIndex)}
                    className={styles.gridInnerDivs}
                >
                    {clickedDiv === true ? (
                        <img
                            className={styles.gridImage}
                            src='https://png.pngtree.com/png-vector/20250322/ourmid/pngtree-golden-stone-shiny-with-metallic-texture-clipart-vector-illustration-png-image_15847279.png'
                        ></img>
                    ) : (
                        ''
                    )}

                    {clickedDiv === false ? (
                        <img
                            className={styles.gridImage}
                            src='https://cdn3d.iconscout.com/3d/premium/thumb/bomb-3d-icon-download-in-png-blend-fbx-gltf-file-formats--grenade-explosive-dynamite-boom-weapon-game-elements-pack-sports-games-icons-5307776.png'
                        ></img>
                    ) : (
                        ''
                    )}
                </div>
            );
        }

        divs.push(
            <div key={rowIndex} className={styles.gridDivs}>
                {innerDivs}
            </div>
        );
    }

    return (
        <>
            <div className={styles.mainDiv}>
                <div>
                    <h1>Climb Tower</h1>
                    <div>
                        <h2>${myPoints}</h2>
                        <h1>multiplier: {multiplier}x</h1>
                    </div>
                    <div className={styles.inputBox}>
                        <input
                            type='number'
                            onChange={(e) => setInputPoints(e.target.value)}
                        />
                        <button onClick={handleStart}>
                            {gameStart === false ? 'Start' : 'End'}
                        </button>
                    </div>
                </div>

                <div className={styles.mainGridDiv}>{divs}</div>
            </div>
        </>
    );
}

export default Game;
