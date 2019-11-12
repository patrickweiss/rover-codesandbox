import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("N");
      break;
    case "W":
      rover.direction = "S";
      console.log("S");
      break;
    case "S":
      rover.direction = "E";
      console.log("E");
      break;
    case "E":
      rover.direction = "N";
      console.log("E");
      break;
    default:
  }
  console.log("turnLeft was called!");
  console.log(JSON.stringify(rover));
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
  }
  console.log("turnLeft was called!");
  console.log(JSON.stringify(rover));
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "S":
      rover.y++;
      break;
    case "W":
      rover.x--;
      break;
    case "E":
      rover.x++;
      break;
    default:
  }
  if (rover.y < 0) rover.y = 0;
  if (rover.y > 9) rover.y = 9;
  if (rover.x < 0) rover.x = 0;
  if (rover.x > 9) rover.x = 9;

  rover.travelLog.push({ x: rover.x, y: rover.y });
  console.log("moveForward was called");
  console.log(JSON.stringify(rover));
}

function remoteControl(commands) {
  for (let command in commands) {
    console.log(command);
    switch (commands[command]) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      default:
    }
  }
}
remoteControl("rffrfflfrff");
