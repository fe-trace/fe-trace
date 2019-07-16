async function fn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
}

async function run() {
    console.log(1);
    new Promise(async (resolve) => {
        const d = await fn();
        resolve(d);
    }).then((d) => {
        console.log(d);
    });
    console.log(3);
}

run();