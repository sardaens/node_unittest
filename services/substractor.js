function substractor() {
    this.substract = function (numberA, numberB) {
        return  numberA - numberB;
    }
}

module.exports = new substractor();
