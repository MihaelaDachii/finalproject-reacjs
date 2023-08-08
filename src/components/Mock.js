const mockData = {
    status: "success",
    data: {
      brasov: {
        attractions: [
          {
            name: "Black Church",
            description: "The Black Church (Biserica Neagră) is a historic and iconic Gothic-style church located in Brasov, Romania.",
            address: "Piața Sfatului 16, Brașov 500025",
            image_url: "https://images.unsplash.com/photo-1560235043-5ca64ce84fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1560235043-5ca64ce84fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "10:00 AM - 6:00 PM, Tuesday - Sunday"
          }
        ]
      },
      barcelona: {
        attractions: [
          {
            name: "Sagrada Familia",
            description: "The Sagrada Família is an iconic basilica located in Barcelona, Spain, designed by the renowned architect Antoni Gaudí.",
            address: "Basílica de la Sagrada Família, Carrer de Mallorca, 401, 08013 Barcelona, Spain",
            image_url: "https://images.unsplash.com/photo-1613751632350-630e439b2f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1613751632350-630e439b2f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "8:00 AM - 8:00 PM, Monday - Sunday"
          }
        ]
      },
      pamukkale: {
        attractions: [
          {
            name: "Pamukkale Travertines",
            description: "Stunning natural terraces made of mineral-rich thermal waters in Pamukkale, Turkey.",
            address: "Pamukkale, Denizli Province, Turkey",
            image_url: "https://images.unsplash.com/photo-1570135460241-4bd244c80f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1570135460241-4bd244c80f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "Open 24 hours"
          }
        ]
      },
      phuket: {
        attractions: [
          {
            name: "Patong Beach",
            description: "Famous and lively beach destination in Phuket, Thailand.",
            address: "Patong, Kathu District, Phuket, Thailand",
            image_url: "https://images.unsplash.com/photo-1580329119289-d85a901edffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1580329119289-d85a901edffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "Open 24 hours"
          }
        ]
      },
      new_york: {
        attractions: [
          {
            name: "Statue of Liberty",
            description: "Iconic symbol of freedom and democracy located in New York, USA.",
            address: "Liberty Island, New York, NY 10004, USA",
            image_url: "https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "9:30 AM - 5:00 PM, Monday - Sunday"
          }
        ]
      },
      sydney: {
        attractions: [
          {
            name: "Sydney Opera House",
            description: "Iconic performing arts venue and architectural masterpiece in Sydney, Australia.",
            address: "Bennelong Point, Sydney NSW 2000, Australia",
            image_url: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=832&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "9:00 AM - 8:30 PM, Monday - Sunday"
          }
        ]
      },
      washington_dc: {
        attractions: [
          {
            name: "The White House",
            description: "Official residence and workplace of the President of the United States.",
            address: "1600 Pennsylvania Avenue NW, Washington, D.C., USA",
            image_url: "https://images.unsplash.com/photo-1593047614267-378b863c98c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1593047614267-378b863c98c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "8:30 AM - 11:00 AM, Tuesday - Saturday"
          }
        ]
      },
      bali: {
        attractions: [
          {
            name: "Uluwatu Temple",
            description: "Breathtaking cliffside temple and popular cultural attraction in Bali, Indonesia.",
            address: "Pecatu, South Kuta, Badung Regency, Bali, Indonesia",
            image_url: "https://images.unsplash.com/photo-1604842937136-1648761a6256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1604842937136-1648761a6256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "9:00 AM - 6:00 PM, Monday - Sunday"
          }
        ]
      },
      hong_kong: {
        attractions: [
          {
            name: "Victoria Peak",
            description: "Scenic viewpoint and popular tourist spot in Hong Kong.",
            address: "1 Lugard Road, Hong Kong",
            image_url: "https://images.unsplash.com/photo-1533029030467-904d7bbd602b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1533029030467-904d7bbd602b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "7:00 AM - 12:00 AM, Monday - Sunday"
          }
        ]
      },
      budapest: {
        attractions: [
          {
            name: "Buda Castle",
            description: "Historic castle complex overlooking the Danube River in Budapest, Hungary.",
            address: "Budavári Palota, 1014 Budapest, Hungary",
            image_url: "https://images.unsplash.com/photo-1651352146792-637b0e472d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1651352146792-637b0e472d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "10:00 AM - 6:00 PM, Monday - Sunday"
          }
        ]
      },
      san_francisco: {
        attractions: [
          {
            name: "Golden Gate Bridge",
            description: "Iconic suspension bridge spanning the Golden Gate Strait in San Francisco, California.",
            address: "Golden Gate Bridge, San Francisco, CA, USA",
            image_url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "Open 24 hours"
          }
        ]
      },
      florence: {
        attractions: [
          {
            name: "Uffizi Gallery",
            description: "Renowned art museum in Florence, Italy, housing a vast collection of masterpieces.",
            address: "Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy",
            image_url: "https://images.unsplash.com/photo-1554598282-3c1e0d84b6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1554598282-3c1e0d84b6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "8:15 AM - 6:50 PM, Tuesday - Sunday"
          }
        ]
      },
      bora_bora: {
        attractions: [
          {
            name: "Matira Beach",
            description: "Pristine beach with clear turquoise waters on the island of Bora Bora, French Polynesia.",
            address: "Bora Bora, French Polynesia",
            image_url: "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "Open 24 hours"
          }
        ]
      },
      tokyo: {
        attractions: [
          {
            name: "Senso-ji Temple",
            description: "Ancient Buddhist temple and cultural landmark in Tokyo, Japan.",
            address: "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
            image_url: "https://images.unsplash.com/photo-1686933021139-69c8b4242198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1083&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1686933021139-69c8b4242198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "6:00 AM - 5:00 PM, Monday - Sunday"
          }
        ]
      },
      rio_de_janeiro: {
        attractions: [
          {
            name: "Christ the Redeemer",
            description: "Iconic statue of Jesus Christ overlooking Rio de Janeiro, Brazil.",
            address: "Parque Nacional da Tijuca, Rio de Janeiro - RJ, Brazil",
            image_url: "https://images.unsplash.com/photo-1593995863951-57c27e518295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1593995863951-57c27e518295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "8:00 AM - 7:00 PM, Monday - Sunday"
          }
        ]
      },
      cairo: {
        attractions: [
          {
            name: "Giza Pyramids",
            description: "Ancient pyramids and Great Sphinx of Giza near Cairo, Egypt.",
            address: "Al Haram, Giza Governorate, Egypt",
            image_url: "https://images.unsplash.com/photo-1592488831514-7eccdf7c35a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1592488831514-7eccdf7c35a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "8:00 AM - 5:00 PM, Monday - Sunday"
          }
        ]
      },
      amsterdam: {
        attractions: [
          {
            name: "Rijksmuseum",
            description: "National museum with a vast collection of Dutch art and history in Amsterdam, Netherlands.",
            address: "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
            image_url: "https://images.unsplash.com/photo-1589825743636-cd96373c3319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            thumbnail_urls: [
              "https://images.unsplash.com/photo-1589825743636-cd96373c3319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "9:00 AM - 5:00 PM, Monday - Sunday"
          }
        ]
      }
    
    }
  };
  
  export default mockData;
  