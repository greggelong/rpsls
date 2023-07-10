let rps = ["🗿", "📃", "✂️", "🖖", "🦎"];

class RpsAgent {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.kind = floor(random(5));
    this.spx = random(-5, 5);
    this.spy = random(-5, 5);
  }
  move() {
    this.x += this.spx;
    this.y += this.spy;
  }

  edges() {
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
  }
  show() {
    text(rps[this.kind], this.x, this.y);
  }

  hit(other) {
    // check if this one is hitting any other one

    let d = dist(this.x, this.y, other.x, other.y);

    if (d < 40) {
        // change direction if not equal to itself
     // if (this != other){
     //   this.spx = random(-5,5);
     //   this.spy = random(-5,5)
     // }
      // it's simple
      // case rock
      if (this.kind == 0) {
        // if other is paper paper covers rock
        if (other.kind == 1) {
          this.kind = 1; // change to paper
        }
        // if the other spock, spock vaporizes rock
        else if (other.kind == 3) {
          this.kind = 3; // change to spock
        }
      }
      // case paper
      else if (this.kind == 1) {
        // if other is scissors, scissors cuts paper
        if (other.kind == 2) {
          this.kind = 2; // change to scissors
        }
        // if the other is lizard, lizard eats paper
        else if (other.kind == 4) {
          this.kind = 4; // change to lizard
        }
      }
      // case scissors
      else if (this.kind == 2) {
        // if other is rock, rock breaks scissors
        if (other.kind == 0) {
          this.kind = 0; // change to rock
        }
        // if the other is spock spock breaks scissors
        else if (other.kind == 3) {
          this.kind = 3; // change to spock
        }
      }
      // case spock
      else if (this.kind == 3) {
        // if other is paper, paper disproves spock
        if (other.kind == 1) {
          this.kind = 1; // change to paper
        }
        // if the other is lizard, lizard poisons spock
        else if (other.kind == 4) {
          this.kind = 4; // change to spock
        }
      }
      // case lizard
      else if (this.kind == 4) {
        // if other is rock, rock crushes lizard
        if (other.kind == 0) {
          this.kind = 0; // change to paper
        }
        // if the other is scissors, scissors kills lizard
        else if (other.kind == 2) {
          this.kind = 2; // change to spock
        }
      }
    }
  }
}
