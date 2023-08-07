function christmasCountdown() {
    const christmasDate = new Date ("December, 25 2023 00:00");
    const now = new Date ();
    const diff = christmasDate - now;
    
    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;


if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
clearInterval(timerID);
merryChristmas();
}

}

let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "Merry Christmas HO HO HO!!!";
    heading.classList.add("red");
}

const button = document.querySelector("#myButton");
    button.addEventListener("click", function() {
        document.querySelector("#myAudio").play();
    })


    const shapeName = "snowflake";
    const deg = Math.PI / 180;
    
    function snowflake(c, n, len) {
      c.save();
      leg(n);
      c.rotate(-120 * deg);
      leg(n);
      c.rotate(-120 * deg);
      leg(n);
      c.closePath();
      c.restore();
    
      function leg(n) {
        c.save();
        if (n === 0) {
          c.lineTo(len, 0);
        } else {
          c.scale(1 / 3, 1 / 3);
          leg(n - 1);
          c.rotate(60 * deg);
          leg(n - 1);
          c.rotate(-120 * deg);
          leg(n - 1);
          c.rotate(60 * deg);
          leg(n - 1);
        }
        c.restore();
        c.translate(len, 0);
      }
    }
    
    tsParticles.addShape(shapeName, function (context, particle, radius) {
      snowflake(context, Math.floor(Math.random() * 3 + 2), radius);
    });
    
    tsParticles.load("tsparticles", {
      background: {
        color: 000000
      },
      particles: {
        color: {
          value: "#fff"
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: "out",
          speed: 4
        },
        number: {
          density: {
            enable: false,
            area: 800
          },
          value: 100
        },
        opacity: {
          value: 0.7
        },
        shape: {
          type: shapeName
        },
        size: {
          value: 20
        },
        wobble: {
          enable: true,
          distance: 10,
          speed: 10
        },
        zIndex: {
          value: {
            min: 0,
            max: 100
          }
        }
      }
    });
    