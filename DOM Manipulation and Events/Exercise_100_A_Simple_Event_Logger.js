    let btn = document.getElementById("testBtn");
    let logDiv = document.getElementById("log");
    let events = ["click", "mouseover", "mouseout", "mousedown", "mouseup"];
    events.forEach(evt => {
      btn.addEventListener(evt, (e) => {
        let p = document.createElement("p");
        p.textContent = `${evt} at X:${e.clientX}, Y:${e.clientY}`;
        logDiv.appendChild(p);
      });
    });

