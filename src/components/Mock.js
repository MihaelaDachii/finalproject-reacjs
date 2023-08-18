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

      zakynthos: {
        attractions: [
          {
            name: "Navagio ",
            description: "Navagio, also known as Shipwreck Beach, is a famous and stunning location situated on the Greek island of Zakynthos (Zante).",
            address: "Navagio Beach Zakynthos, Greece",
            image_url: "https://images.unsplash.com/photo-1570015329194-675ae0cf2516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
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
  