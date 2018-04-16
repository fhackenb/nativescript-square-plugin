var SquarePlugin = require("nativescript-square-plugin").SquarePlugin;
var squarePlugin = new SquarePlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(squarePlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(squarePlugin.greet()).toEqual("Hello, NS");
    });
});