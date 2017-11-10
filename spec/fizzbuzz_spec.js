describe ('fizzbuzz', function() {
  var game;

beforeEach(function() {
  game = new fizzbuzz();
});

  it 'returns "3" if a number is divisible by three' function(){
    expect(game.check(3)).toEqual('fizz')
  }

});
