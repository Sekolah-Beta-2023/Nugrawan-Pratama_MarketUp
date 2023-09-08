<template>
    <header>
        <nav class="p-5 flex justify-between bg-slate-500 items-center">
            <div class="flex gap-3 items-center shadow-inner px-3 rounded-sm cursor-pointer">
                <h1 class="text-red-500 text-2xl font-bold -rotate-1 hover:rotate-1">
                    THE-AOP
                </h1>
            </div>
            <ul class="menu nav-list flex items-center gap-5 text-gray-100 font-bold">
                <li>
                    <NuxtLink to="/"> Home </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/classes"> Clases </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/tasks"> Tasks </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/fun"> Fun </NuxtLink>
                </li>
                <li>
                    <button class="py-2 px-4 rounded-lg bg-gray-100 text-sm text-sky-500 hover:bg-gray-200">
                        Sign Up
                    </button>
                </li>
            </ul>
            <div class="bg-white flex items-center px-5 py-1 rounded-xl hover:shadow-xl">
                <input 
                id="search" type="search" name="search" placeholder="Search..."
                class="focus:outline-none appearance-none" />
                <button class="border-l pl-3 hover:text-red-500">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
        </nav>
    </header>
</template>