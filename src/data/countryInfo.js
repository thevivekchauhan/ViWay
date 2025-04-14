const countryInfo = {
    USA: {
        info: "Popular places: New York, Los Angeles, Las Vegas.",
        bestInfo: "Must-visit: Grand Canyon, Times Square, Hollywood.",
        language: "English",
        currency: "USD ($)",
        bestSeason: "Spring (March-May), Fall (September-November)",
        logo: require("../assets/Country/usa.png"),
    },
    UK: {
        info: "Popular places: London, Edinburgh, Manchester.",
        bestInfo: "Must-visit: Big Ben, Buckingham Palace, Stonehenge.",
        language: "English",
        currency: "British Pound (£)",
        bestSeason: "Spring (March-June), Summer (July-September)",
        logo: require("../assets/Country/uk.png"),
    },
    France: {
        info: "Popular places: Paris, Nice, Lyon.",
        bestInfo: "Must-visit: Eiffel Tower, Louvre Museum, French Riviera.",
        language: "French",
        currency: "Euro (€)",
        bestSeason: "Spring (April-June), Fall (September-October)",
        logo: require("../assets/Country/France.png"),
        style: {
            backgroundColor: "#fff0f5",
            color: "#222",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center"
        }
    },
    Japan: {
        info: "Popular places: Tokyo, Kyoto, Osaka.",
        bestInfo: "Must-visit: Mount Fuji, Tokyo Disneyland, Kyoto Temples.",
        language: "Japanese",
        currency: "Japanese Yen (¥)",
        bestSeason: "Spring (March-May), Autumn (September-November)",
        logo: require("../assets/Country/japan.png"),
        style: {
            backgroundColor: "#e0f7fa",
            color: "#111",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center"
        }
    },
    Italy: {
        info: "Popular places: Rome, Venice, Milan.",
        bestInfo: "Must-visit: Colosseum, Grand Canal, Leaning Tower of Pisa.",
        language: "Italian",
        currency: "Euro (€)",
        bestSeason: "Spring (April-June), Fall (September-October)",
        logo: require("../assets/Country/Italy.png"),
        style: {
            backgroundColor: "#ffebcd",
            color: "#333",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center"
        }
    },
    Australia: {
        info: "Popular places: Sydney, Melbourne, Brisbane.",
        bestInfo: "Must-visit: Sydney Opera House, Great Barrier Reef, Bondi Beach.",
        language: "English",
        currency: "Australian Dollar (AUD $)",
        bestSeason: "Spring (September-November), Autumn (March-May)",
        logo: require("../assets/Country/Australia.png"),
        style: {
            backgroundColor: "#fffbcc",
            color: "#222",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center"
        }
    },
    Canada: {
        info: "Popular places: Toronto, Vancouver, Montreal.",
        bestInfo: "Must-visit: Niagara Falls, Banff National Park, CN Tower.",
        language: "English, French",
        currency: "Canadian Dollar (CAD $)",
        bestSeason: "Summer (June-August), Fall (September-October)",
        logo: require("../assets/Country/Canada.png"),
    },
    Germany: {
        info: "Popular places: Berlin, Munich, Frankfurt.",
        bestInfo: "Must-visit: Brandenburg Gate, Neuschwanstein Castle, Oktoberfest.",
        language: "German",
        currency: "Euro (€)",
        bestSeason: "Spring (April-June), Fall (September-October)",
        logo: require("../assets/Country/Germany.png"),
    },
    Spain: {
        info: "Popular places: Madrid, Barcelona, Seville.",
        bestInfo: "Must-visit: Sagrada Familia, Alhambra, Park Güell.",
        language: "Spanish",
        currency: "Euro (€)",
        bestSeason: "Spring (April-June), Fall (September-October)",
        logo: require("../assets/Country/Spain.png"),
    },
    China: {
        info: "Popular places: Beijing, Shanghai, Xi'an.",
        bestInfo: "Must-visit: Great Wall, Forbidden City, Terracotta Army.",
        language: "Chinese",
        currency: "Chinese Yuan (¥)",
        bestSeason: "Spring (April-May), Fall (September-October)",
        logo: require("../assets/Country/China.png"),
    },
    Brazil: {
        info: "Popular places: Rio de Janeiro, São Paulo, Salvador.",
        bestInfo: "Must-visit: Christ the Redeemer, Sugarloaf Mountain, Copacabana Beach.",
        language: "Portuguese",
        currency: "Brazilian Real (R$)",
        bestSeason: "Spring (September-November), Fall (March-May)",
        logo: require("../assets/Country/Brazil.png"),
    },
    India: {
        info: "Popular places: Delhi, Mumbai, Jaipur.",
        bestInfo: "Must-visit: Taj Mahal, Kutch Gujrat, Jaipur's Palaces, Goa Beaches.",
        language: "Hindi, English",
        currency: "Indian Rupee (₹)",
        bestSeason: "Winter (October-March)",
        logo: require("../assets/Country/India.png"),
    },
    Russia: {
        info: "Popular places: Moscow, Saint Petersburg, Kazan.",
        bestInfo: "Must-visit: Red Square, Hermitage Museum, Kremlin.",
        language: "Russian",
        currency: "Russian Ruble (₽)",
        bestSeason: "Summer (June-August)",
        logo: require("../assets/Country/Russia.png"),
    },
    Mexico: {
        info: "Popular places: Mexico City, Cancun, Guadalajara.",
        bestInfo: "Must-visit: Chichen Itza, Tulum, Teotihuacan.",
        language: "Spanish",
        currency: "Mexican Peso (MXN $)",
        bestSeason: "Winter (December-April)",
        logo: require("../assets/Country/Mexico.png"),
    },
    SouthAfrica: {
        info: "Popular places: Cape Town, Johannesburg, Durban.",
        bestInfo: "Must-visit: Table Mountain, Kruger National Park, Robben Island.",
        language: "English, Afrikaans",
        currency: "South African Rand (ZAR R)",
        bestSeason: "Spring (September-November), Fall (March-May)",
        logo: require("../assets/Country/SouthAfrica.png"),
    },
    Thailand: {
        info: "Popular places: Bangkok, Phuket, Chiang Mai.",
        bestInfo: "Must-visit: Grand Palace, Phi Phi Islands, Wat Arun.",
        language: "Thai",
        currency: "Thai Baht (฿)",
        bestSeason: "Cool Season (November-February)",
        logo: require("../assets/Country/Thailand.png"),
    },
    NewZealand: {
        info: "Popular places: Auckland, Wellington, Queenstown.",
        bestInfo: "Must-visit: Milford Sound, Hobbiton, Tongariro National Park.",
        language: "English, Maori",
        currency: "New Zealand Dollar (NZD $)",
        bestSeason: "Spring (September-November), Fall (March-May)",
        logo: require("../assets/Country/NewZealand.png"),
    },
    Argentina: {
        info: "Popular places: Buenos Aires, Mendoza, Bariloche.",
        bestInfo: "Must-visit: Iguazu Falls, Perito Moreno Glacier, La Boca.",
        language: "Spanish",
        currency: "Argentine Peso (ARS $)",
        bestSeason: "Spring (September-November), Fall (March-May)",
        logo: require("../assets/Country/Argentina.png"),
    },
    Egypt: {
        info: "Popular places: Cairo, Luxor, Alexandria.",
        bestInfo: "Must-visit: Pyramids of Giza, Valley of the Kings, Nile River.",
        language: "Arabic",
        currency: "Egyptian Pound (EGP £)",
        bestSeason: "Winter (October-April)",
        logo: require("../assets/Country/Egypt.png"),
    },
    Turkey: {
        info: "Popular places: Istanbul, Cappadocia, Antalya.",
        bestInfo: "Must-visit: Hagia Sophia, Blue Mosque, Pamukkale.",
        language: "Turkish",
        currency: "Turkish Lira (₺)",
        bestSeason: "Spring (April-May), Fall (September-October)",
        logo: require("../assets/Country/Turkey.png"),
    },
    Greece: {
        info: "Popular places: Athens, Santorini, Mykonos.",
        bestInfo: "Must-visit: Acropolis, Parthenon, Oia.",
        language: "Greek",
        currency: "Euro (€)",
        bestSeason: "Spring (April-June), Fall (September-October)",
        logo: require("../assets/Country/Greece.png"),
    },
    Netherlands: {
        info: "Popular places: Amsterdam, Rotterdam, Utrecht.",
        bestInfo: "Must-visit: Anne Frank House, Van Gogh Museum, Keukenhof.",
        language: "Dutch",
        currency: "Euro (€)",
        bestSeason: "Spring (April-May), Summer (June-August)",
        logo: require("../assets/Country/Netherlands.png"),
    },
    Switzerland: {
        info: "Popular places: Zurich, Geneva, Lucerne.",
        bestInfo: "Must-visit: Matterhorn, Lake Geneva, Jungfraujoch.",
        language: "German, French, Italian",
        currency: "Swiss Franc (CHF)",
        bestSeason: "Summer (June-August), Winter (December-February)",
        logo: require("../assets/Country/Switzerland.png"),
    },
    Portugal: {
        info: "Popular places: Lisbon, Porto, Faro.",
        bestInfo: "Must-visit: Belem Tower, Douro Valley, Algarve Beaches.",
        language: "Portuguese",
        currency: "Euro (€)",
        bestSeason: "Spring (March-May), Fall (September-October)",
        logo: require("../assets/Country/Portugal.png"),
    },
    Sweden: {
        info: "Popular places: Stockholm, Gothenburg, Malmo.",
        bestInfo: "Must-visit: Vasa Museum, Gamla Stan, Liseberg.",
        language: "Swedish",
        currency: "Swedish Krona (SEK)",
        bestSeason: "Summer (June-August)",
        logo: require("../assets/Country/Sweden.png"),
    },
    SouthKorea: {
        info: "Popular places: Seoul, Busan, Jeju Island.",
        bestInfo: "Must-visit: Gyeongbokgung Palace, N Seoul Tower, Haeundae Beach.",
        language: "Korean",
        currency: "South Korean Won (₩)",
        bestSeason: "Spring (April-June), Fall (September-November)",
        logo: require("../assets/Country/SouthKorea.png"),
    },
    Dubai: {
        info: "Popular places: Burj Khalifa, Dubai Mall, Palm Jumeirah.",
        bestInfo: "Must-visit: Burj Al Arab, Dubai Fountain, Desert Safari.",
        language: "Arabic",
        currency: "UAE Dirham (AED)",
        bestSeason: "Winter (November-March)",
        logo: require("../assets/Country/Dubai.png"),
    },
    Indonesia: {
        info: "Popular places: Bali, Jakarta, Yogyakarta.",
        bestInfo: "Must-visit: Borobudur Temple, Uluwatu Temple, Komodo National Park.",
        language: "Indonesian",
        currency: "Indonesian Rupiah (IDR)",
        bestSeason: "Dry Season (April-October)",
        logo: require("../assets/Country/Indonesia.png"),
    }
};

// Function to get country info case-insensitively
const getCountryInfo = (country) => {
    const normalizedCountry = Object.keys(countryInfo).find(
        key => key.toLowerCase() === country.toLowerCase()
    );
    return countryInfo[normalizedCountry] || null;
};

// Export as named exports
export { countryInfo, getCountryInfo };
