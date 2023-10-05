<template>
    <div>
        <!-- {{ document.cookie }} -->
    </div>
</template>

<script>
    // CRUD
    document.cookie = "name=victoria";
    console.log( document.cookie );
    document.cookie = "name=victoria 10";
    document.cookie = "name=victoria 10; expires = Thu 01 Jan 2010 00:00:00 GMT"

    // CRUD Sesssion && Local support
    const user = { first: 'Victoria', last: 'AAA'}
    localStorage.setItem('user', JSON.stringify(user));

    console.log(JSON.parse(localStorage.getItem('user')));

    const update = { first : 'Hamka', last: 'Kas'};
    localStorage.setItem('user', JSON.stringify(update));

    localStorage.removeItem('user')

    // CRUD 
    // users versi 1 
    const openRequest = indexedDB.open('users', 1);
    openRequest.onupgradeneeded = function () { 
        // running data
    }

    openRequest.onerror = function() {
        console.error('Error', openRequest.error);
    }

    openRequest.onsuccess = function() {
        const db = openRequest.result;
        console.log(db);
        // do something with your db
    }
</script>