let lang = 0;

let level = 1;
let levelUG = 1;
let attempts = 5;
let maxatt = 5;
let scores = 0;
let combo = 0;
let supercombo = false;
let scc = 0;
let isPause = false;
let isBlocked = false;
let shadow1 = 0;
let shadow2 = 0;
let record = 0;

let an = 0;

if (localStorage.getItem('lang') !== null) {
    lang = localStorage.getItem('lang');
}

if (localStorage.getItem('level') !== null) {
    level = localStorage.getItem('level');
}

if (localStorage.getItem('levelUG') !== null) {
    levelUG = localStorage.getItem('levelUG');
}

if (localStorage.getItem('attempts') !== null) {
    attempts = localStorage.getItem('attempts');
}

if (localStorage.getItem('maxatt') !== null) {
    maxatt = localStorage.getItem('maxatt');
}

if (localStorage.getItem('scores') !== null) {
    scores = localStorage.getItem('scores');
}

if (localStorage.getItem('combo') !== null) {
    combo = localStorage.getItem('combo');
}

if (localStorage.getItem('supercombo') !== null) {
    supercombo = localStorage.getItem('supercombo');
}

if (localStorage.getItem('scc') !== null) {
    scc = localStorage.getItem('scc');
}

if (localStorage.getItem('shadow1') !== null) {
    shadow1 = localStorage.getItem('shadow1');
}

if (localStorage.getItem('shadow2') !== null) {
    shadow2 = localStorage.getItem('shadow2');
}

if (localStorage.getItem('record') !== null) {
    record = localStorage.getItem('record');
}

let homeS = document.querySelector('.scenes > .home');
let playS = document.querySelector('.scenes > .play');
let loseS = document.querySelector('.scenes > .lose');
let setsS = document.querySelector('.scenes > .settings');

let nowS = homeS;

let homeB1 = document.querySelector('.scenes > .home > .buttons > button:nth-child(1)');
let homeB2 = document.querySelector('.scenes > .home > .buttons > button:nth-child(2)');
let playB1 = document.querySelector('.scenes > .play > .head > button:nth-child(1)');
let playB2 = document.querySelector('.scenes > .play > .head > button:nth-child(2)');
let loseB1 = document.querySelector('.scenes > .lose > .buttons > button:nth-child(1)');
let loseB2 = document.querySelector('.scenes > .lose > .buttons > button:nth-child(2)');

let gameL = document.querySelector('.scenes > .play > .layout');
let gameC = document.querySelector('.scenes > .play > .layout > .game');
let gameS1 = document.querySelector('.scenes > .play > .layout > .scores > h1');
let gameS2 = document.querySelector('.scenes > .play > .layout > .scores > h2');
let gameS3 = document.querySelector('.scenes > .play > .layout > .scores > h3');
let gameS4 = document.querySelector('.scenes > .play > .layout > .scores > .lives');
let gameS5 = document.querySelector('.scenes > .play > .layout > .scores > .record > h2');
let gameM =  document.querySelector('.scenes > .play > .modal');
let gameMS1 = document.querySelector('.scenes > .play > .modal > h1');
let gameMS2 = document.querySelector('.scenes > .play > .modal > img');
let gameMS3 = document.querySelector('.scenes > .play > .modal > h2');
let gameMS4 = document.querySelector('.scenes > .play > .modal > button');
let gameMS5 = document.querySelector('.scenes > .play > .modal > p');
let gameMS6 = document.querySelector('.scenes > .play > .modal > h3');
let gameP =  document.querySelector('.scenes > .play > .pause');
let gameP1 =  document.querySelector('.scenes > .play > .pause > h1');
let gameP2 =  document.querySelector('.scenes > .play > .pause > .buttons > button:nth-child(1)');
let gameP3 =  document.querySelector('.scenes > .play > .pause > .buttons > button:nth-child(2)');
let gameP4 =  document.querySelector('.scenes > .play > .pause > .buttons > button:nth-child(3)');
let setsS1 = document.querySelector('.scenes > .settings > .title > h1');
let setsS2 = document.querySelector('.scenes > .settings > .head > button');
let setsS3 = document.querySelector('.scenes > .settings > .content > .language > h2');
let setsS4 = document.querySelector('.scenes > .settings > .content > .language > button');
let setsS5 = document.querySelector('.scenes > .settings > .content > .links > h2');
let setsS6 = document.querySelector('.scenes > .settings > .content > .links > button');

