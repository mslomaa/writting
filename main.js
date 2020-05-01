// const span = document.querySelector('.text');

// const spnCursor = document.querySelector('.cursor')

// const text = ['test1', 'test2', 'test3'];


// let indexText = 0;
// const time = 550;

// const addLetter = () => {
//     span.textContent += text[indexText];
//     indexText++;
//     if(indexText === text.length) {
//         clearInterval(index);
//     }

// }

// const cursorAnimation = () => {
//     spnCursor.classList.toggle('active');

// }


// const index = setInterval(addLetter, time);

// setInterval(cursorAnimation, 400)

// const time = 50
// let textIndex = 0;

let activeLetter = -15;
let activeText = 0;

const spnText = document.querySelector('.text');

const spnCursor = document.querySelector('.cursor');

const text = ['test1', 'test2', 'test3'];

const addLetter = () => {
    if(activeLetter >= 0) {
        spnText.textContent += text[activeText][activeLetter];
    }
    
    activeLetter++;
    if(activeLetter === text[activeText].length){
        
        activeText++;
        if(activeText === text.length){
            return
        }
        return setTimeout(() => {
            activeLetter = -15;
            spnText.textContent = '';
            addLetter();
        }, 2000)
        
    }
    setTimeout(addLetter, 100)
}



addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);



// 'To opis, który przewija się w wielu rozmowach: wybitny prawnik, nieprzewidywalny człowiek, intelektualnie przerasta większość swojego środowiska. Ale od środka zżera go poczucie krzywdy i niedocenienia. Chociaż po otrzymaniu czwartkowej nominacji na pełniącego obowiązki pierwszego prezesa Sądu Najwyższego, Kamil Zaradkiewicz może na chwilę zapomnieć o krzywdzie.'