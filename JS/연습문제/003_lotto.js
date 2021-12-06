function getLottoNumbers() {
    let lottos = []
    
    while (lottos.length < 6) {
        let randNum = Math.floor(Math.random()*(46-1)+1);
        if (lottos.includes(randNum)) {
            continue
        } else {
            lottos.push(randNum);
        }
    }
    console.log(lottos.sort((a, b) => a - b));
}
