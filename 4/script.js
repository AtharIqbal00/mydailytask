function getdata(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();  
        }
    }, 2000);
}

//CALLBACK HELL
getdata(1, () => {
    console.log("geting data 2");
    getdata(2, () => {
        console.log("geting data 3");
        getdata(3, () => {
            console.log("geting data 4");
            getdata(4);
        });
    });
});