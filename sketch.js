let agents= []

function setup() {
  createCanvas(800,800);
  frameRate(30);
  textSize(40)
  textAlign(CENTER)
  for (let i =0; i<30; i++){
    agents[i]= new RpsAgent(random(width),random(height));
    
  }
}

function draw() {
  background(220);
  for(let i=0;i<agents.length;i++){
    agents[i].move()
    agents[i].edges()
    agents[i].show()
    for (let j =0;j<agents.length;j++){
      agents[i].hit(agents[j])
    }
    }
}