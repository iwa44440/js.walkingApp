'use strict';
{
  function callback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classlist.add("appear");
      console.log(entry.target);
      obs.unobserve(entry.target);
    });
  }
  const option ={
    threshold:0.2,
  };
  const observer = new IntersectionObserver(callback, option);
  const targets = document.querySelectorAll(".animate");
  targets.forEach(target =>{
    observer.observe(target);
  });
}