const cites = [
  'HTML est une perte de temps',
  'CSS encore plus',
  'React fait des miracles',
  'Laravel écrase php'
];

  function generatecite() {
  const ramdonI = Math.floor(Math.random() * cites.length);
  document.getElementById('cite').innerHTML = cites[ramdonI];
  
  };

  console.log(ramdonI);

  