let loseT = document.querySelector('.scenes > .lose > .title > h1');
let loseRT = document.querySelector('.scenes > .lose > .results > .scores > h2');
let loseRP = document.querySelector('.scenes > .lose > .results > .scores > h1');

document.oncontextmenu = () => {
    return false;
}

function tlf(lang) {
    if (lang == 0) {
        tl = lexRU;
    } else if (lang == 1) {
        tl = lexEN;
    }
    document.title = tl[0];
    homeB1.innerHTML = tl[1];
    homeB2.innerHTML = tl[2];
    playB1.innerHTML = tl[3];
    playB2.innerHTML = tl[4];
    loseT.innerHTML = tl[16];
    loseRT.innerHTML = tl[17];
    loseB1.innerHTML = tl[18];
    loseB2.innerHTML = tl[19];
    setsS1.innerHTML = tl[22];
    setsS2.innerHTML = tl[3];
    setsS3.innerHTML = tl[23];
    setsS4.innerHTML = tl[24];
    setsS5.innerHTML = tl[25];
}

function scSwitch(fs, ss) {
    fs.style.display = 'none';
    ss.style.display = 'block';
    nowS = ss;
}

function lose() {
    isBlocked = true;
    if (an == 0) {
        let oldsc = scores;
        level = 1;
        levelUG = 1;
        attempts = 5;
        maxatt = 5;
        scores = 0;
        combo = 0;
        supercombo = false;
        scc = 0;
        isPause = false;
        an = 1;
        let audio = new Audio('lose.mp3');
        audio.play();
        gameC.style.transform = 'scale(1.2)';
        setTimeout(() => {
            gameC.style.transform = 'scale(0)';
        }, 300);
        setTimeout(() => {
            scSwitch(nowS, loseS);
            let sc = 0;
            let intr2 = setInterval(() => {
                sc++;
                loseRP.innerHTML = sc;
                if (sc >= oldsc) {
                    level = 1;
                    levelUG = 1;
                    attempts = 5;
                    maxatt = 5;
                    scores = 0;
                    combo = 0;
                    supercombo = false;
                    scc = 0;
                    isPause = false;
                    clearInterval(intr2);
                }
            }, 10 / oldsc);
        }, 1000);
        setTimeout(() => {
            loseB1.style.opacity = 1;
            loseB2.style.opacity = 1;
            loseB1.onclick = () => {
                isBlocked = false;
                gameC.style.transform = 'scale(1)';
                loseRP.innerHTML = '0';
                loseB1.style.opacity = 0;
                loseB2.style.opacity = 0;
                level = 1;
                levelUG = 1;
                attempts = 5;
                maxatt = 5;
                scores = 0;
                combo = 0;
                supercombo = false;
                scc = 0;
                scSwitch(nowS, playS);
                gameS(level, attempts, scores, combo);
            }
            loseB2.onclick = () => {
                isBlocked = false;
                gameC.style.transform = 'scale(1)';
                loseRP.innerHTML = '0';
                loseB1.style.opacity = 0;
                loseB2.style.opacity = 0;
                level = 1;
                levelUG = 1;
                attempts = 5;
                maxatt = 5;
                scores = 0;
                combo = 0;
                supercombo = false;
                scc = 0;
                isPause = false;
                scSwitch(nowS, homeS);
            }
        }, 2500);
    }
}

function colorG(l) {
    let rndm1 = Math.floor(Math.random() * Math.pow(l + 1, 2));

    let clrs1 = [
        [255, 0, 0],
        [255, 135, 0],
        [255, 211, 0],
        [222, 255, 10],
        [161, 255, 10],
        [10, 255, 153],
        [10, 239, 255],
        [20, 125, 245],
        [88, 10, 255],
        [190, 10, 255]
    ];

    let clrs2 = [
        [255, 100, 100],
        [255, 155, 20],
        [255, 255, 50],
        [255, 255, 60],
        [211, 255, 60],
        [60, 255, 203],
        [90, 255, 255],
        [70, 175, 255],
        [98, 30, 255],
        [255, 100, 255]
    ];

    let clr = Math.floor(Math.random() * 9);

    return [rndm1, clrs1[clr], clrs2[clr]];
}

