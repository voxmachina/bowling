describe("Bowling", function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("should return an object", function() {
    expect(typeof(bowling) == 'object').toBe(true);
  });

  it("defines the total of frames to 10", function() {
    expect(bowling.getTotalFrames() == 10).toBe(true);
  });

  describe("Methods", function() {

    describe("#getTotalFrames", function() {
      it("returns 10", function() {
        expect(bowling.getTotalFrames() == 10).toBe(true);
      });
    });

  });
});
