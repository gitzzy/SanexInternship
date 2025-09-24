// console.log(1)
// console.log(2)
// console.log(3)

// console.log('started')
// setTimeout(() => {console.log('Fetching data')},2000)
// console.log('Done')

// const a2 = async() => {
//     setTimeout(() => {console.log('a2')},2000)
// }

// const a = async () => {
//     console.log('a1')
//     await a2()
//     console.log('a3')
// }

// const b = async () => {
//     console.log('b1')
//     console.log('b2')
// }

// const main1 = async() =>{
//     await a()
//     await b()
// }
// main1()


//Q-1

const q1 = async() => {
    console.log('Start')
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('Hello after 3 second')
            resolve()
        },3000)
    })
    console.log('End')
}


const firstTask = async() => {
    return( setTimeout(() => {
        console.log("Task 1 Completed")
    },1000))
}

const secondTask = async() => {
    return ( setTimeout(() => {
        console.log("Task 2 Completed")
    },1000))
}

const q2 = async() => {
    await firstTask()
    await secondTask()
}

const fetchs = async(id) => {
    let feed = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let data = await feed.json();
    console.log(data.title)
}

const fetchAll = async() => {
    console.time('sequ')
    await fetchs(1)
    await fetchs(2)
    await fetchs(3)
    console.time('sequ')
}

const par = async() => {
    const promises = [
        await fetchs(1),
    await fetchs(2),
    await fetchs(3)
    ]
    await Promise.all(promises);
}
par()