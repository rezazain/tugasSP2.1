var motorcycle = {
  merk: "r6",
  weight: 190,
  color: "grey",
  speed: "600cc",
  gas: function () {
    return "drive ";
  },
  rem: function () {
    return "stop";
  },
};
document.write(" 4. (1) Motorcycle  " + motorcycle + "<br><br>");
document.write(" &nbsp " + "Merk : " + motorcycle.merk + "<br>");
document.write(" &nbsp " + " Weight : " + motorcycle.weight + "<br>");
document.write(" &nbsp " + "Color : " + motorcycle.color + "<br>");
document.write(" &nbsp " + "Speed : " + motorcycle.speed + "<br>");
document.write(" &nbsp " + "gas : " + motorcycle.gas() + "<br>");
document.write(" &nbsp " + "Rem : " + motorcycle.rem() + "<br><br>");

console.log(motorcycle);

var car = {
  merk: "Civic type R",
  weight: 1360,
  color: "red",
  speed: "2000cc",
  gas: function () {
    return "drive ";
  },
  rem: function () {
    return "stop";
  },
};
document.write(" &nbsp " + " (2) Car  " + car + "<br><br>");
document.write(" &nbsp " + "Merk : " + car.merk + "<br>");
document.write(" &nbsp " + "Weight : " + car.weight + "<br>");
document.write(" &nbsp " + "Color : " + car.color + "<br>");
document.write(" &nbsp " + "Speed : " + car.speed + "<br>");
document.write(" &nbsp " + "gas : " + car.gas() + "<br>");
document.write(" &nbsp " + "Rem : " + car.rem() + "<br><br>");

console.log(car);

var fan = {
  merk: "Panasonic",
  weight: 9,
  color: "white",
  propeller: function () {
    return "twirl";
  },
  fanButton: function () {
    return "set speed";
  },
};
document.write(" (3) Fan  " + fan + "<br><br>");
document.write(" &nbsp " + "Merk : " + fan.merk + "<br>");
document.write(" &nbsp " + "Weight : " + fan.weight + "<br>");
document.write(" &nbsp " + "Color : " + fan.color + "<br>");
document.write(" &nbsp " + "Propeller : " + fan.propeller() + "<br>");
document.write(" &nbsp " + "Fun button : " + fan.fanButton() + "<br><br>");

console.log(fan);

var bicycle = {
  merk: "polygon",
  weight: 15,
  color: "black",
  pedal: function () {
    return "drive";
  },
  rem: function () {
    return "stop ";
  },
};
document.write(" (4) bicycle  " + bicycle + "<br><br>");
document.write(" &nbsp " + "Merk : " + bicycle.merk + "<br>");
document.write(" &nbsp " + "Weight : " + bicycle.weight + "<br>");
document.write(" &nbsp " + "Color : " + bicycle.color + "<br>");
document.write(" &nbsp " + "Speed : " + bicycle.speed + "<br>");
document.write(" &nbsp " + "Pedal : " + bicycle.pedal() + "<br>");
document.write(" &nbsp " + "Rem : " + bicycle.rem() + "<br><br>");

console.log(bicycle);

var television = {
  merk: "samsung",
  weight: 13.5,
  color: "black",
  screen: function () {
    return "show movie image";
  },
  remote: function () {
    return "set up television";
  },
};
document.write(" (5) Television  " + television + "<br><br>");
document.write(" &nbsp " + "Merk : " + television.merk + "<br>");
document.write(" &nbsp " + "Weight : " + television.weight + "<br>");
document.write(" &nbsp " + "Color : " + television.color + "<br>");
document.write(" &nbsp " + "Screen : " + television.screen() + "<br>");
document.write(" &nbsp " + "Remote : " + television.remote() + "<br><br>");

console.log(television);

var laptop = {
  merk: "Asus rog",
  weight: "8",
  color: "black",
  screen: function () {
    return "show movie image";
  },
  keyboard: function () {
    return "type";
  },
};
console.log(laptop);
