//let url =  'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json'

// let options = {
//   method: 'GET',
//   headers: {
//     Accept: '*/*',
//     'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
//   },
// }

// const getWeatherReport = async () => {
//   try {
//     const response = await fetch(url, options)
//     const result = await response.json()
//     console.log(result)

//     if (result) {
//       let weatherArray = result?.dataseries
//       console.log(weatherArray)

//       const jokeContainer = document.getElementById('joke_container')
//       const weatherList = document.createElement('div')
//       jokeContainer.appendChild(weatherList)
//       weatherList.classList.add('myStyle')

//       weatherArray.map((singleitem, index) => {
//         const tempDiv = document.createElement('div')
//         const myH4 = document.createElement('h4')
//         const tempPara = document.createElement('p')
//         myH4.textContent = `Report no. ${index + 1}`
//         tempPara.textContent = 'Cloud Cover:' + singleitem?.cloudcover
//         tempDiv.append(myH4)
//         tempDiv.append(tempPara)

//         weatherList.appendChild(tempDiv)
//         return singleitem
//       })
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }
// //getRandomJokes()

// const generateButton = document.getElementById('btn')
// generateButton.addEventListener('click', () => {
//   getWeatherReport()
// })

const getToDos = () => {
  const toDosData = localStorage.getItem('todos')
  const data = JSON.parse(toDosData)
  console.log(data)
  if (data?.length > 0) {
    for (let i = 0; i < data.length; i++) {
      let toDoTItle = document.createElement('h4')
      let toDoDesc = document.createElement('p')
      let deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete Todo'
      toDoTItle.textContent = data[i].title
      toDoDesc.textContent = data[i].desc
      let oneToDoContainer = document.createElement('div')
      oneToDoContainer.appendChild(toDoTItle)
      oneToDoContainer.appendChild(toDoDesc)
      oneToDoContainer.appendChild(deleteButton)
      deleteButton.addEventListener('click', (event) => {
        const oneToDO = event.target.parentElement
        console.log(oneToDO.childNodes[0].textContent)
        const parentDiv = oneToDO.parentElement
        parentDiv.removeChild(oneToDO)
        let myToDos = JSON.parse(localStorage.getItem('todos'))
        myToDos = myToDos.filter(
          (todo) => todo.title !== oneToDO.childNodes[0].textContent
        )
        localStorage.setItem('todos', JSON.stringify(myToDos))
      })
      //console.log(oneToDoContainer)
      oneToDoContainer.classList.add('single_todo')

      let list = document.getElementById('list')
      list.appendChild(oneToDoContainer)
      let listContainer = document.getElementById('list_container')
      listContainer.appendChild(list)
    }
  }
}

getToDos()

let toDoArray = []

const addToDo = () => {
  const titleInput = document.getElementById('title_input')
  const descInput = document.getElementById('desc_input')
  //console.log(titleInput.value, descInput.value)
  let newToDo = { title: titleInput.value, desc: descInput.value }
  //console.log(newToDo)

  const tempArr = JSON.parse(localStorage.getItem('todos'))
  if (tempArr?.length > 0) {
    tempArr.push(newToDo)
    localStorage.setItem('todos', JSON.stringify(tempArr))
  } else {
    toDoArray.push(newToDo)
    localStorage.setItem('todos', JSON.stringify(toDoArray))
  }
  console.log(toDoArray)

  //console.log(toDoArray)

  let toDoTItle = document.createElement('h4')
  let toDoDesc = document.createElement('p')
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete Todo'
  toDoTItle.textContent = titleInput.value
  toDoDesc.textContent = descInput.value
  let oneToDoContainer = document.createElement('div')
  oneToDoContainer.appendChild(toDoTItle)
  oneToDoContainer.appendChild(toDoDesc)
  oneToDoContainer.appendChild(deleteButton)
  deleteButton.addEventListener('click', (event) => {
    const oneToDO = event.target.parentElement
    console.log(oneToDO.childNodes[0].textContent)
    const parentDiv = oneToDO.parentElement
    parentDiv.removeChild(oneToDO)
    let myToDos = JSON.parse(localStorage.getItem('todos'))
    myToDos = myToDos.filter(
      (todo) => todo.title !== oneToDO.childNodes[0].textContent
    )
    localStorage.setItem('todos', JSON.stringify(myToDos))
  })
  //console.log(oneToDoContainer)
  oneToDoContainer.classList.add('single_todo')

  let list = document.getElementById('list')
  list.appendChild(oneToDoContainer)
  let listContainer = document.getElementById('list_container')
  listContainer.appendChild(list)
  titleInput.value = ''
  descInput.value = ''
}

const deleteToDo = () => {
  let listContainer = document.getElementById('list_container')
  let list = document.getElementById('list')
  listContainer.removeChild(list)
}

const arr = [
  { name: 'raj', id: 1 },
  { name: 'ajit', id: 2 },
  { name: 'priya', id: 3 },
  { name: 'rohit', id: 4 },
]

let newArr = arr.filter((item) => item.id !== 2)
console.log(newArr)
