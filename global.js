function createResults(item) {
     var col = document.createElement('div')
     col.className = 'col-sm-3'

     var  pictureHolder = document.createElement('div')
     pictureHolder.className = pictureHolder
     col.appendChild(pictureHolder)

     var img = document.createElement('img')
     img.setAttribute('src', item.image)
     pictureHolder.appendChild(img)

     var span = document.createElement('span')
     span.innerHTML = item.title
     pictureHolder.appendChild(span)

     var row = document.createElement('div')
     row.className = 'row'
     pictureHolder.appendChild(row)

     var colLeft = document.createElement('div')
     colLeft.className = 'col-xs-6 text-muted'
     colLeft.innerHTML = item.seller
     row.appendChild(colLeft)

     var colRight = document.createElement('div')
     colLeft.className = 'col-xs-6 text-right text-success'
     colLeft.innerHTML = item.price
     row.appendChild(colRight)

     document.querySelector('#contentBox').appendChild(col)
 }

function randomPrice() {
      return '$' + Math.round(Math.random() * 100) + '.00'
}

var items = [
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice(),
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     },
     {
          title: 'A title of an item',
          image: 'http://unsplash.it/200?image=',
          seller: 'sellername',
          price: randomPrice()
     }
]


// createResults({
//   image: 'img/boardgame.jpg',
//   title: 'Vintage Board Game Art Wall Home Decor',
//   seller: 'franz66',
//   price: 15.00
// })

// console.log(items)


function makeMorePics(picItems) {
     document.querySelector('#contentBox').innerHTML = ''

     picItems.forEach(function(item, i){
          // item.title += i
          // item.image += i
          // item.seller += i
          createResults(item)
     })
}

makeMorePics(items)
