const menu = [
  {
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    subCategories: [
      {
        name: "Main Breakfast",
        items: [
          {
            name: "Breakfast Quesadilla",
            price: 16.99,
            type: "non-veg",
            image: "https://images.unsplash.com/photo-1604908177522-402c1b3c3f8b"
          },
          {
            name: "Omelette",
            price: 18.99,
            type: "non-veg",
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2"
          },
          {
            name: "Two Egg Breakfast",
            price: 17.99,
            type: "veg",
            image: "https://images.unsplash.com/photo-1525351484163-7529414344d8"
          }
        ]
      }
    ]
  },

  {
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    subCategories: [
      {
        name: "Smoothies",
        items: [
          {
            name: "Strawberry Banana",
            price: 8,
            type: "veg",
            image: "https://images.unsplash.com/photo-1505253716362-afaea6b6e8b2"
          },
          {
            name: "Mango Lassi",
            price: 8,
            type: "veg",
            image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab"
          }
        ]
      }
    ]
  },

  {
    category: "Bar Menu",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330",
    subCategories: [
      {
        name: "Cocktails",
        items: [
          {
            name: "Classic Mojito",
            price: 8.5,
            type: "alcohol",
            image: "https://images.unsplash.com/photo-1582571352032-448f792d4b9f"
          },
          {
            name: "Long Island Iced Tea",
            price: 14.99,
            type: "alcohol",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a"
          }
        ]
      }
    ]
  },

  {
    category: "Kids Menu",
    image: "https://img.freepik.com/free-photo/father-feeding-daughter_23-2148361496.jpg",
    subCategories: [
      {
        name: "Kids Special",
        items: [
          {
            name: "Kids Pancake",
            price: 10.99,
            type: "veg",
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
          },
          {
            name: "Mac & Cheese",
            price: 9.99,
            type: "veg",
            image: "https://images.unsplash.com/photo-1543332164-6e82f355bad8"
          }
        ]
      }
    ]
  },

  {
    category: "Indian",
    image: "https://static.vecteezy.com/system/resources/previews/039/584/956/non_2x/ai-generated-freshness-and-spice-in-a-gourmet-meal-of-guacamole-and-meat-generated-by-ai-free-photo.jpg",
    subCategories: [
      {
        name: "Curries",
        items: [
          {
            name: "Butter Chicken",
            price: 21.99,
            type: "non-veg",
            image: "https://images.unsplash.com/photo-1603898037225-1c02f90f8c8a"
          },
          {
            name: "Shahi Paneer",
            price: 20.99,
            type: "veg",
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
          }
        ]
      }
    ]
  },

  {
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    subCategories: [
      {
        name: "Burgers",
        items: [
          {
            name: "Classic Beef Burger",
            price: 19.99,
            type: "non-veg",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
          },
          {
            name: "Almond Veg Burger",
            price: 19.99,
            type: "veg",
            image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2"
          }
        ]
      }
    ]
  }
];

export default menu;