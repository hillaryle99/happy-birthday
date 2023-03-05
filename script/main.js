// Animation Timeline
const audio = document.getElementById("myAudio");

audio.addEventListener("ended", function() {
  this.currentTime = 0;
  this.play();
});

const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })

    .from(".nine1", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".a", 2.5, ideaTextTrans)
    // .to(".a", 1.2, ideaTextTransLeave, "+=1.5")
    // .from(".b", 0.3, ideaTextTrans)
    // .to(".b", 0.3, ideaTextTransLeave, "+=1.5")
    .to(
      ".nine1",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )

    .from(".nine2", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".c", 4.0, ideaTextTrans)
    // .to(".c", 1.0, ideaTextTransLeave, "+=1.5")
    .from(".d", 3.0, ideaTextTrans)
    // .to(".d", 1.0, ideaTextTransLeave, "+=1.5")
    .from(".e", 2.5, ideaTextTrans)
    // .to(".e", 1.0, ideaTextTransLeave, "+=1.5")
    .to(
      ".nine2",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )

    .from(".nine3", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".f", 4.0, ideaTextTrans)
    .from(".g", 4.0, ideaTextTrans)
    .from(".h", 2.0, ideaTextTrans)
    .to(
      ".nine3",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )

    .from(".nine4", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".i1", 1.2, ideaTextTrans)
    .to(".i1", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i2", 1.2, ideaTextTrans)
    .to(".i2", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i3", 1.2, ideaTextTrans)
    .to(".i3", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i4", 1.2, ideaTextTrans)
    .to(".i4", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i5", 1.2, ideaTextTrans)
    .to(".i5", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i6", 1.2, ideaTextTrans)
    .to(".i6", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i7", 1.2, ideaTextTrans)
    .to(".i7", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i8", 1.2, ideaTextTrans)
    .to(".i8", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i9", 1.2, ideaTextTrans)
    .to(".i9", 1.2, ideaTextTransLeave, "+=1.5")
    .from(".i10", 1.2, ideaTextTrans)
    .to(".i10", 1.2, ideaTextTransLeave, "+=1.5")
    .to(
      ".nine4",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )


    // .from(".nine4", 0.7, {
    //   scale: 0.2,
    //   opacity: 0
    // })
    // .from(".1", 0.7, ideaTextTrans)
    // .to(".1", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".2", 0.7, ideaTextTrans)
    // .to(".2", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".3", 0.7, ideaTextTrans)
    // .to(".3", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".4", 0.7, ideaTextTrans)
    // .to(".4", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".5", 0.7, ideaTextTrans)
    // .to(".5", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".6", 0.7, ideaTextTrans)
    // .to(".6", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".7", 0.7, ideaTextTrans)
    // .to(".7", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".8", 0.7, ideaTextTrans)
    // .to(".8", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".9", 0.7, ideaTextTrans)
    // .to(".9", 0.7, ideaTextTransLeave, "+=1.5")
    // .from(".10", 0.7, ideaTextTrans)
    // .to(".10", 0.7, ideaTextTransLeave, "+=1.5")
    // .to(
    //   ".nine4",
    //   0.5,
    //   {
    //     scale: 0.2,
    //     opacity: 0,
    //     y: -150
    //   },
    //   "+=0.7"
    // )

    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      Object.keys(data).map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());


