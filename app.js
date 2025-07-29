const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function getSeatDistance(seat) {
  const num = parseInt(seat.slice(1));
  if (num < 1 || num > 20) return Infinity;
  return num;
}

function sortBookings(bookings) {
  return bookings.sort((a, b) => {
    const maxA = Math.max(...a.seats.map(getSeatDistance));
    const maxB = Math.max(...b.seats.map(getSeatDistance));
    if (maxA !== maxB) return maxB - maxA;
    return a.id - b.id;
  });
}

app.post('/generate-sequence', (req, res) => {
  const { bookingData } = req.body;

  if (!bookingData || !Array.isArray(bookingData)) {
    return res.status(400).json({ error: 'Invalid booking data format' });
  }

  const hasInvalidSeat = bookingData.some(b => 
    b.seats.some(seat => {
      const num = parseInt(seat.slice(1));
      return isNaN(num) || num < 1 || num > 20;
    })
  );

  if (hasInvalidSeat) {
    return res.status(400).json({ error: 'Seat number must be between 1 and 20 only' });
  }

  const sorted = sortBookings(bookingData);
  const result = sorted.map((b, index) => ({
    seq: index + 1,
    bookingId: b.id
  }));

  res.json({ sequence: result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
