async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    return data
}


async function main(){
    console.log('loading modules')

    console.log('getting data')

    console.log('load data')

    let data = await getData()

    console.log(data)

    console.log('process data')

console.log('task 2')

}