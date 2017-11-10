describe('fizzbuzz', function() {
  var game;

  beforeEach(function() {
    game = new fizzbuzz();
  });

  it('returns 15 if number is divisible by 15', function() {
    expect(game.check(15)).toEqual('fizzbuzz');
  });

  it('returns 3 if a number is divisible by 3', function() {
    expect(game.check(3)).toEqual('fizz');
  });

  it('returns 5 if number is divisible by 5', function() {
    expect(game.check(5)).toEqual('buzz');
  });
});
