  let moj_guzik
  moj_guzik = document.getElementById('test-button')
  moj_guzik.addEventListener('click', function(){
     const links = document.querySelectorAll('.titles a');
     console.log('NA CLICK links:', links);
  })

  const links_zawsze = document.querySelectorAll('.titles a');
  // console.log('ZAWSZE links:', links_zawsze);

// usuniecie klasy activ ze wszystkich ktore nie sa klikniete
  for (const element of links_zawsze) {
    element.classList.remove('active');
    console.log("NOT ACTIVE: " +  element + element.classList);
  }

  for (const activ of links_zawsze) {
    // activ.classList.add('active');
    // console.log("ACTIVE: " + element + element.classList);

//   for (const element of links_zawsze) {
//     element.classList.add('active');
//     console.log("ACTIVE: " + element + element.classList);
//
}

  for (const element of links_zawsze) {
   element.addEventListener('click', function(){
    element.classList.remove('active');
    alert('click');
    console.log('1el => ' + element + element.classList)
})}

  let active_mp = document.getElementById('test-class');
  console.log(active_mp.classList);
  active_mp.classList.remove('huj');
  console.log(active_mp.classList);
  active_mp.classList.add('magda');
  console.log(active_mp.classList);



//    document.getElementById('test-button').addEventListener('click', function(){
//   const links = document.querySelectorAll('.titles a');
//   console.log('links:', links);
// });
