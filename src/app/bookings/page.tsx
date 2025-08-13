"use client";

import React, { useEffect, useState } from "react";

type Booking = {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  adults: number;
  children: number;
  message: string;
  createdAt: string;
};

const BookingListPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/bookings")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch bookings");
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-4 text-black" >
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">Name</th>
              <th className="border border-gray-300 px-2 py-1">Phone</th>
              <th className="border border-gray-300 px-2 py-1">Email</th>
              <th className="border border-gray-300 px-2 py-1">Date</th>
              <th className="border border-gray-300 px-2 py-1">Time</th>
              <th className="border border-gray-300 px-2 py-1">Adults</th>
              <th className="border border-gray-300 px-2 py-1">Children</th>
              <th className="border border-gray-300 px-2 py-1">Message</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td className="border border-gray-300 px-2 py-1">{b.fullName}</td>
                <td className="border border-gray-300 px-2 py-1">{b.phone}</td>
                <td className="border border-gray-300 px-2 py-1">{b.email}</td>
                <td className="border border-gray-300 px-2 py-1">{b.date}</td>
                <td className="border border-gray-300 px-2 py-1">{b.time}</td>
                <td className="border border-gray-300 px-2 py-1">{b.adults}</td>
                <td className="border border-gray-300 px-2 py-1">{b.children}</td>
                <td className="border border-gray-300 px-2 py-1">{b.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingListPage;
