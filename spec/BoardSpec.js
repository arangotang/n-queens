describe('Board', function() {

  describe('Empty board', function() {
    let matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    let board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(false);
    });

    it('should not find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(false);
    });
  });

  describe('Board with row conflicts', function() {
    let matrix = [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    let board = new Board(matrix);

    it('should find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(true);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(true);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });
  });

  describe('Board with col conflicts', function() {
    let matrix = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    let board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(true);
    });

    it('should find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(true);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });
  });

  describe('Board with major diagonal conflicts', function() {
    let matrix = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 0, 0]
    ];
    let board = new Board(matrix);

    it('should  find a diagonal conflict at col 1, row 1', function() {
      expect(board.hasMajorDiagonalConflictAt(1)).to.be.equal(true);
    });

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(true);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(true);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });

    matrix = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0]
    ];
    board = new Board(matrix);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(true);
    });

    it('should not find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(true);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });
  });

  describe('Board with minor diagonal conflicts', function() {
    let matrix1 = [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1]
    ];
    let board1 = new Board(matrix1);

    it('should find a row conflict', function() {
      debugger;
      expect(board1.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should find a col conflict', function() {
      expect(board1.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should find a rooks conflict', function() {
      expect(board1.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should find not a majorDiagonal conflict', function() {
      expect(board1.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a minorDiagonal conflict', function() {
      expect(board1.hasAnyMinorDiagonalConflicts()).to.be.equal(true);
    });

    it('should find a queens conflict', function() {
      expect(board1.hasAnyQueensConflicts()).to.be.equal(true);
    });

    matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1]
    ];
    board = new Board(matrix1);

    it('should not find a row conflict', function() {
      expect(board.hasAnyRowConflicts()).to.be.equal(false);
    });

    it('should not find a col conflict', function() {
      expect(board.hasAnyColConflicts()).to.be.equal(false);
    });

    it('should not find a rooks conflict', function() {
      expect(board.hasAnyRooksConflicts()).to.be.equal(false);
    });

    it('should not find a majorDiagonal conflict', function() {
      expect(board.hasAnyMajorDiagonalConflicts()).to.be.equal(false);
    });

    it('should find a minorDiagonal conflict', function() {
      expect(board.hasAnyMinorDiagonalConflicts()).to.be.equal(true);
    });

    it('should find a queens conflict', function() {
      expect(board.hasAnyQueensConflicts()).to.be.equal(true);
    });
  });
});