function resW() {
    gameS1.innerHTML = new Intl.NumberFormat("de-DE").format(scores);
    gameS2.innerHTML = `${tl[5]} ${level}`;
    if (combo > 1) {
        gameS3.innerHTML = `${tl[6]} x${combo}`;
    } else {
        gameS3.innerHTML = '⠀';
    }
    gameS5.innerHTML = '<img src="crown.png"> ' + new Intl.NumberFormat("de-DE").format(record);
}

function lB() {
    if (level == 5) {
        levelUG = 2;
    } else if (level == 10) {
        levelUG = 3;
    } else if (level == 20) {
        levelUG = 4;
    } else if (level == 35) {
        levelUG = 5;
    } else if (level == 55) {
        levelUG = 6;
    } else if (level == 80) {
        levelUG = 7;
    } else if (level == 110) {
        levelUG = 8;
    } else if (level == 145) {
        levelUG = 9;
    } else if (level == 195) {
        levelUG = 10;
    } else if (level == 240) {
        levelUG = 11;
    } else if (level == 300) {
        levelUG = 12;
    }
}

function gameS(l, a, s, c) {
    an = 0;
    resW();
    livesL();
    roundL(l, a, s, c);
    shadow(shadow1, shadow2);
}

function livesL() {
    if (!isBlocked) {
        gameS4.innerHTML = '';
        for (let i = 0; i < attempts; i++) {
            gameS4.innerHTML += '<img src="heart.png">';
        }
        for (let i = 0; i < maxatt - attempts; i++) {
            gameS4.innerHTML += '<img src="heart-die.png">';
        }
    }
}

function shadow(type, s) {
    if (s > 100) {
        s = 100;
    }
    if (type == 0) {
        gameL.style.boxShadow = 'none';
    } else if (type == 1) {
        gameL.style.boxShadow = `0 0 ${s}px inset #0AEFFF`;
    } else if (type == 2) {
        gameL.style.boxShadow = `0 0 ${s}px inset #FF0000`;
    } else if (type == 3) {
        gameL.style.boxShadow = `0 0 ${s}px inset #0AFF99`;
    } else if (type == 4) {
        gameL.style.boxShadow = `0 0 ${s}px inset #BE0AFF`;
    }
    shadow1 = type;
    shadow2 = s;
}

function comboplus() {
    let clrs = [
        [255, 0, 0],
        [255, 135, 0],
        [255, 211, 0],
        [222, 255, 10],
        [161, 255, 10],
        [10, 255, 153],
        [10, 239, 255],
        [20, 125, 245],
        [88, 10, 255],
        [190, 10, 255]
    ];
    let clrsT = [
        [255, 255, 255],
        [255, 255, 255],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255]
    ];
    if (combo >= 2 && combo < 11) {
        gameS3.style.background = `rgb(${clrs[combo - 2][0]}, ${clrs[combo - 2][1]}, ${clrs[combo - 2][2]})`;
        gameS3.style.color = `rgb(${clrsT[combo - 2][0]}, ${clrsT[combo - 2][1]}, ${clrsT[combo - 2][2]})`;
        gameS3.style.opacity = 1;
        gameS3.style.transform = 'scale(1.3)';
        setTimeout(() => {
            gameS3.style.transform = 'scale(1.1)';
            setTimeout(() => {
                gameS3.style.transform = 'scale(1.0)';
                setTimeout(() => {
                    gameS3.style.opacity = 0;
                }, 200); 
            }, 200);
        }, 200);
        let audio = new Audio(`c${combo - 1}.mp3`);
        audio.play();
    } else if (combo >= 11) {
        gameS3.style.background = `rgb(${clrs[9][0]}, ${clrs[9][1]}, ${clrs[9][2]})`;
        gameS3.style.color = `rgb(${clrsT[9][0]}, ${clrsT[9][1]}, ${clrsT[9][2]})`;
        gameS3.style.opacity = 1;
        gameS3.style.transform = 'scale(1.3)';
        setTimeout(() => {
            gameS3.style.transform = 'scale(1.1)';
            setTimeout(() => {
                gameS3.style.transform = 'scale(1.0)';
                setTimeout(() => {
                    gameS3.style.opacity = 0;
                }, 200); 
            }, 200);
        }, 200);
        let audio = new Audio('c10.mp3');
        audio.play();
    }
}

function chance1() {
    attempts = maxatt;
    livesL();
    shadow(2, 100);
    setTimeout(() => {
        shadow(1, (combo + 1) * 10);
    }, 1000);
    let audio = new Audio('s1.mp3');
    audio.play();
    modalC();
}

