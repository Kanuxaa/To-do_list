const input = document.getElementById('inp')
const list = document.getElementById('list')
const add = document.getElementById('add_btn')
const clear = document.getElementById('clear_btn')
const empty = document.getElementById('empty_btn')
let trashes = document.querySelectorAll('.trash')
let dones = document.querySelectorAll('.done')

function create_order(){
    const order = document.createElement('p')
    order.classList.add('order')
    return order
}

function numerate_order(){
    let orders = document.querySelectorAll('.order')
    let count = 1
    orders.forEach(function (order) {
            order.innerText=`${count++}.`
    })
}

function get_task(){
    const task = document.createElement('p')
    task.innerText = input.value
    input.value=''
    return task
}

function create_icon(class1,class2,class3){
    const container = document.createElement('div')
    const icon = document.createElement('i')
    container.classList.add(class1)
    icon.classList.add(class2)
    icon.classList.add(class3)
    container.appendChild(icon)
    return container
}

add.addEventListener('click', () =>{
    if (input.value){
        const order = create_order()
        const task = get_task()
        const icon_trash = create_icon('trash','fa-solid','fa-trash-can')
        const icon_done = create_icon('done','fa-solid', 'fa-square-check')
        const container = document.createElement('div')
        container.classList.add('container')
        container.appendChild(order)
        container.appendChild(task)
        container.appendChild(icon_done)
        container.appendChild(icon_trash)
        list.appendChild(container)
        numerate_order()
        trashes = document.querySelectorAll('.trash')
        dones = document.querySelectorAll('.done')
    }
})

clear.addEventListener('click', ()=>{
    const containers = document.querySelectorAll('.container')
    containers.forEach(container =>{
        if (container.children[1].style.textDecoration==='line-through'){
            container.remove()
        }
    })
    numerate_order()
})

empty.addEventListener('click', ()=>{
    const containers = document.querySelectorAll('.container')
    containers.forEach(container =>{
        container.remove()
    })
})

document.addEventListener('click', function(e){
    const trgt = e.target
    trashes.forEach(function(trash){
        if(trash===trgt || trash.firstChild===trgt){
            trash.parentElement.remove()
        }
    })
    dones.forEach(function(done){
        if(done===trgt || done.firstChild===trgt){
            done.parentElement.children[1].style.textDecoration = 'line-through'
            done.parentElement.children[2].style.display='none'
            done.parentElement.children[3].style.display='none'
        }
    })
    numerate_order()
})