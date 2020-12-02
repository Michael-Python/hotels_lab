<template>
    <div>
        <li v-for="(booking, index) in bookings" :key='index' :booking='booking'>
            <p> name: {{ booking.name }}</p>
            <p> email: {{ booking.email }}</p>
            <p> checked in: {{  booking.checked_in }} </p>
            </li>
    </div>
</template>

<script>
export default {
    name: 'bookings-list-item',
    props: ['bookings']

}
</script>

<style>

</style>