function chance2() {
    supercombo = true;
    shadow(3, 100);
    let audio = new Audio('s1.mp3');
    audio.play();
    modalC();
}

function chance3() {
    scores *= 5;
    resW();
    shadow(4, 100);
    setTimeout(() => {
        shadow(1, (combo + 1) * 10);
    }, 1000);
    let audio = new Audio('s1.mp3');
    audio.play();
    modalC();
}

function modal() {
    if (!isBlocked) {
        let rndm = Math.floor(Math.random() * 3);
        if (rndm == 0) {
            gameM.setAttribute('class', 'modal modal-active');
            gameMS1.innerHTML = tl[7];
            gameMS2.setAttribute('src', 'b1.png');
            gameMS3.innerHTML = tl[10];
            gameMS4.innerHTML = tl[8];
            gameMS5.innerHTML = tl[9];
            gameMS6.innerHTML = tl[11];
            setTimeout(() => {
                gameMS5.style.display = 'block';
            }, 3000);
            gameMS4.onclick = () => {
                chance1();
            }
            gameMS5.onclick = () => {
                modalC();
            }
            gameM.style.transform = 'scale(0)';
            setTimeout(() => {
                gameM.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    gameM.style.transform = 'scale(1)';
                }, 300);
            }, 100);
        } else if (rndm == 1) {
            gameM.setAttribute('class', 'modal modal-active');
            gameMS1.innerHTML = tl[7];
            gameMS2.setAttribute('src', 'b2.png');
            gameMS3.innerHTML = tl[12];
            gameMS4.innerHTML = tl[8];
            gameMS5.innerHTML = tl[9];
            gameMS6.innerHTML = tl[13];
            setTimeout(() => {
                gameMS5.style.display = 'block';
            }, 3000);
            gameMS4.onclick = () => {
                chance2();
            }
            gameMS5.onclick = () => {
                modalC();
            }
            gameM.style.transform = 'scale(0)';
            setTimeout(() => {
                gameM.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    gameM.style.transform = 'scale(1)';
                }, 300);
            }, 100);
        } else if (rndm == 2) {
            gameM.setAttribute('class', 'modal modal-active');
            gameMS1.innerHTML = tl[7];
            gameMS2.setAttribute('src', 'b3.png');
            gameMS3.innerHTML = tl[14];
            gameMS4.innerHTML = tl[8];
            gameMS5.innerHTML = tl[9];
            gameMS6.innerHTML = tl[15];
            setTimeout(() => {
                gameMS5.style.display = 'block';
            }, 3000);
            gameMS4.onclick = () => {
                chance3();
            }
            gameMS5.onclick = () => {
                modalC();
            }
            gameM.style.transform = 'scale(0)';
            setTimeout(() => {
                gameM.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    gameM.style.transform = 'scale(1)';
                }, 300);
            }, 100);
        }
    }
}

function modalC() {
    gameM.style.transform = 'scale(1.2)';
    setTimeout(() => {
        gameM.style.transform = 'scale(0)';
        setTimeout(() => {
            gameM.setAttribute('class', 'modal modal-notactive');
            gameMS2.setAttribute('src', '');
            gameMS3.innerHTML = '';
            gameMS4.innerHTML = '';
            gameMS5.innerHTML = '';
            gameMS5.style.display = 'none';
        }, 300);
    }, 100);
}

function gameN(st) {
    if (st) {
        let audio = new Audio('pop.mp3');
        audio.play();
        sc = 0; 
        level++;
        if (!(level % 10)) {
            setTimeout(() => {
                modal();
            }, 150);
        }
        if (!supercombo) {
            shadow(1, (combo + 1) * 10);
        }
        lB();
        combo++;
        comboplus();
        let asccc = false;
        let intr = setInterval(() => {
            if (!supercombo) {
                scores += 1;
            } else {
                scores += combo;
                if (!asccc) {
                    asccc = true;
                    scc += 1;
                }
                if (scc == 5) {
                    scc = 0;
                    supercombo = false;
                    shadow(1, (combo + 1) * 10);
                }
            }
            sc += 1;
            resW();
            if (sc >= combo) {
                clearInterval(intr);
            }
        }, 200 / combo);
        roundL(level, attempts, scores, combo);
    } else {
        attempts--;
        livesL();
        if (attempts <= 0) {
            lose();
        } else {
            combo = 0;
            if (!supercombo) {
                shadow(0, 0);
            }
            let audio = new Audio('cb.mp3');
            audio.play();
            resW();
            roundL(level, attempts, scores, combo);
        }
    }
}

