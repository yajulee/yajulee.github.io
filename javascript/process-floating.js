const stage = document.querySelector(".process-stage");
const items = document.querySelectorAll(".floating-item");

const objects = [];


/* 把 "15%" 轉成 0.15 */
function percentageToNumber(value) {
  return parseFloat(value) / 100;
}


/* 建立每一張 floating paper */
items.forEach((item, index) => {

  const styles = getComputedStyle(item);

  const xPercent = percentageToNumber(
    styles.getPropertyValue("--x")
  );

  const yPercent = percentageToNumber(
    styles.getPropertyValue("--y")
  );

  const itemWidth = item.offsetWidth;
  const itemHeight = item.offsetHeight;

  const availableWidth =
    Math.max(0, stage.clientWidth - itemWidth);

  const availableHeight =
    Math.max(0, stage.clientHeight - itemHeight);


  /* 初始位置 */
  const x = availableWidth * xPercent;
  const y = availableHeight * yPercent;


  const obj = {
    el: item,

    x: x,
    y: y,

    /* 很慢的漂浮速度 */
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.12,

    /* 每個 folder 都有自己的暫停狀態 */
    paused: false
  };


  objects.push(obj);


  /* 保留 HTML 原本的前後順序 */
  item.style.zIndex = index + 1;


  /* -------------------------
     HOVER：停住這一張
     ------------------------- */

  item.addEventListener("mouseenter", () => {
    obj.paused = true;
    item.classList.add("is-hovered");
  });


  item.addEventListener("mouseleave", () => {
    obj.paused = false;
    item.classList.remove("is-hovered");
  });

});



function animate() {

  const stageWidth = stage.clientWidth;
  const stageHeight = stage.clientHeight;


  objects.forEach((obj) => {

    const width = obj.el.offsetWidth;
    const height = obj.el.offsetHeight;


    /*
      只有沒有 hover 的 folder 才繼續移動
    */
    if (!obj.paused) {
      obj.x += obj.vx;
      obj.y += obj.vy;
    }


    /* LEFT */
    if (obj.x <= 0) {
      obj.x = 0;
      obj.vx = Math.abs(obj.vx);
    }


    /* RIGHT */
    if (obj.x + width >= stageWidth) {
      obj.x = stageWidth - width;
      obj.vx = -Math.abs(obj.vx);
    }


    /* TOP */
    if (obj.y <= 0) {
      obj.y = 0;
      obj.vy = Math.abs(obj.vy);
    }


    /* BOTTOM */
    if (obj.y + height >= stageHeight) {
      obj.y = stageHeight - height;
      obj.vy = -Math.abs(obj.vy);
    }


    obj.el.style.transform =
      `translate3d(${obj.x}px, ${obj.y}px, 0)`;

  });


  requestAnimationFrame(animate);
}


animate();



/* resize 後確保 folder 不會跑出畫面 */
window.addEventListener("resize", () => {

  objects.forEach((obj) => {

    const maxX =
      Math.max(0, stage.clientWidth - obj.el.offsetWidth);

    const maxY =
      Math.max(0, stage.clientHeight - obj.el.offsetHeight);


    obj.x = Math.min(Math.max(obj.x, 0), maxX);
    obj.y = Math.min(Math.max(obj.y, 0), maxY);

  });

});