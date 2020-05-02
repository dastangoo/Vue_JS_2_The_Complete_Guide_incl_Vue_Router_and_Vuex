<template>
    <h3>Edit the User</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link 
        tag="button" 
        :to="'/user' + $route.params.id + '/edit'"
        class="btn btn-primary">Edit User</router-link>
</template>
