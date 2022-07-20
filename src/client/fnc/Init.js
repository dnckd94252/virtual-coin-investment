class Init {
  ScrollOpacity(start, end, scrollY) {
    const magnification = 7;
    const val =
      scrollY - start <= 100 * magnification
        ? (scrollY - start) / magnification
        : end - scrollY <= 100 * magnification
        ? (end - scrollY) / magnification
        : 100;
    return val <= 0 ? 0 : val >= 100 ? 100 : val;
  }

  TransformX(val, start, scrollY) {
    const range = 1000;
    const check = Math.sign(val) === 1 ? true : false;
    val = Math.abs(val);
    let value =
      scrollY >= start ? (((val / 100) * (scrollY - start)) / range) * 100 : 0;
    if (value > val) value = val;
    return check ? value : value * -1;
  }

  ChangeColor(arr, scrollY) {
    let val = "#fff";
    for (let i = 0; i < arr.length; i++) {
      const start = arr[i]["start"];
      const end = arr[i]["end"];
      if (scrollY < end && start <= scrollY) val = "#000";
    }
    return val;
  }

  TransformSlide(val, start, scrollY, range) {
    const check = Math.sign(val) === 1 ? true : false;
    val = Math.abs(val);
    let value =
      scrollY >= start ? (((val / 100) * (scrollY - start)) / range) * 100 : 0;
    if (value > val) value = val;

    return check ? value : value * -1;
  }

  TransformPercent(start, scrollY, range) {
    let value = scrollY >= start ? ((scrollY - start) / range) * 100 : 0;
    if(value <= 0) value = 0;
    if(value >= 100) value = 100;
    return value;
  }

  
}

export default new Init();
