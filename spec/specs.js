describe('countUpBy', function() {
  it('will count to 3 by 1', function() {
    expect(countUpBy(3,1)).to.eql([1,2,3])
  });

  it('will count to 20 by 2', function() {
    expect(countUpBy(20,2)).to.eql([2,4,6,8,10,12,14,16,18,20])
  });

  it('will count to 50 by 7', function() {
    expect(countUpBy(50,7)).to.eql([7,14,21,28,35,42,49])
  });
});
