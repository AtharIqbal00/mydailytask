function getdata(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();  
        }
    }, 2000);
}

getdata(1, () => {
    getdata(2, () => {
        getdata(3, () => {
            getdata(4);
        });
    });
});