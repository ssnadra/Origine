// Sample family data for the Origine UI kit. Names are placeholders.
window.ORIGINE_DATA = (() => {
  const PH = '../../assets/sample-photos/';
  const P = {
    m: { id: 'm', name: 'Margaret Ellen Hale', born: '1921', died: '2009', birthplace: 'Cork, Ireland', deathplace: 'Boston, Massachusetts', occupation: 'Schoolteacher', father: 't', mother: 'b', spouse: 'p', children: ['r', 'j'] },
    t: { id: 't', name: 'Thomas Hale', born: '1890', died: '1962', birthplace: 'Cork, Ireland', father: 'w', mother: null, children: ['m', 'n'] },
    b: { id: 'b', name: "Bridget O'Connell", born: '1894', died: '1971', birthplace: 'Kinsale, Ireland', father: 'd', mother: 'k', children: ['m', 'n'] },
    w: { id: 'w', name: 'William Hale', born: '1858', died: '1931', birthplace: 'Cork, Ireland' },
    d: { id: 'd', name: "Daniel O'Connell", born: '1861', died: '1920', birthplace: 'Kinsale, Ireland' },
    k: { id: 'k', name: 'Kathleen Ryan', born: '1866', died: '1944', birthplace: 'Bandon, Ireland' },
    n: { id: 'n', name: 'Nora Hale', born: '1924', died: '1998', birthplace: 'Cork, Ireland' },
    p: { id: 'p', name: 'Patrick Byrne', born: '1919', died: '1990', birthplace: 'Galway, Ireland', spouse: 'm', children: ['r', 'j'] },
    r: { id: 'r', name: 'Ruth Byrne Hale', born: '1952', living: true, birthplace: 'Boston, Massachusetts', father: 'p', mother: 'm', children: ['mi'] },
    j: { id: 'j', name: 'James Byrne', born: '1955', living: true, birthplace: 'Boston, Massachusetts', lives: 'Galway, Ireland', father: 'p', mother: 'm' },
    mi: { id: 'mi', name: 'Michael Byrne', born: '1974', living: true, birthplace: 'Boston, Massachusetts', mother: 'r', children: ['e', 'c'], src: PH + '125_0978.jpg' },
    e: { id: 'e', name: 'Ella Byrne', born: '2000', living: true, birthplace: 'Boston, Massachusetts', lives: 'Cork, Ireland', father: 'mi' },
    c: { id: 'c', name: 'Clare Byrne', born: '2001', living: true, birthplace: 'Boston, Massachusetts', father: 'mi' },
  };
  const events = {
    m: [
      { year: '1921', title: 'Born', place: 'Cork, Ireland', icon: 'baby' },
      { year: '1939', title: 'Finished school at St. Angela\u2019s', place: 'Cork', icon: 'graduation-cap' },
      { year: '1947', title: 'Emigrated to Boston with Nora', place: 'Cobh \u2192 Boston', icon: 'ship', detail: 'Sailed in April on the SS America. Their cousin Eileen met them at the dock.' },
      { year: '1949', title: 'Married Patrick Byrne', place: 'St. Brendan\u2019s, Dorchester', icon: 'heart' },
      { year: '1952', title: 'Daughter Ruth born', place: 'Boston', icon: 'baby' },
      { year: '2009', title: 'Died', place: 'Boston, Massachusetts', icon: 'flower-2' },
    ],
  };
  // people: ids born, living or settled there
  const places = [
    { id: 'cork', name: 'Cork, Ireland', years: '1858 \u2013 today', lat: 51.8985, lon: -8.4756, people: ['w', 't', 'm', 'n', 'e'] },
    { id: 'kinsale', name: 'Kinsale, Ireland', years: '1861 \u2013 1920', lat: 51.7059, lon: -8.5222, people: ['b', 'd'] },
    { id: 'bandon', name: 'Bandon, Ireland', years: '1866 \u2013 1944', lat: 51.7461, lon: -8.7425, people: ['k'] },
    { id: 'galway', name: 'Galway, Ireland', years: '1919 \u2013 today', lat: 53.2707, lon: -9.0568, people: ['p', 'j'] },
    { id: 'boston', name: 'Boston, Massachusetts', years: '1947 \u2013 today', lat: 42.3601, lon: -71.0589, people: ['m', 'n', 'p', 'r', 'mi', 'c'] },
  ];
  const editors = [{ name: 'Ruth Byrne Hale' }, { name: "Siobhan O'Connell" }, { name: 'James Byrne' }, { name: 'Liam Hale' }];
  // tags: x/y are % of the image; id null = face found but not yet named
  const photos = [
    { id: 'ph1', src: PH + '125_0987.jpg', caption: 'Snow day with Grandad', meta: '21 March 2008', place: 'Boston, Massachusetts', aspect: '3 / 4', addedBy: 'Michael Byrne', tags: [{ id: null, x: 28, y: 25 }, { id: 'e', x: 14, y: 33 }, { id: 'c', x: 77, y: 37 }] },
    { id: 'ph2', src: PH + '125_0978.jpg', caption: 'Michael and Ella with the snowwoman', meta: '21 March 2008', place: 'Boston, Massachusetts', aspect: '4 / 3', addedBy: 'Michael Byrne', tags: [{ id: 'mi', x: 28, y: 24 }, { id: 'e', x: 43, y: 41 }] },
    { id: 'ph3', src: PH + '125_0974.jpg', caption: 'Ella and Clare', meta: '21 March 2008', place: 'Boston, Massachusetts', aspect: '3 / 4', addedBy: 'Michael Byrne', tags: [{ id: 'e', x: 26, y: 31 }, { id: 'c', x: 58, y: 36 }] },
    { id: 'ph4', src: PH + '125_0977.jpg', caption: 'The snowwoman', meta: '21 March 2008', place: 'Boston, Massachusetts', aspect: '3 / 4', addedBy: 'Michael Byrne', tags: [] },
  ];
  const activity = [
    { who: { name: 'Michael Byrne', src: PH + '125_0978.jpg' }, action: 'added 4 photos to', target: 'Snow day, March 2008', time: '2 days ago', photos: true },
    { who: editors[1], action: 'added a birth record for', target: "Daniel O'Connell", time: 'Last week' },
    { who: editors[2], action: 'wrote a story about', target: 'Patrick Byrne', time: '3 weeks ago', quote: 'Dad never talked about Galway much, but he kept a photo of the harbour above his workbench.' },
    { who: editors[0], action: 'joined the tree and linked herself to', target: 'Margaret Ellen Hale', time: 'March 2026' },
  ];
  const history = {
    m: [
      { who: 'Ruth Byrne Hale', change: 'changed birth place from \u201cCork\u201d to \u201cCork, Ireland\u201d', time: '2 days ago' },
      { who: "Siobhan O'Connell", change: 'added occupation \u201cSchoolteacher\u201d', time: 'Last week' },
      { who: 'Ruth Byrne Hale', change: 'created this person', time: 'March 2026' },
    ],
  };
  function tree(id, depth = 0, max = 3) {
    const p = P[id]; if (!p) return null;
    const node = { ...p };
    if (depth < max - 1) { node.father = tree(p.father, depth + 1, max); node.mother = tree(p.mother, depth + 1, max); }
    return node;
  }
  return { people: P, events, places, editors, activity, photos, history, tree };
})();
