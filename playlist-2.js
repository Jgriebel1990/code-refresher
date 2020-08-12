const playlist = [
  ['Kai Tangata', ' Alien Weaponry', ' 6:36'],
  ['Velocity', ' Meganeko', ' 7:04'],
  ['Veritas', ' Levity Sky', ' 6:21'],
  ['SATRN', ' deadmou5', ' 6:55'],
  ['Jalek', ' ejeca', ' 5:53'],
  ['Terran One', ' Glenn Stafford', ' 4:56']
]

// const myArtist = `${playlist[0][2]}`
// console.log(myArtist);

function createListItems(arr){
  let items = ''
  for (let i = 0; i < arr.length; i++){
    items += `<li>${arr[i][0]}, by ${arr[i][1]} - ${arr[i][2]}</li>`
  }
  return items
} 

document.querySelector('main').innerHTML = `<ol>${createListItems(playlist)}</ol>`