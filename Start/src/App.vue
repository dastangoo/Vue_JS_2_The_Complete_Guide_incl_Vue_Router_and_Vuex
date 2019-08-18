<template>
    <div class="container">
        <p>{{ quotes }}</p>
        <p>{{ maxQuotes }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quotes: [
                    'Just a Quote to see something'
                ],
                maxQuotes: 10    
            }
        }
    }
</script>

<style>
</style>
