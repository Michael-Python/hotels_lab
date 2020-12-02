<template>
  <div>
      <form id="bookings" v-on:submit="addBooking" method="post">
          <label for="name">Name: </label>
          <input type="text" id="name" v-model="name" required />
          <label for="email">Email: </label>
          <input type="text" id="email" v-model="email" required />
          <label for="checked_in" >Checked in?</label>
          <input type="radio" id="true" name="checked_in" value="true" v-model="checked_in">
          <label for="true" >True</label>
          <input type="radio" id="false" name="checked_in" value="false" v-model="checked_in">
          <label for="false" >False</label>
          <input type="submit" id="submit" value="Make a booking">
      </form>
  </div>
</template>

<script>
import BookingService from '../services/BookingService'
import { eventBus } from '@/main.js'

export default {
    name: 'bookings-form',
    props: ['bookings'],
    data() {
        return {
            name: '',
            email: '',
            checked_in: null
        }
    },
    methods:{
        addBooking(event) {
            event.preventDefault()
            const booking = {
                name: this.name,
                email: this.email,
                checked_in: this.checked_in
            }
            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('submit-booking', res))
        }
    }

}
</script>

<style>

</style>