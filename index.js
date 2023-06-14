function receivesAFunction(spy){
spy();
}

function returnsANamedFunction(){
    function ANamedFunction(){

    }

     return ANamedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}