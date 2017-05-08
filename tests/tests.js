var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0.0 C', function() {
        original.value = "32FC";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius");
    });
    test('45C = 113.0 F', function() {
        original.value = "45CF";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.00 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
