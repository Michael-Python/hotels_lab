<template>
<ul>
  <booking-list-item :bookings='bookings'></booking-list-item>
</ul>
</template>

<script>
import BookingListItem from './BookingListItem.vue'

export default {
    name: 'booking-list',
    props: ['bookings'],
    components: { BookingListItem }

}
</script>

<style>

</style>