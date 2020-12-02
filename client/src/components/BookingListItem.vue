<template>
    <div>
        <li v-for="(booking, index) in bookings" :key='index' :booking='booking'>
            <p> name: {{ booking.name }}</p>
            <p> email: {{ booking.email }}</p>
            <p> checked in: {{  booking.checked_in }} </p>
            <button v-on:click="deleteBooking">Delete Booking</button>
        </li>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '../services/BookingService'
export default {
    name: 'bookings-list-item',
    props: ['bookings'],

    methods: {
    deleteBooking() {
        BookingService.deleteBooking(this.booking._id)
        .then(() => eventBus.$emit('delete-booking', this.booking._id))
    }

}
    
};
</script>

<style>

</style>