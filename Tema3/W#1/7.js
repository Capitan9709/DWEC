
function factorizar(num){
    if (num > 0){
        return (num * factorizar(num -1));
    }
    else
        return (1);
}

document.write(factorizar(5));
