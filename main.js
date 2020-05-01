const span = document.querySelector('.text');

const text = 'To opis, który przewija się w wielu rozmowach: wybitny prawnik, nieprzewidywalny człowiek, intelektualnie przerasta większość swojego środowiska. Ale od środka zżera go poczucie krzywdy i niedocenienia. Chociaż po otrzymaniu czwartkowej nominacji na pełniącego obowiązki pierwszego prezesa Sądu Najwyższego, Kamil Zaradkiewicz może na chwilę zapomnieć o krzywdzie.'


let indexText = 0;
const time = 50;

const addLetter = () => {
    span.textContent += text[indexText];
    indexText++;
    if(indexText === text.length) {
        clearInterval(index);
    }

}
const index = setInterval(addLetter, time);