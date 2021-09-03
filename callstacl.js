function one () {
    console.log('some code');
    two();
    console.log('some code 2');
}

function two () {
    console.log('call three');
    three ();
}

function three () {
    console.log('finish him');
}

function main () {
    console.log('go-go');
    one ();
}

main();