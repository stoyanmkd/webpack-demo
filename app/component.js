module.exports = function () {
    var element1 = document.createElement('h1');
    var element2 = document.createElement('h2');
    var container = document.createElement('div');
    var counter = 0;

    element1.innerHTML = 'Counter: ';
    increment();
    setInterval(function(){increment()}, 1000);

    function increment(){
        element2.innerHTML = counter + '';
        console.log(counter);
        counter++;
    }

    container.appendChild(element1);
    container.appendChild(element2);

    return container;
};