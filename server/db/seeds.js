use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Ruth Foulis",
        email: "ruth@ruth.com",
        checked_in: false 
    },
    {
        name: "Michael Sinclair",
        email: "michael@michael.ca",
        checked_in: true
    },
    {
        name: "Father Christmas",
        email: "nick@northpole.com",
        checked_in: true
    }
]);
