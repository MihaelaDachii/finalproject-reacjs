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


      london: {
        attractions: [
            {
                name: "The British Museum",
                description: "The British Museum is one of the world's oldest and most renowned museums, housing a vast collection of art and artifacts from various civilizations across history.",
                address: "Great Russell Street, London WC1B 3DG, United Kingdom",
                image_url: "https://images.unsplash.com/photo-1574515529318-b3a2cd51242e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
                thumbnail_urls: [
                    "https://images.unsplash.com/photo-1568630581081-20a44a0be927?ixid=MnwxM‌​jA3fDB8MHxwaG90by1wYW‌​dlfHx8fGVufDB8‌​fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                ],
                visiting_hours: "10:00 AM - 5:30 PM, Sunday - Saturday"
            }
        ]
    },


    moscow: {
      attractions: [
          {
              name: "Red Square",
              description: "Red Square is a historic city square in Moscow, Russia. It is known for its cultural and political significance, featuring iconic landmarks such as the Kremlin and St. Basil's Cathedral.",
              address: "Red Square, Moscow, Russia",
              image_url: "https://images.unsplash.com/photo-1544987185-101082cca5de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
              thumbnail_urls: [
                  "https://images.unsplash.com/photo-1565151258-cd6ae9343954?ixid=MnwxMjA3fDB8MHx‌​waG90by1wYWdlfHx8fGVufDB8‌​fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
              ],
              visiting_hours: "9:00 AM - 8:00 PM, Monday - Sunday"
          }
      ]
  },

  switzerland: {
    attractions: [
        {
            name: "Matterhorn",
            description: "The Matterhorn is one of the most iconic mountains in the Swiss Alps, known for its distinctive pyramid shape and challenging climbing routes.",
            address: "Matterhorn, Switzerland",
            image_url: "https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            thumbnail_urls: [
                "https://images.unsplash.com/photo-1534809027761-6f8de9b61574?ixid=MnwxM‌​jA3fDB8MHxwaG90by1wYW‌​dlfHx8fGVufDB8‌​fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            ],
            visiting_hours: "Open 24 hours"
        }
    ]
},

vienna: {
  attractions: [
      {
          name: "Schönbrunn Palace",
          description: "Schönbrunn Palace is a historic imperial palace in Vienna, Austria. It is known for its stunning architecture, beautiful gardens, and rich history.",
          address: "Schönbrunn Palace, Schönbrunner Schloßstraße 47, 1130 Wien, Austria",
          image_url: "https://images.unsplash.com/photo-1625316059055-0e2136aa400a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          thumbnail_urls: [
              "https://images.unsplash.com/photo-1559754033-aa2b6602b6b1?ixid=MnwxM‌​jA3fDB8MHxwaG90by1wYW‌​dlfHx8fGVufDB8‌​fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
          ],
          visiting_hours: "9:30 AM - 5:30 PM, Monday - Sunday"
      }
  ]
},


paris: {
  attractions: [
      {
          name: "Eiffel Tower",
          description: "The Eiffel Tower is an iconic landmark and symbol of Paris, France. It offers stunning views of the city and is a must-visit attraction for tourists.",
          address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
          image_url: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=801&q=80",
          thumbnail_urls: [
              "https://images.unsplash.com/photo-1531616918980-1988a23e8fb7?ixid=MnwxM‌​jA3fDB8MHxwaG90by1wYW‌​dlfHx8fGVufDB8‌​fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
          ],
          visiting_hours: "9:00 AM - 11:45 PM, Monday - Sunday"
      }
  ]
},



rome: {
  attractions: [
      {
          name: "Colosseum",
          description: "The Colosseum is an ancient amphitheater in the center of Rome, Italy. It is a remarkable symbol of Roman engineering and entertainment.",
          address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
          image_url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=796&q=80",
          thumbnail_urls: [
              "https://images.unsplash.com/photo-1502517705005-0ce53ed58497?ixid=MnwxM‌​jA3fDB8MHxwaG90by1wYW‌​dlfHx8fGVufDB8‌​fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
          ],
          visiting_hours: "8:30 AM - 6:15 PM, Monday - Sunday"
      }
  ]
},

rovinj: {
  attractions: [
      {
          name: "Old Town Rovinj",
          description: "The Old Town of Rovinj is a charming and picturesque area with narrow streets, colorful houses, and stunning sea views. It captures the essence of the Croatian coastal town.",
          address: "Old Town, Rovinj, Croatia",
          image_url: "https://plus.unsplash.com/premium_photo-1661930620683-bc15c7a459ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          thumbnail_urls: [
              "https://images.unsplash.com/photo-1556155100-ef083782db37?ixid=MnwxM‌​jA3fDB8MHxwaG90by1wYW‌​dlfHx8fGVufDB8‌​fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
          ],
          visiting_hours: "Open 24 hours"
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


      auckland: {
        attractions: [
          {
            name: "Sky Tower",
            description: "Iconic observation and telecommunications tower offering panoramic views of Auckland's skyline.",
            address: "Victoria Street West, Auckland, New Zealand",
            image_url: "https://images.unsplash.com/photo-1577581739644-d302d8ca8392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            thumbnail_urls: ["https://images.unsplash.com/photo-1577581739644-d302d8ca8392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"],
            visiting_hours: "9:00 AM - 10:00 PM, Monday - Sunday"
          }
        ]
      },
      

      prague: {
        attractions: [
          {
            name: "Prague Castle",
            description: "Historic castle complex with palaces, churches, and stunning views over Prague.",
            address: "Hradčany, Prague, Czech Republic",
            image_url: "https://images.unsplash.com/photo-1580852710598-96912fc48065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
            thumbnail_urls: ["https://images.unsplash.com/photo-1580852710598-96912fc48065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"],
            visiting_hours: "9:00 AM - 5:00 PM, Monday - Sunday"
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
  