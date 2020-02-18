var adder = require('../../services/adder');

describe("adder tests ", function() {
    var _numberA;
    var _numberB;

    it("should return numberA add to numberB", function() {
        _numberA = 6;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);

        expect(result).toEqual(8);
    });
});