function roundL(l, a, s, c) {
    if (!isBlocked) {
        gameC.innerHTML = '';
        let clrs = colorG(levelUG);
        for (let i = 0; i < Math.pow(levelUG + 1, 2); i++) {
            let b = document.createElement('button');
            b.style.width = 100 / (levelUG + 1) + '%';
            b.style.height = 100 / (levelUG + 1) + '%';
            if (clrs[0] == i) {
                b.style.background = `rgb(${clrs[2][0]}, ${clrs[2][1]}, ${clrs[2][2]})`;
                b.onclick = () => {
                    gameN(true);
                }
            } else {
                b.style.background = `rgb(${clrs[1][0]}, ${clrs[1][1]}, ${clrs[1][2]})`;
                b.onclick = () => {
                    gameN(false);
                }
            }
            gameC.appendChild(b);
            setTimeout(() => {
                b.style.transform = 'scale(0.8)';
            }, 300);
        }
    }
}

function pause() {
    gameP.setAttribute('class', 'pause pause-active');
    gameP1.innerHTML = tl[21];
    gameP2.innerHTML = tl[19];
    gameP3.innerHTML = tl[18];
    gameP4.innerHTML = tl[20];
    gameP2.onclick = () => {
        scSwitch(nowS, homeS);
    }
    gameP3.onclick = () => {
        isBlocked = false;
        gameC.style.transform = 'scale(1)';
        loseRP.innerHTML = '0';
        loseB1.style.opacity = 0;
        loseB2.style.opacity = 0;
        level = 1;
        levelUG = 1;
        attempts = 5;
        maxatt = 5;
        scores = 0;
        combo = 0;
        supercombo = false;
        scc = 0;
        isPause = false;
        gameS(level, attempts, scores, combo);
        pauseC();
        shadow(0, 0);
    }
    gameP4.onclick = () => {
        isBlocked = false;
        pauseC();
    }
    gameP.style.transform = 'scale(0)';
    setTimeout(() => {
        gameP.style.transform = 'scale(1.2)';
        setTimeout(() => {
            gameP.style.transform = 'scale(1)';
        }, 300);
    }, 100);
}

function pauseC() {
    gameP.style.transform = 'scale(1.2)';
    setTimeout(() => {
        gameP.style.transform = 'scale(0)';
    }, 100);
}

homeB1.onclick = () => {
    scSwitch(homeS, playS);
    gameS(level, attempts, scores, combo);
}

homeB2.onclick = () => {
    scSwitch(homeS, setsS);
}

playB1.onclick = () => {
    scSwitch(nowS, homeS);
}

setsS2.onclick = () => {
    scSwitch(nowS, homeS);
}

playB2.onclick = () => {
    pause();
}

setsS4.onclick = () => {
    if (lang == 0) {
        lang = 1;
        tlf(lang);
    } else {
        lang = 0;
        tlf(lang);
    }
}

setsS6.onclick = () => {
    window.open('https://t.me/+3V6t4cfv_hViODk6');
}

setInterval(() => {
    localStorage.setItem('lang', Number(lang));
    localStorage.setItem('level', Number(level));
    localStorage.setItem('levelUG', Number(levelUG));
    localStorage.setItem('attempts', Number(attempts));
    localStorage.setItem('maxatt', Number(maxatt));
    localStorage.setItem('scores', Number(scores));
    localStorage.setItem('combo', Number(combo));
    localStorage.setItem('supercombo', JSON.parse(supercombo));
    localStorage.setItem('scc', Number(scc));
    localStorage.setItem('shadow1', Number(shadow1));
    localStorage.setItem('shadow2', Number(shadow2));
    localStorage.setItem('record', Number(record));
    level = parseInt(level);
    levelUG = parseInt(levelUG);
    attempts = parseInt(attempts);
    maxatt = parseInt(maxatt);
    scores = parseInt(scores);
    combo = parseInt(combo);
    supercombo = JSON.parse(supercombo);
    scc = parseInt(scc);
    shadow1 = parseInt(shadow1);
    shadow2 = parseInt(shadow2);
    record = parseInt(record);
    if (scores > record) {
        record = scores;
        gameS5.innerHTML = '<img src="crown.png"> ' + new Intl.NumberFormat("de-DE").format(record);
    }
}, 10);

function main() {
    tlf(lang);
}

main();