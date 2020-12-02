<template>
<div>
  <bookings-form :bookings='bookings' />
  <bookings-list :bookings='bookings'></bookings-list>
</div>
</template>

<script>
import BookingForm from './components/BookingForm'
import BookingList from './components/BookingList'
import BookingService from './services/BookingService.js'
import { eventBus } from '@/main.js'

export default {
  name: 'app',
  components: {
    'bookings-list': BookingList,
    'bookings-form': BookingForm
  },
  data() {
    return {
      bookings: []
    }
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('submit-booking', payload => {
      BookingService.postBooking(payload)
        .then(booking => this.bookings.push(booking));
    });

     eventBus.$on('delete-booking', (id) => {
      let index = this.booking.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
    // eventBus.$on('delete-booking', id => {
    //   BookingService.deleteBooking(id)
    //     .then(() => {
    //       const index = this.bookings.findIndex(booking => booking._id === id);
    //       this.bookings.splice(index, 1); 
    //     });
    // });
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style>

</style>