const countries = {
  CAN: {
    name: 'Canada',
    visited: true,
    trips: [
      {
        location: 'Nova Scotia',
        year: 2026,
        title: 'Home',
        story:
          'I grew up in Annapolis Royal, NS on a maple syrup farm and currently I still live in Nova Scotia in Halifax',
        image: 'src/assets/travel_images/ns_home.webp',
      },
    ],
  },

  USA: {
    name: 'United States',
    visited: true,
    trips: [
      {
        location: 'Arizona, Sun City',
        year: 2025,
        title: 'Taking grandma to Sun City',
        story:
          'Originally I was born in America so most of my family still lives there. My grandmother is a snow bird so she would go to Arizona in the winters and every year I would help take here there. Got to watch my first college football game!',
        image: 'src/assets/travel_images/AZ_trip_24.webp',
      },
      {
        location: 'Boston, Massachusetts',
        year: 2024,
        title: 'A Day in Boston',
        story:
          'Spent the day with my Uncle, rode the train into the city, explored, and got some donuts',
      },
    ],
  },
};

export default countries;
