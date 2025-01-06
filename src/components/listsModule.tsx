const listsModule = (function () {
  const courses = [
    "Acordeon",
    "Baixo acústico e elétrico",
    "Bateria",
    "Canto Popular",
    "Cavaquinho",
    "Flauta doce e transversa",
    "Guitarra",
    "Harmônica de boca",
    "Percussão",
    "Piano",
    "Saxofone",
    "Teatro",
    "Teclado",
    "Técnica Vocal",
    "Trompete",
    "Ukulele",
    "Viola",
    "Violão",
    "Violino",
    "Harmonia aplicada a MPB",
    "Teoria Musical",
    "Preparação para a prova específica da UFRGS",
  ];

  const courses_EN = [
    "Accordion",
    "Acoustic and Electric Bass",
    "Drums",
    "Popular Singing",
    "Cavaquinho",
    "Recorder and Transverse Flute",
    "Guitar",
    "Harmonica",
    "Percussion",
    "Piano",
    "Saxophone",
    "Theater",
    "Keyboard",
    "Vocal Technique",
    "Trumpet",
    "Ukulele",
    "Viola",
    "Classical Guitar",
    "Violin",
    "Applied Harmony to Brazilian Popular Music (MPB)",
    "Music Theory",
    "Preparation for the UFRGS Specific Test",
  ];
  

  const musicStyles = [
    "Blues",
    "Bossa Nova",
    "Choro",
    "Clássica",
    "Fado",
    "Gospel",
    "Hip Hop",
    "Indie",
    "Jazz",
    "K-pop",
    "MPB",
    "Punk",
    "Reggae",
    "Rock",
    "Salsa",
    "Samba",
    "Sertanejo",
    "Tango",
    "Forró",
  ];

  const teacher = ["Rosana Marques", "Gustavo Strapazon", "Eric Nelsis"];

  const howDidYouFindUs = [
    "Instagram",
    "Facebook",
    "Site da escola",
    "Eventos da Escola",
    "Rádio",
    "TV",
    "Familia/Amigos",
  ];

  const howDidYouFindUs_EN = [
    "Instagram",
    "Facebook",
    "Our site",
    "School events",
    "Radio",
    "TV",
    "Family/Friends",
  ];

  return {
    courses: courses,
    courses_EN: courses_EN,
    musicStyles: musicStyles,
    teacher: teacher,
    howDidYouFindUs: howDidYouFindUs,
    howDidYouFindUs_EN: howDidYouFindUs_EN,
  };
})();

export default listsModule;
